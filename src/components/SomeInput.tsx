import React, {FC, useState, useRef, useEffect} from "react";
import useInput from "../hooks/use-input";

const SomeInput: FC = (props) => {
    const {
        value: enteredName,
        hasError: hasNameInputError,
        isValid: isEnteredNameValid,
        inputChangeHandler: nameInputChangeHandler,
        inputLostFocusHandler: nameInputLostFocusHandler,
        resetValues: resetNameInputValues,
    } = useInput((val: string): boolean => val.trim() !== '');

    const {
        value: enteredEmail,
        hasError: hasEmailInputError,
        isValid: isEnteredEmailValid,
        inputChangeHandler: emailInputChangeHandler,
        inputLostFocusHandler: emailInputLostFocusHandler,
        resetValues: resetEmailInputValues,
    } = useInput((val: string): boolean => val.trim() !== '' && enteredEmail.includes('@'));

    let isFormValid = false;

    if (isEnteredNameValid && isEnteredEmailValid) {
        isFormValid = true;
    }


    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (!isEnteredNameValid) {
            return;
        }

        resetNameInputValues();
        resetEmailInputValues();
    };

    const nameInputClasses = hasNameInputError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = hasEmailInputError ? 'form-control invalid' : 'form-control';


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Введите Имя</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                    onBlur={nameInputLostFocusHandler}
                />
                {hasNameInputError && <p className='error-text'>Необходимо указать имя</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">Введите Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    onBlur={emailInputLostFocusHandler}
                />
                {hasEmailInputError && <p className='error-text'>Необходимо указать почту</p>}
            </div>

            <div className="form-actions">
                <button disabled={!isFormValid}>Отправить</button>
            </div>
        </form>
    );
};

export default SomeInput;
