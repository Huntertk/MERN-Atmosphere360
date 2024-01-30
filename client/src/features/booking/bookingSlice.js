import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";
import { toast } from 'react-toastify';
import { publicHolidays } from "../../data";


const initialState = {
    adultCount:0,
    childCount:0,
    infantCount:0,
    seniorCount:0,
    adultTotal: 0,
    childTotal: 0,
    infantTotal: 0,
    seniorTotal: 0,
    totalAmount: 0,
    bookingDate: "",
    isPaxModal: false,
    loading: false,
    name:"", 
    email:"",
    mobileNumber:"",
    bookingResponse: "",
    type:"",
    totalBookingsCount: 0,
    bookingDay: "",
    bookingId:"",
    title:""
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
        },
        adultTotalAmount: (state) => {
            const  publicHoliday = publicHolidays.includes(state.bookingDate);
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.adultTotal = state.adultCount *  249
                   return 
                } else if(publicHoliday){
                    state.adultTotal = state.adultCount *  249
                } else{
                    state.adultTotal =  state.adultCount *  199 
                }
            } 
        },
        childTotalAmount: (state) => {
            const  publicHoliday = publicHolidays.includes(state.bookingDate);
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.childTotal = state.childCount *  149
                   return 
                } else if(publicHoliday){
                    state.childTotal = state.childCount *  149
                } else{
                    state.childTotal =  state.childCount *  119
                }
            }
        },
        infantTotalAmount: (state) => {
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.infantTotal = state.infantCount *  50
                   return 
                } else{
                    state.infantTotal =  state.infantCount *  50
                }
            } 
        },
        seniorTotalAmount: (state) => {
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.seniorTotal = state.seniorCount *  200
                   return 
                } else{
                    state.seniorTotal =  state.seniorCount *  150
                }
            }
        },
        countTotalBookingAmount: (state) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.infantTotal + state.seniorTotal
            state.bookingResponse = ""
            setBookingDetailsFromLocalStorage(state)
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = ""
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
        },
        openPaxModel: (state) => {
            state.isPaxModal = true
        },
        closePaxModel: (state) => {
            state.isPaxModal = false
        }, 
        cancelBooking: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            toast.warning("Booking Cancel")
            return state = initialState
        }, 
        bookingStart: (state,action) =>{
            state.loading  = true
            state.bookingResponse = ""
            
        },
        bookingSucess: (state, action) => {
            state.loading  = false
            state.name = action.payload.name
            state.email = action.payload.email
            state.mobileNumber = action.payload.mobileNumber
            state.bookingResponse = action.payload.bookingResponse
            state.totalBookingsCount = action.payload.totalBookingsCount
            setBookingDetailsFromLocalStorage(state)
        },
        bookingFailed: (state, action) => {
            state.loading = false
            toast.error("Booking Failed")
        },
        bookingConfirm: (state, action) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
        choosingBooking: (state, action) => {
            state.type = action.payload.type
            state.title = action.payload.title
            setBookingDetailsFromLocalStorage(state)
        },
        settingBookingResponse: (state, action) => {
            console.log(action.payload);
            state.bookingResponse = ""
            state.bookingId = action.payload.createBookingId
            setBookingDetailsFromLocalStorage(state)
        },
        initialRender: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
    }
})

export const {
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
    setBookingDate,
    openPaxModel,
    closePaxModel,
    cancelBooking,
    bookingFailed,
    bookingSucess,
    bookingStart,
    bookingConfirm,
    choosingBooking,
    settingBookingResponse,
    initialRender
} = bookingSlice.actions

export default bookingSlice.reducer