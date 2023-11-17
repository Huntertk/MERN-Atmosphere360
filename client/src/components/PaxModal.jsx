import React, { useEffect, useState } from 'react'
import '../styles/paxModal.scss'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    infantCountDecrease,
    infantCountIncrease,
    seniorCountDecrease,
    seniorCountIncrease,
    adultTotalAmount,
    childTotalAmount,
    infantTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount,
    cancelBooking
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
                        count === 5 ? <AiOutlinePlusCircle className='disabledBtn' /> : <AiOutlinePlusCircle onClick={handleIncrese} />
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
        infantTotal,
        seniorTotal,
        totalAmount,
        bookingDate,
        type
    } = useSelector((store) => store.booking)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(adultTotalAmount())
        dispatch(childTotalAmount())
        dispatch(infantTotalAmount())
        dispatch(seniorTotalAmount())
        dispatch(countTotalBookingAmount())

    },[adultCount, childCount, seniorCount, infantCount])

  return (
    <div className='paxSelectorContainer'>
        <button  className='crossIcon' onClick={() => dispatch(cancelBooking())}>Cancel</button>
        <p className='bookingType'>{type === 'dinner' ? "Dinner Buffet" : type === 'lunch' ? "Lunch Buffet": "Tea Buffet"}</p>
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
            ageText={"6 to 12 yrs"} 
            price={150}
            count={childCount}
            actionType={{
                increase: childCountIncrease,
                decrease: childCountDecrease
            }}
            total={childTotal}
            />
            <Pax  
            category ={"Infant"} 
            ageText={"2 to 5 yrs"} 
            price={50} 
            count={infantCount}
            actionType={{
                increase: infantCountIncrease,
                decrease: infantCountDecrease
            }}
            total={infantTotal}
            />
            <Pax  
            category ={"Senior"} 
            ageText={"Above 59 yrs"} 
            price={150} 
            count={seniorCount}
            actionType={{
                increase: seniorCountIncrease,
                decrease: seniorCountDecrease
            }}
            total={seniorTotal}
            />
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