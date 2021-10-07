import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from './Constants/index'
import "./App.css";
import styled from "styled-components";


const StyledApp = styled.div`
  font-family: 'garamond';
  width: 100%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1, h3, .cr, .title {
    text-align: center;
    font-weight: bold;
  }
  
  .cr:hover {
    color: blue;
  }

  .expl:hover {
    background-color: coral;
    color: white;
  }
  
`

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
      <StyledApp>
        <h1>NASA Photo Of The Day</h1>
        <h2 className='title'>{newData.title}</h2>
        <h3>Date: {newData.date}</h3>
        <p className='expl'>Explanation: {newData.explanation}</p>
        <img src={newData.url} alt='Stars Everywhere'/>
        <p className='cr'>Copyright By: {newData.copyright}</p>
      </StyledApp>
    </div>
  );
}

export default App;
