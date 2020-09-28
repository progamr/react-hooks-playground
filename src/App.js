import React, { Component, useState } from 'react';


const App = () => {

  const countUp = () => {
  };

  function expensiveInitialState() {
    // some logic goes here
  }


  // Ex 1
  const [count, setCount] = useState(10);
  // Ex 2
  const [appointments, setAppointments] = useState({appointments:[]});
  // example of using useState with a function to
  // initialize the initial state value
  const [val, setVal] = useState(() => expensiveInitialState());
  // Ex 3 update an object value
  const [{requestsLoading, requests}, setRequestsData] = useState({requestsLoading: false, requests: []});
  // Ex 4 multi useState
  const [v1, setV1] = useState(1);
  const [v2, setV2] = useState(2);

  return (
        <div>
          <button onClick={() => setCount((currentCount) => currentCount + 1)}>+</button>
          <button onClick={() => setRequestsData(currentState => ({
            ...currentState,
            requestsLoading: true
          })
          )}>
              update
          </button>
          <button onClick={() => {
              setV1(v1 + 1);
              setV2(v2 + 1);
          }}>+v1 & v2</button>
          <div>{count}</div>
          <div>{v1}-{v2}</div>
          <div>{requestsLoading && <p>Loading...</p>}</div>
        </div>
    )
};

export default App
