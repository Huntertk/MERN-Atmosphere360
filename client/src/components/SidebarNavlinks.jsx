import React, { useState } from 'react'
import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io'

const SidebarNavlinks = ({data}) => {
    const [isLinkOpen, setIsLinkOpen] = useState(false
        )
    const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = (id) => {
    setModalOpen((prev) => {
      return prev ? false : true
    })
  } 
  console.log(data.id);
  return (
    <div className="linksContainer">
              <div className="contentContainer" onClick={handleModalOpen}>
                  <p>{data.title}</p>
                  {
                    modalOpen ? <IoIosArrowDown /> : <IoIosArrowForward />
                  }
                  
                </div>
    <div className={modalOpen ? "links modalClose":" links modalOpen"}>
                  {
                    data.links.map((linkData) => {
                      return (
                        <a 

                        href={linkData.link} 
                        target='_blank' 
                        key={linkData.id}>
                            {linkData.linkTitle}
                          </a>
                      )
                    })
                  }
                </div>
              </div>
  )
}

export default SidebarNavlinks