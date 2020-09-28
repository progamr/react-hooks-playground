import {useState} from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    // it is possible to return an object or a string
    return [values, e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }]
};

export default useForm;
