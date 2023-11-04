import React, { useState } from 'react'
import '../styles/bignavbar.scss';
import {BsFillCaretDownFill} from 'react-icons/bs'
import { navData } from '../data';

const NavLinks = ({data}) => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    
    return(
        <div className="navLinks" onMouseLeave={() => setIsNavOpen(false)}>
            <p  onMouseEnter={() => {
                setIsNavOpen(true)
            }}>
                <span>{data.title}</span>
                <BsFillCaretDownFill />
            </p>
            <div className={isNavOpen ? 'open navLinksWrapper':'navLinksWrapper close'}>
                {
                    data.links.map((item) => {
                        return <a  key={item.id} href={item.link} target='_blank'>{item.linkTitle}</a>
                    })
                }
            </div>
        </div>
    )
}

const BigNavbar = () => {

  return (
    <section className='bigNavbarMainContainer'>
        <div className='bigNavContainer'>
            {
                navData.map((data) => {
                    return <NavLinks key={data.id} data={data} />
                })

            }
            </div>
    </section>
  )
}

export default BigNavbar