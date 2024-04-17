import React, {FC, useState, useRef, useEffect} from "react";

const SomeInput: FC = (props) => {
    const [enteredName, setEnteredName] = useState<string>('');
    const [wasNameInputTouched, setWasInputNameTouched] = useState(false);

    const isEnteredNameValid = enteredName.trim() !== "";
    const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredName(event.target.value);
    };

    const nameInputLastFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setWasInputNameTouched(true);
    }

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setWasInputNameTouched(true);

        if (!isEnteredNameValid) {
            return;
        }

        setEnteredName('');
        setWasInputNameTouched(false);
    };

    const nameInputClasses = isNameInputInvalid ? 'form-control invalid' : 'form-control';

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
        <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
