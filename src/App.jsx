import './App.css';
import elephant from "./images/elephant.jpeg";

function App(props) {
  let data = props.name;
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Kalvium gallary</h1>
      <div className='alignment'>
{data.map((ele,i)=>{
  return <div key={ele.id}>
    <img src={ele.img} />
     </div>
})};
      </div>
    </div>
  )
}

export default App;
