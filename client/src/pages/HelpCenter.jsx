import React, { useState } from 'react'
import '../styles/helpCenterFaq.scss';
import {BiSolidChevronDownCircle, BiSolidChevronUpCircle} from 'react-icons/bi';
import { helpCenterBookingFAQ, helpCenterCancellationFAQ } from '../data';


const QuestionContainer = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return  (
        <div className='questionNanswerContainer' >
            <div className="questionContainer" onClick={() => setIsModalOpen(prev => !prev)}>
                <h2>{data.ques}</h2>
                <div className="icon">
                   {isModalOpen ? 
                   <BiSolidChevronUpCircle />
                   : 
                   <BiSolidChevronDownCircle/>
                }
                </div>
            </div>
            {
                isModalOpen && <div className="answer">
                    <p>{data.ans}</p>
                </div>
            }
                

        </div>
    )
}


const HelpCenter = () => {
  return (
    <section className='homeFAQMainContainer'>
        <h1>Frequently Asked Questions</h1>
        <div className="questionMainContainer">
          <h1>Bookings</h1>
            {
                helpCenterBookingFAQ.map((data) => {
                    return <QuestionContainer key={data.id} data={data} />
                })

            }
        </div>

        <div className="questionMainContainer">
          <h1>Cancellation/Refund</h1>
            {
                helpCenterCancellationFAQ.map((data) => {
                    return <QuestionContainer key={data.id} data={data} />
                })

            }
        </div>
    </section>
  )
}


export default HelpCenter