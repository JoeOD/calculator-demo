import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  TransitionCss
} from './counterSlice';

function Contact() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function previousRoute() {
    let myPromise = new Promise(function(resolve, reject) {
      dispatch(TransitionCss("right"))

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
      <h1>Contact</h1>
      <p>
        Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
        congue. In bibendum vestibulum orci et feugiat.
      </p>
      <button onClick={previousRoute}>Go back</button>
    </>
  )
}

export default Contact
