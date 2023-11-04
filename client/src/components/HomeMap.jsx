import React from 'react'

const HomeMap = () => {
  return (
    <div style={{margin:'2rem  auto', width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>

      <h1 style={{margin:'1rem'}}>Atmosphere 360</h1>
      
      <iframe width="360" height="400" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Atmosphere%20360,%20Jalan%20Puncak,%20Kuala%20Lumpur,%20Federal%20Territory%20of%20Kuala%20Lumpur,%20Malaysia+(Atmosphere%20360)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
    </div>
  )
}

export default HomeMap