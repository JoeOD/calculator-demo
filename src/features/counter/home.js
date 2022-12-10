import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  TransitionCss
} from './counterSlice';

function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function nextRoute() {
    let myPromise = new Promise(function(resolve, reject) {
      dispatch(TransitionCss("left"))
      resolve("/about")
      reject("error")
    });
    myPromise.then(
      function(value) { navigate(value) },
      function(error) { console.log(error) }
    );
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
        erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel
        porta turpis, ut iaculis justo.
      </p>
      <button onClick={nextRoute}>Next card</button>
    </>
  )
}

export default Home
