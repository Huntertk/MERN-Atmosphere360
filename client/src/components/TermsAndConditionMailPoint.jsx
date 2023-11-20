import '../styles/mainPoints.scss'
const TermsAndConditionMailPoint = ({heading, para, mailId}) => {
  return (
    <div className='mainPointMainComponents'>
        <h1>{heading}</h1>
        <div className="underline"></div>
        <p>{para}</p>
       {mailId  && <a href={`mailto:${mailId}`}>{mailId}</a>}
    </div>
  )
}

export default TermsAndConditionMailPoint