import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allBookings: [],
    pendingBookingsDetails: [],
    completedBookingsDetails: [],
    confirmedBookingsDetails: [],
    cancelledBookingsDetails: [],
    loading: false,
    updateBookingStatus: false
}


const bookingDetails  = createSlice({
    name:'bookingDetails',
    initialState,
    reducers:{
        getBookingStart:(state) => {
            state.loading = true
        },
        getAllBookingSuccess: (state, action) => {
            state.loading = false
            state.allBookings = action.payload
        },
        getPendingSucess: (state, action) => {
            state.loading = false
            state.pendingBookingsDetails = action.payload
        },
        getCompletedSucess: (state, action) => {
            state.loading = false
            state.completedBookingsDetails = action.payload
        },
        getConfirmedSucess: (state, action) => {
            state.loading = false
            state.confirmedBookingsDetails = action.payload
        },
        getCancelledSucess: (state, action) => {
            state.loading = false
            state.cancelledBookingsDetails = action.payload
        },
        updateBookingStats : (state) => {
            state.updateBookingStatus = state.updateBookingStatus ? false : true
        }
    }
})


export const {
    getAllBookingSuccess, 
    getBookingStart,
    getPendingSucess,
    getCompletedSucess,
    getConfirmedSucess,
    getCancelledSucess,
    updateBookingStats
}  = bookingDetails.actions

export default bookingDetails.reducer