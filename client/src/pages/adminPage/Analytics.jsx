import React, { useEffect, useState } from 'react'
import '../../styles/analytics.scss'

import BookingAnalytics from '../../components/adminComponents/BookingAnalytics';
import MonthlyBookingAmount from '../../components/adminComponents/MonthlyBookingAmount';

const Analytics = () => {

  return (
    <>
      <BookingAnalytics />
      <MonthlyBookingAmount />
    </>
  )
}

export default Analytics