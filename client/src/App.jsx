import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Booking from './pages/Booking'
import BookingDateConfirmation from './components/BookingDateConfirmation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './pages/adminPage/AdminLogin'
import Admin from './pages/adminPage/Admin'
import AdminProtectedRoute from './components/adminComponents/AdminProtectedRoute'
import AdminLayout from './components/adminComponents/AdminLayout'
import AllBookings from './pages/adminPage/AllBookings'
import PendingBooking from './pages/adminPage/PendingBooking'
import CompletedBooking from './pages/adminPage/CompletedBooking'
import CancelledBooking from './pages/adminPage/CancelledBooking'
import ConfirmedBooking from './pages/adminPage/ConfirmedBooking'
import PaymentSucess from './pages/PaymentSucess'
import PaymentFailed from './pages/PaymentFailed'
import TermAndConditionPage from './pages/TermAndConditionPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CompanyDetails from './pages/CompanyDetails'
import HelpCenter from './pages/HelpCenter'
import ConfirmBooking from './pages/ConfirmBooking'
import ReactGa from 'react-ga'
import ManageDates from './pages/adminPage/ManageDates'
import DinnerDateManage from './pages/adminPage/DinnerDateManage'
import TeaDateManage from './pages/adminPage/TeaDateManage'
import LunchDateManage from './pages/adminPage/LunchDateManage'
import Analytics from './pages/adminPage/Analytics'
import RamadanDinnerDateManage from './pages/adminPage/RamadanDinnerDateManage'

const TRACKING_ID = 'G-CZWEX6791Q'
ReactGa.initialize(TRACKING_ID)

const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer position='top-center' />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/date-confirm" element={<BookingDateConfirmation />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/success" element={<PaymentSucess />} />
          <Route path="/bookingconfirm" element={<ConfirmBooking />} />
          <Route path="/terms" element={<TermAndConditionPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/companydetails" element={<CompanyDetails />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<AdminProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/all-booking" element={<AllBookings />} />
            <Route path="/admin/manage-dates" element={<ManageDates />} />
            <Route path="/admin/manage-dates/dinner" element={<DinnerDateManage />} />
            <Route path="/admin/manage-dates/ramadan-dinner" element={<RamadanDinnerDateManage />} />
            <Route path="/admin/manage-dates/tea" element={<TeaDateManage />} />
            <Route path="/admin/manage-dates/lunch" element={<LunchDateManage />} />
            <Route path="/admin/confirmed-booking" element={<ConfirmedBooking />} />
            <Route path="/admin/completed-booking" element={<CompletedBooking />} />
            <Route path="/admin/pending-booking" element={<PendingBooking />} />
            <Route path="/admin/cancelled-booking" element={<CancelledBooking />} />
            <Route path="/admin/analytics" element={<Analytics />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App