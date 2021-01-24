import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'

const App = () => {
const [items, setItem] = useState([])
const [isLoading, setLoading] = useState(true)

useEffect(()=>{
  const fetchItem= async () =>{
    const result = await axios('https://nalinj.pythonanywhere.com/report',
 { 
      headers: {
          'Access-Control-Allow-Origin': '*',
       }
})

    console.log(result.data)
  }

  fetchItem()
}, [])

  return (
    <div className="container">
      <Header/>
      <button>Generate</button>
      <button>Report</button>
    </div>
  );
}

export default App;
