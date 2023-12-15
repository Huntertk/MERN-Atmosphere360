import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { getBookingStart, getAllBookingSuccess, getConfirmedSucess} from '../../features/bookingDetails/bookingDetailsSlice';
import '../../styles/analytics.scss'
import LoadingSpinner from '../../components/LoadingSpinner';

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BookingAnalytics = () => {
    const [reportMonth, setReportMonth] = useState("Nov")
    const {confirmedBookingsDetails, loading, updateBookingStatus} = useSelector(state => state.bookingDetails)

    const filterMonth = confirmedBookingsDetails.filter(d => new Date(d.createdAt).toString().split(' ')[1] === reportMonth)
    const newData = [
      { 
        name:  reportMonth,
        dinner: filterMonth.filter(d => d.bookingType === 'dinner').length,
        lunch:  filterMonth.filter(d => d.bookingType === 'lunch').length,
        tea:  filterMonth.filter(d => d.bookingType === 'tea').length,
      }
    ]
  
    const dispatch = useDispatch()
    const getAllBookings = async () => {
      try {
        dispatch(getBookingStart())
        const res = await axios.get("/api/v1/booking/confirmed")
        dispatch(getConfirmedSucess(res.data.confirmedBookings))
        
      } catch (error) {
        console.log(error);
        
      }
    }
  
    useEffect(() => {
      getAllBookings()
    },[updateBookingStatus])

    if(loading) {
        return <LoadingSpinner />
      }
    
      if(confirmedBookingsDetails.length === 0){
        return <div>
           <h1>No Bookings Now</h1>
        </div>
      }
      let uniqueMonth = [...new Set(confirmedBookingsDetails.map(d => new Date(d.createdAt).toString().split(' ')[1]))];
  
  return (
    <section className='analyticsContainer'>
    <h1>Booking Report</h1>
    <select name="month" id="" value={reportMonth} onChange={(e) => setReportMonth(e.target.value)}>
        {
            uniqueMonth.map((val) => <option key={val} value={val}>{val}</option>)
        
        }
    </select>
   {confirmedBookingsDetails &&
    
       <BarChart
       width={420}
       height={300}
       data={newData}
       margin={{
           top: 5,
           right: 30,
           left: 20,
           bottom: 5,
        }}
        >
      <CartesianGrid strokeDasharray="6 6" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="dinner" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="lunch" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      <Bar dataKey="tea" fill="#ff684d" activeBar={<Rectangle fill="blue" stroke="yellow" />} />
    </BarChart>
    } 
</section>
  )
}

export default BookingAnalytics