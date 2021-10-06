import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from './Constants/index'
import "./App.css";

function App() {
  const [newData, setNewData] = useState([]);

    useEffect(() => {
      const getNewData = () => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
          .then(response => {
            console.log(response);
            setNewData(response.data)
          }).catch(err => {
            console.error(err);
          })
      };
      getNewData();
    }, [])
  
  // Display a loading message while the data is fetching
  // props == newData & photoOfTheDay = url
  if (!newData.url) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <div>
        <h2>{newData.title}</h2>
        <h3>{newData.date}</h3>
        <p>{newData.explanation}</p>
        <img src={newData.url} alt='Stars Everywhere'/>
        <p>{newData.copyright}</p>
      </div>
    </div>
  );
}

export default App;
