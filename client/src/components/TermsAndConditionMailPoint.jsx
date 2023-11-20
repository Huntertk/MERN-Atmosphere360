import '../styles/mainPoints.scss'
const TermsAndConditionMailPoint = ({data}) => {
  return (
    <div className="homeVisitorTipsMainContainer">
    {
      data.map((da, index) => (
        <div key={index}>
        <h1 >{da.title}</h1>
        <ul>
          {
            da.list.map((lis, i) => <li key={i}>{lis}</li>)
          }
        </ul>
        </div>

      ))
    }
</div>
  )
}

export default TermsAndConditionMailPoint