import { useState } from 'react'
import logo from './assets/img/pug.png'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './navigation/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <div><Navbar /></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
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
