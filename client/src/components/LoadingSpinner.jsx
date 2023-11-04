import React from 'react'
import '../styles/loadingSpinner.scss'

const LoadingSpinner = () => {
  return (
    <div className='loadingMainConatiner'>
        
   <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingSpinner
