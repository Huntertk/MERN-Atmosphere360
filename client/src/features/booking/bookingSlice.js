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
    bookingResponse: "",
    type:"",
    totalBookingsCount: 0,
    bookingDay: ""
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
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.adultTotal = state.adultCount *  248
                   return 
                } else{
                    state.adultTotal =  state.adultCount *  199
                }
            } else if(state.type === 'lunch'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.adultTotal =  state.adultCount *  148
                    return 
                 } else{
                    state.adultTotal = state.adultCount *  118
                 }
            } else if(state.type === 'tea'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.adultTotal =  state.adultCount *  110
                    return
                 } else{
                    state.adultTotal = state.adultCount *  88
                 }
            }
            // state.adultTotal = state.type === 'dinner' ?  state.adultCount *  199 : state.type === 'lunch' ? state.adultCount * 118 : state.adultCount * 88   
            setBookingDetailsFromLocalStorage(state)
        },
        childTotalAmount: (state) => {
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.childTotal = state.childCount *  200
                   return 
                } else{
                    state.childTotal =  state.childCount *  150
                }
            } else if(state.type === 'lunch'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.childTotal =  state.childCount *  111
                    return 
                 } else{
                    state.childTotal = state.childCount *  82
                 }
            } else if(state.type === 'tea'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.childTotal = state.childCount *  90
                    return
                 } else{
                    state.childTotal = state.childCount *  70
                 }
            }
            // state.childTotal = state.type === 'dinner' ? state.childCount * 150 : state.type === 'lunch' ? state.childCount * 82 : state.childCount * 70
            setBookingDetailsFromLocalStorage(state)
        },
        infantTotalAmount: (state) => {
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.infantTotal = state.infantCount *  50
                   return 
                } else{
                    state.infantTotal =  state.infantCount *  50
                }
            } else if(state.type === 'lunch'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.infantTotal =  state.infantCount *  30
                    return 
                 } else{
                    state.infantTotal = state.infantCount *  30
                 }
            } else if(state.type === 'tea'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.infantTotal = state.infantCount *  25
                    return
                 } else{
                    state.infantTotal = state.infantCount *  25
                 }
            }

            // state.infantTotal = state.type === 'dinner' ? state.infantCount * 50 : state.type === 'lunch' ? state.infantCount * 30 : state.infantCount * 25
            setBookingDetailsFromLocalStorage(state)
        },
        seniorTotalAmount: (state) => {
            if(state.type === 'dinner'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.seniorTotal = state.seniorCount *  200
                   return 
                } else{
                    state.seniorTotal =  state.seniorCount *  150
                }
            } else if(state.type === 'lunch'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.seniorTotal =  state.seniorCount *  111
                    return 
                 } else{
                    state.seniorTotal = state.seniorCount *  82
                 }
            } else if(state.type === 'tea'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat') {
                    state.seniorTotal = state.seniorCount *  90
                    return
                 } else{
                    state.seniorTotal = state.seniorCount *  70
                 }
            }

            // state.seniorTotal = state.type === 'dinner' ? state.seniorCount * 150 : state.type === 'lunch' ? state.seniorCount * 82 : state.seniorCount * 70
            setBookingDetailsFromLocalStorage(state)
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
            state.totalBookingsCount = action.payload.totalBookingsCount
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
        choosingBooking: (state, action) => {
            state.type = action.payload
            setBookingDetailsFromLocalStorage(state)
        }
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
    choosingBooking
} = bookingSlice.actions

export default bookingSlice.reducer