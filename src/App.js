import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{(console.log("la app se ha montado"))}, []);
  
  return(
    <div>
    <header> <Header/></header> 
    <main><Main/></main>
    <footer><Footer/></footer>
    </div>
   );


}

export default App;
