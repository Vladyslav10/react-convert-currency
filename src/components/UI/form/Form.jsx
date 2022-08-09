import React from "react";
import { useInput } from "../../../hooks/useInput";
import './Form.css'

const Form = () => {
    const password = useInput('', {isEmpty: true, minLengthError: 5, maxLengthError: 30,});
    const email = useInput('', {isEmpty: true, emailError: true});
    
    return (
        <div id="form" className="block__title">
            <form className="form">
                <h1 className="form__title">Реєстрація</h1>
                <div className="form__inputs">
                    {(email.isDirty && email.error) && <div className="err">{email.error}</div>}
                    <input 
                        onChange={e => email.onChange(e)}
                        value={email.value} 
                        onBlur={e => email.onBlur(e)} 
                        className="form__input" 
                        name="email" 
                        type="text" 
                        placeholder="ENTER EMAIL"
                    />
                    {(password.isDirty && password.error) && <div className="err">{password.error}</div>}
                    <input 
                        onChange={e => password.onChange(e)}
                        value={password.value} 
                        onBlur={e => password.onBlur(e)} 
                        className="form__input" 
                        name="password" 
                        type="password" 
                        placeholder="ENTER PASSWORD"
                    />
                </div>
                <button disabled={!email.formValid || !password.formValid} className="form__submit" type="submit">Registration</button>
            </form>
        </div>
    );
}

export default Form;