
import './App.css'
import { useBearStore } from './store'

function App() {
  const {bears,decreasePopulation,increasePopulation} = useBearStore()

  return (
    <>
     
      <h1 style={{color:"black"}}>Demo zustand</h1>
      <div className="card">
        <button onClick={increasePopulation}>
         increasePopulation
        </button>
        <span style={{margin:"0 10px"}} >{bears}</span>
        <button onClick={decreasePopulation}>
         decreasePopulation
        </button>
       
      </div>
     
    </>
  )
}

export default App
