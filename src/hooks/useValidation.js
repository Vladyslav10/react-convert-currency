import { useEffect, useState } from "react"


export const useValidation = (value, validations) => {
    const[isEmpty, setIsEmpty] = useState(true);
    const[emailError, setEmailError] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [error, setError] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(()=> {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    if(value) {
                        setIsEmpty(false)
                        setError('');
                    } else {
                        setIsEmpty(true);
                        setError('Заповніть поле!'); 
                    }
                    break;
                case 'minLengthError':
                    if (value.length === 0 ) {
                        setMinLengthError(false);
                    } else if (value.length < validations[validation]) {
                        setMinLengthError(true);
                        setError(`Пароль має бути більшим за ${validations[validation]} символів`);
                    } else {
                        setMinLengthError(false);
                        setError(''); 
                    }
                    break;
                case 'emailError':
                    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
                    if (value.length === 0 ) {
                        setEmailError(false);
                    } else if(!re.test(String(value).toLowerCase())) {
                        setEmailError(true);
                        setError('Неправильний емейл');
                    } else {
                        setEmailError(false);
                        setError('');
                    }
                    break;
                    
                case 'maxLengthError':
                    if(value.length < validations[validation]) {
                        setMaxLengthError(false);
                    } else if (value.length > validations[validation]) {
                        setMaxLengthError(true);
                        setError(`Пароль має бути меншим за ${validations[validation]} символів`);
                    } else {
                        setMaxLengthError(false);
                        setError(''); 
                    }
                    break;
                    
            }
        }
    }, [value])

    useEffect( () => {
        if(emailError || minLengthError || maxLengthError || isEmpty) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, minLengthError, maxLengthError, isEmpty])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        error,
        formValid
    }
}