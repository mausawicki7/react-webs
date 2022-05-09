import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    
    <div className="App">
      <div><Navbar /></div>

      <header className="App-header">
       <br></br> 
       <ItemListContainer greeting={"Hola!, esta es la prop greeting"}/>
        <p>
        <br></br> 
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
