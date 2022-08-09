import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import './CurrencyInput.css';

const CurrencyInput = ({defaultValue, options, amount, setAmount, setCurrency}) => {

    return(
        <div className="currency__row">
            <MyInput amount={amount} setAmount={setAmount}/>
            <MySelect defaultValue={defaultValue} options={options} setCurrency={setCurrency}/>
        </div>
    );
};

export default CurrencyInput;