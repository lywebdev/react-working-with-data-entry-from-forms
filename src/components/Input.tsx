import useInput from "../hooks/use-input";

const Input = (name: string, label: string, type: string = 'text') => {
    const {
        value: enteredValue,
        hasError: hasInputError,
        isValid: isEnteredValueValid,
        inputChangeHandler: inputChangeHandler,
        inputLostFocusHandler: inputLostFocusHandler,
        resetValues: resetInputValues,
    } = useInput((val: string): boolean => val.trim() !== '');

    let formControlClass = `form-control ${hasInputError ? ' invalid' : ''}`;


    return (
        <div className={formControlClass}>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} value={enteredValue} />
        </div>
    );
}

export default Input;