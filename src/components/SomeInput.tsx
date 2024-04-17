import React, {FC, useState, useRef, useEffect} from "react";

const SomeInput: FC = (props) => {
    const [enteredName, setEnteredName] = useState<string>('');
    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [wasNameInputTouched, setWasInputNameTouched] = useState(false);
    const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);
    // const [isFormValid, setIsFormValid] = useState(false);

    const isEnteredNameValid = enteredName.trim() !== "";
    const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;
    const isEnteredEmailValid = enteredEmail.trim() !== "" && enteredEmail.includes('@');
    const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched;

    let isFormValid = false;

    if (isEnteredNameValid && isEnteredEmailValid) {
        isFormValid = true;
    }

    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredName(event.target.value);
    };

    const nameInputLastFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setWasInputNameTouched(true);
    }

    const emailInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredEmail(event.target.value);
    };

    const emailInputLastFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setWasEmailInputTouched(true);
    }


    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setWasInputNameTouched(true);
        setWasEmailInputTouched(true);

        if (!isEnteredNameValid || !isEnteredEmailValid) {
            return;
        }

        setEnteredName('');
        setEnteredEmail('');

        setWasInputNameTouched(false);
        setWasEmailInputTouched(false);
    };

    const nameInputClasses = isNameInputInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = isEmailInputInvalid ? 'form-control invalid' : 'form-control';

  return (
      <form onSubmit={formSubmitHandler}>
          <div className={nameInputClasses}>
              <label htmlFor="name">Введите Имя</label>
              <input
                  type="text"
                  id="name"
                  onChange={nameInputChangeHandler}
                  value={enteredName}
                  onBlur={nameInputLastFocusHandler}
              />
              {isNameInputInvalid && <p className='error-text'>Необходимо указать имя</p>}
          </div>
          <div className={emailInputClasses}>
              <label htmlFor="name">Введите Email</label>
              <input
                  type="text"
                  id="email"
                  onChange={emailInputChangeHandler}
                  value={enteredEmail}
                  onBlur={emailInputLastFocusHandler}
              />
              {isEmailInputInvalid && <p className='error-text'>Необходимо указать почту</p>}
          </div>

          <div className="form-actions">
              <button disabled={!isFormValid}>Отправить</button>
          </div>
      </form>
  );
};

export default SomeInput;
