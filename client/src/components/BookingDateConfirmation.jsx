import React, { useState } from 'react'
import '../styles/bookingDateConfirmation.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { format,differenceInCalendarDays } from 'date-fns';
import PaxModal from './PaxModal';
import { DayPicker, Row } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import { openPaxModel, setBookingDate } from '../features/booking/bookingSlice';
import {Navigate} from 'react-router-dom'


function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const DateBtn = ({setSelectedDate, setCalenderOpen,selectedDate, calenderOpen}) => {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    
    function getDayName(date) {
        return new Date(date).toLocaleDateString('en-US', {weekday: 'short'});
      }
    const day = new Date().getDay()
    const date = new Date(Date.now()).getDate()
    return (
        <div className="dateBtnContainer">
           <button className={selectedDate.toString() == new Date(Date.now())  ? "active" : ""} disabled
           >
            <span>
                {new Date(Date.now()).getDate()}
            </span>
            <span>
                {getDayName(Date.now())}
            </span>
           </button>
           <button 
           className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24)  ? "active" : ""}
 disabled>
            <span>
            {new Date(Date.now() + 1000 *60 *60 *24).getDate()}
            </span>
            <span>
                {getDayName(Date.now() + 1000 * 60 * 60 * 24)}
            </span>
            </button>
           <button  
            className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24 * 2)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 2))}
           disabled >
            <span>
            {new Date(Date.now() + 1000 *60 *60 *24 *2).getDate()}
            </span>
            <span>
                {getDayName(Date.now() + 1000 * 60 * 60 * 24 * 2)}
            </span>
            </button>
           <button 
            className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24 *3)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 3))}
           >
            <span>
            {new Date(Date.now() + 1000 *60 *60 *24 *3).getDate()}
            </span>
            <span>
                {getDayName(Date.now() + 1000 * 60 * 60 * 24 * 3)}
            </span>
            </button>
           <button className={calenderOpen ? "moreDates active" : "moreDates"} onClick={() => setCalenderOpen(prev => !prev)}>More Dates</button>
        </div>
    )
}

const BookingDateConfirmation = () => {

    const dispatch = useDispatch()
    const disabledDays = [
        new Date(2023, 12, 1),
        new Date(2023, 11, 31),
        new Date(2023, 11, 25),
        new Date(Date.now()),  
        new Date(Date.now() + 1000 * 60 * 60 * 24 ),
        new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 ),
      ];
    const {isPaxModal, bookingDate, type} = useSelector(store => store.booking)
        const [selectedDate, setSelectedDate] = useState("")
        const [calenderOpen, setCalenderOpen] = useState(false)
        if(!type){
            return <Navigate to="/" />
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
            />
            <div className="moreDatesContainer">
                <DayPicker
                defaultMonth={new Date(Date.now())}
                style={calenderOpen === false && {display:'none'}}
                mode="single"
                selected={selectedDate} 
                fromDate={new Date()}
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