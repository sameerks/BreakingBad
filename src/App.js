// import logo from './logo.svg';
import './App.css';


import axios from "axios";
import { useEffect, useState } from 'react';
import Card from "./Components/Card";


function App() {
  const [data, setDate] = useState([]);
  useEffect(() => {
    breakingbadPromise();
  },[]);
  const breakingbadPromise = () => {
    fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((recivedData) => setDate(recivedData));
  };
  return (
    <div className="App">
      <div>
        {data.map((user) => (
          <div>
            <Card src={user.img} name={user.name} birthday={user.birthday} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
