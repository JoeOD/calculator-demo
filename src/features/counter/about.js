import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  TransitionCss
} from './counterSlice';

function About() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function nextRoute() {
    let myPromise = new Promise(function(resolve, reject) {
      dispatch(TransitionCss("left"))

      resolve("/contact")
      reject("error")
    });
    myPromise.then(
      function(value) { navigate(value) },
      function(error) { console.log(error) }
    );
  }

  function previousRoute() {
    let myPromise = new Promise(function(resolve, reject) {
      dispatch(TransitionCss("right"))

      resolve("/")
      reject("error")
    });
    myPromise.then(
      function(value) { navigate(value) },
      function(error) { console.log(error) }
    );
  }

  return (
    <>
      <h1>About</h1>
      <p>
        Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
        velit, quis faucibus libero congue et. Quisque convallis eu nisl et
        congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
        nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
        sollicitudin nibh lacus, ut bibendum risus elementum a.
      </p>
      <button onClick={previousRoute}>Go back</button>
      <button onClick={nextRoute}>Next card</button>
    </>
  )
}

export default About
