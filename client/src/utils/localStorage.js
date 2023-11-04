export const setBookingDetailsFromLocalStorage = (booking) => {
    return localStorage.setItem('booking-details', JSON.stringify(booking))
}


export const getBookingDetailsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('booking-details'))
}


export const setAdmin = (adminEmail) => {
    return localStorage.setItem('admin_login', JSON.stringify(adminEmail))
}
export const getAdmin = (adminEmail) => {
    return JSON.parse(localStorage.getItem('admin_login'))
}