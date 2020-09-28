import React, {useState} from 'react';
import useForm from './customsHooks/useForm';

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


    return (
        <form action="">
            <input type="text" name="email" value={values.email} onChange={handleChange} />
            <input type="password" name="password" value={values.password} onChange={handleChange} />
        </form>
    )
};
