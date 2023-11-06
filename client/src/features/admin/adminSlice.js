import { createSlice } from "@reduxjs/toolkit";
import { getAdmin, setAdmin } from "../../utils/localStorage";
import {toast} from 'react-toastify'

const initialState = {
    adminEmail: null,
    loading: false,
    error: null,
    isSidebarOpen: true
}

const adminSlice = createSlice({
    name:'admin',
    initialState : getAdmin() || initialState,
    reducers:{
        adminLoginStart: (state) => {
            state.loading = true
        },
        adminLoginSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.adminEmail = action.payload
            state.isSidebarOpen = false
            setAdmin(state)
        },
        adminLoginFailed: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        adminSidebarOpen: (state) => {
            state.isSidebarOpen = true
            setAdmin(state)
        },
        adminSidebarClose: (state) => {
            state.isSidebarOpen = false
            setAdmin(state)
        },
        adminLogout: (state) => {
            toast.success("Admin Logout Successfully")
            setAdmin(initialState)
            return state = initialState
        }
    }
})

export const {
    adminLoginStart, 
    adminLoginSuccess, 
    adminLoginFailed,
    adminSidebarOpen,
    adminSidebarClose,
    adminLogout
} = adminSlice.actions

export default adminSlice.reducer