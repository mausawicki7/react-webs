import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <div><Navbar /></div>
      <ItemListContainer greeting={"Hola!, esta es la prop greeting"}/>
      <header className="App-header">
       
       <br></br> 
        
        <p>Hola!</p>
        <p>
          <a
            className="App-link"
            href="https://linkedin.com/in/mausa10"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://wonderweb.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </p>
      </header>


    </div>
  )
}

export default App
