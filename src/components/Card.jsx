import data from '../data'
function Card(props) {
  return (
    <>
        <div className='container'> 
        <h1>{props.name}</h1>
        <h5>{props.title}</h5>     
    </div>

    </>
  )
}

export default Card
