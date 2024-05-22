import React, { useEffect, useState } from 'react'
import '../styles/bookingDateConfirmation.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { format,differenceInCalendarDays } from 'date-fns';
import PaxModal from './PaxModal';
import { DayPicker, Row } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import { openPaxModel, setBookingDate } from '../features/booking/bookingSlice';
import {Navigate} from 'react-router-dom'
import axios from 'axios'
import moment from 'moment';
import LoadingSpinner from './LoadingSpinner';


function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const DateBtn = ({setSelectedDate, setCalenderOpen,selectedDate, calenderOpen, disabledDates}) => {
    const disabledBtnToDate = (btnDate) => {
        const settingHourToZero = disabledDates?.map(d => d.setHours(0,0,0,0))
        const findingDate = settingHourToZero?.find(d => d === new Date(Date.now() + btnDate).setHours(0,0,0,0))
        return findingDate
    }
    const {type} = useSelector(store => store.booking)
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    
    function getDayName(date) {
        return new Date(date).toLocaleDateString('en-US', {weekday: 'short'});
      }
    const day = new Date().getDay()
    const date = new Date(Date.now()).getDate()

    return (
        <div className="dateBtnContainer">
           <button className={selectedDate.toString() == new Date(Date.now()+ 1000*60*60 * 24)  ? "active" : ""}
             onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60 * 24))}
             disabled={disabledBtnToDate(1000 *60 *60 *24)}
           >
            <span>
                {new Date(Date.now()+ 1000*60*60 * 24).getDate()}
            </span>
            <span>
                {getDayName(Date.now()+ 1000*60*60 * 24)}
            </span>
           </button>
           <button 
           className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24*2)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24*2))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*2)}
           >
            <span>
            {new Date(Date.now() + 1000 *60 *60 *24*2).getDate()}
            </span>
            <span>
                {getDayName(Date.now() + 1000 * 60 * 60 * 24*2)}
            </span>
            </button>
           <button  
            className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24 * 3)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 3))} 
           disabled={disabledBtnToDate(1000 *60 *60 *24*3)}
           >
            <span>
            {new Date(Date.now() + 1000 *60 *60 *24 *3).getDate()}
            </span>
            <span>
                {getDayName(Date.now() + 1000 * 60 * 60 * 24 * 3)}
            </span>
            </button>
           <button 
            className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24 *4)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 4))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*4)}
           >
            <span>
            {new Date(Date.now() + 1000 *60 *60 *24 *4).getDate()}
            </span>
            <span>
                {getDayName(Date.now() + 1000 * 60 * 60 * 24 * 4)}
            </span>
            </button>
           <button className={calenderOpen ? "moreDates active" : "moreDates"} onClick={() => setCalenderOpen(prev => !prev)}>More Dates</button>
        </div>
    )
}

const BookingDateConfirmation = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const {isPaxModal, bookingDate, type} = useSelector(store => store.booking)
    const [blockedDates, setBlockedDates] = useState([])
    const disabledDates = blockedDates?.map((dates) => new Date(dates.blockDates));
    const teaBlockRegistration = new Date(Date.now()) > new Date(Date.now()).setHours(15,0,0,0)
    const dinnerBlockRegistration = new Date(Date.now()) > new Date(Date.now()).setHours(17,30,0,0)
    const lunchBlockRegistration = new Date(Date.now()) > new Date(Date.now()).setHours(11,0,0,0)
        const [selectedDate, setSelectedDate] = useState("")
        const [calenderOpen, setCalenderOpen] = useState(false)
        const disabledDays  = [
            ...disabledDates,
            type === 'tea' && teaBlockRegistration && new Date(Date.now()),
            type === 'dinner' && dinnerBlockRegistration && new Date(Date.now()),
            type === 'lunch' && lunchBlockRegistration && new Date(Date.now())
        ]
        if(!type){
            return <Navigate to="/" />
        }

        const defaultMonth = new Date(Date.now());
        const getDinnerBlockDates = async () => {

            try {
                setIsLoading(true)
                const {data} = await axios.get('/api/v1/dinner-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
                setIsLoading(false)
              } catch (error) {
                  console.log(error);
              }
          }

          const getLunchBlockDates = async () => {
            try {
                setIsLoading(true)
                const {data} = await axios.get('/api/v1/lunch-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
                setIsLoading(false)
              } catch (error) {
                  console.log(error);
              }
          }
          const getTeaBlockDates = async () => {
            try {
                setIsLoading(true)
                const {data} = await axios.get('/api/v1/tea-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
                setIsLoading(false)
              } catch (error) {
                  console.log(error);
              }
          }

          const getRamadanDinnerBlockDates = async () => {
            try {
                setIsLoading(true)
                const {data} = await axios.get('/api/v1/ramadan-dinner-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
                setIsLoading(false)
              } catch (error) {
                  console.log(error);
              }
          }


        useEffect(() => {
            if(type==='dinner'){
                getDinnerBlockDates()
                return 
            } else if(type === 'lunch'){
                getLunchBlockDates()
                return
            } else if(type === 'ramadanDinner'){
                getRamadanDinnerBlockDates()
                return
            } else if(type === 'tea'){
                getTeaBlockDates()
                return
            }
          },[])

          if(isLoading){
            return <LoadingSpinner />
          }
  return (
    <section className='bookingDateConfirmationMainContainer'>
        <div className="bookingDateWrapper">
            <h1>select date</h1>
            <DateBtn 
            setSelectedDate={setSelectedDate} 
            setCalenderOpen={setCalenderOpen} 
            selectedDate={selectedDate}
            calenderOpen={calenderOpen}
            disabledDates={disabledDates}
            />
            <div className="moreDatesContainer">
                <DayPicker
                defaultMonth={new Date(Date.now())}
                style={calenderOpen === false && {display:'none'}}
                mode="single"
                selected={selectedDate} 
                fromMonth={defaultMonth}
                toDate={type === 'ramadanDinner' ?  new Date(2024,3,9) : new Date(Date.now() + 1000 * 60 *60 *24 *60)}
                // components={{ Row: OnlyFutureRow }}
                // showOutsideDays
                hidden={isPastDate}
                disabled={disabledDays}
                onSelect={setSelectedDate}
            />
            </div>
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <p>You selected {format(selectedDate, 'PPP')}.</p>
                    <button onClick={() => {
                        dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                        dispatch(openPaxModel())
                    }}>Next</button>
                    </> : <p>Select One Date</p>
                }
            </div>
        </div>
        
       { isPaxModal && <PaxModal  selectedDate={selectedDate} />}
        
        
    </section>
  )
}

export default BookingDateConfirmation