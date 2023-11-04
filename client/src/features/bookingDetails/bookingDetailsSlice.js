import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allBookings: []
}


const bookingDetails  = createSlice({
    name:'bookingDetails',
    initialState,
    reducers:{
        getAllBooking: (state, action) => {
            state.allBookings = action.payload
        }
    }
})


export const {getAllBooking}  = bookingDetails.actions
export default bookingDetails.reducer