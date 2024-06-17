import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return (
    <h1>Hello, {props.name}</h1>
  )
}

function App() {

  let [글제목, 글제목변경] = useState('남자 추천 코트');
  let [따봉, 따봉변경] = useState(10);
  let posts = '강남고기맛집';

  return (
    <div className="App">
      <Welcome name="Jim"/>
      <img src={logo}/>
      <h4>{글제목} <span onClick={()=> 따봉변경(따봉+1)}>★</span>{따봉}</h4>
      <p>2월 16일 발행</p>
    </div>
  );
}

export default App;
