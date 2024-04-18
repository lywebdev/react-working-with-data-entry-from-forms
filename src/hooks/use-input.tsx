import React, {FC, useState} from "react";

const useInput = (validateValueFunction: Function) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [wasInputTouched, setWasInputTouched] = useState(false);

    const isValueValid = validateValueFunction(enteredValue);
    const isInputInvalid = !isValueValid && wasInputTouched;

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredValue(event.target.value)
    };

    const inputLostFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setWasInputTouched(true);
    }

    const resetValues = () => {
        setEnteredValue('');
        setWasInputTouched(false);
    }


    return {
        value: enteredValue,
        hasError: isInputInvalid,
        isValid: isValueValid,
        inputChangeHandler,
        inputLostFocusHandler,
        resetValues,
    };
}

export default useInput;