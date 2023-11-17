import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";
import { toast } from 'react-toastify';


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
    bookingResponse: ""
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        adultTotalAmount: (state) => {
            state.adultTotal = state.adultCount * 10
            setBookingDetailsFromLocalStorage(state)
        },
        childTotalAmount: (state) => {
            state.childTotal = state.childCount * 10
            setBookingDetailsFromLocalStorage(state)
        },
        infantTotalAmount: (state) => {
            state.infantTotal = state.infantCount * 10
            setBookingDetailsFromLocalStorage(state)
        },
        seniorTotalAmount: (state) => {
            state.seniorTotal = state.seniorCount * 10
            setBookingDetailsFromLocalStorage(state)
        },
        countTotalBookingAmount: (state) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.infantTotal + state.seniorTotal
            state.bookingResponse = ""
            setBookingDetailsFromLocalStorage(state)
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload
            state.bookingResponse = ""
            setBookingDetailsFromLocalStorage(state)
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
            console.log(state);
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
    bookingConfirm
} = bookingSlice.actions

export default bookingSlice.reducer