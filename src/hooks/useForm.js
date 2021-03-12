// write your custom hook here to control your checkout form
import {useState} from "react";

const useForm = initialValues => {
    const [values, setValues] = useState(initialValues);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]:e.target.values
        });
    };

    const clearForm = () => {
        setValues(initialValues);
    };

    return [values, handleChange, clearForm];
}

export default useForm;