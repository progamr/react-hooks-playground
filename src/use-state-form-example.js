import React, {useEffect, useState} from 'react';
import useForm from './customsHooks/useForm';
import {Message} from './components/Message';
import {useFetch} from "./components/use-effect-ex-2-fetch-from-api";

function LoginForm() {
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');

    return (
        <div>
            <form>
                <input name="email1" type="text" value={email1} onChange={(e) => setEmail1({email: e.target.value})} />
                <input name="password1" type="password" value={password1} onChange={(e) => setPassword1({password: e.target.value})} />
            </form>
        </div>
  );
};

export default LoginForm;

export const EnhancedLoginForm = () => {
    const [values, handleChange] = useForm({email: '', password: ''})

    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => setShowMessage(showMessage => !showMessage);

    // a little practical example of useEffect
    // EX: 1 subscribe and unsubscribe to mouse events
    useEffect(() => {

        const onMouseMove = e => {
            // console.log(e);
        };
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    //EX: 2 fetch from API
    const [qouteCount, setQouteCount] = useState(() =>
         JSON.parse(localStorage.getItem("count")) | 1
    );
    const url = `http://numbersapi.com/${qouteCount}/trivia`;
    const {data, loading} = useFetch(url);

    // save the count value to local storage
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(qouteCount));
    }, [qouteCount]);
    // useEffect hooks run in order
    useEffect(() => {
        console.log('mount2');
    }, []);
    useEffect(() => {
        console.log('mount3');
    }, []);

    return (
        <div>
            {showMessage && <Message />}
            <button onClick={toggleMessage}>toggle message</button>
            <form action="">
                <input type="text" name="email" value={values.email} onChange={handleChange} />
                <input type="password" name="password" value={values.password} onChange={handleChange} />
            </form>
            <hr/>
            <h3>useEffect & useState practical Ex</h3>
            <div>Count:{qouteCount}</div>
            <div>
                <button onClick={() => {setQouteCount((qouteCount) => qouteCount + 1)}}>+</button>
                <button onClick={() => {setQouteCount((qouteCount) => qouteCount - 1)}}>-</button>
            </div>
            {loading ? <p>Loading ....</p>: data}
        </div>
    )
};
