import React, { useEffect, useState } from 'react'
import '../styles/paxModal.scss'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { 
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    adultTotalAmount,
    childTotalAmount,
    infantTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount,
    cancelBooking,
    closePaxModel,
    seniorCountIncrease,
    seniorCountDecrease
} from '../features/booking/bookingSlice';



const Pax = ({category, ageText, price, count, actionType, total}) => {
    const dispatch = useDispatch()
    
    const handleIncrese = () => {
        dispatch(actionType.increase())
    }
    
    const handleDecrease = () => {

        dispatch(actionType.decrease())
    }    
    return (
         <div className="pax">
                <p>
                    <span>{category}</span>
                    <span>{ageText}</span>
                </p>
                <div className="btnContainer">
                    {
                        count === 0 ? <AiOutlineMinusCircle className='disabledBtn'  /> : <AiOutlineMinusCircle onClick={handleDecrease} />
                    }
                    
                    <p>{count}</p>

                    {
                        count === 20 ? <AiOutlinePlusCircle className='disabledBtn' /> : <AiOutlinePlusCircle onClick={handleIncrese} />
                    }
                    
                </div>
                <div className="price">
                    <span>MYR {total}</span>
                </div>
            </div>
    )
}

const PaxModal = ({selectedDate}) => {
    const {
        adultCount, 
        childCount, 
        infantCount,
        seniorCount,
        adultTotal,
        childTotal, 
        totalAmount,
        bookingDate,
        type,
        title,
        seniorTotal
    } = useSelector((store) => store.booking)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(adultTotalAmount())
        dispatch(childTotalAmount())
        dispatch(infantTotalAmount())
        dispatch(seniorTotalAmount())
        dispatch(countTotalBookingAmount())

    },[adultCount, childCount, seniorCount, infantCount])
    const navigate = useNavigate()

  return (
    <div className='paxSelectorContainer'>
        <div className='cancelBookingContainer'>
            <button  className='backIcon' onClick={() => dispatch(closePaxModel())}>Back</button>
            <button  className='crossIcon' onClick={() => {
                dispatch(cancelBooking())
                return navigate("/")
            }}>Cancel</button>
        </div>
        <p className='bookingType'>{title}</p>
        <h1>Select number of tickets</h1>
        <div className="paxSelector">
            <Pax  
            category ={"Adult"} 
            ageText={"13 to 59 yrs"} 
            price={199}
            count={adultCount}
            actionType={{
                increase: adultCountIncrease,
                decrease: adultCountDecrease
            }}
            total={adultTotal}
             />
            <Pax  
            category ={"Child"} 
            ageText={"5 to 12 yrs"} 
            price={150}
            count={childCount}
            actionType={{
                increase: childCountIncrease,
                decrease: childCountDecrease
            }}
            total={childTotal}
            />
            {
                type === 'ramadanDinner' && <Pax  
                category ={"Senior"} 
                ageText={"Above 59 years"} 
                price={150}
                count={seniorCount}
                actionType={{
                    increase: seniorCountIncrease,
                    decrease: seniorCountDecrease
                }}
                total={seniorTotal}
                />
            }
        </div>
            <div className="totalPayable">
                <span>Total</span>
               <span>MYR {totalAmount}</span>
            </div>
               
        <div className="dateContainer">
                <p>{bookingDate}  </p> 
                {
                    totalAmount > 0 &&
                    <Link to="/booking"><button>Next</button></Link> 

                }
            
        </div>
    </div>
  )
}

export default PaxModal