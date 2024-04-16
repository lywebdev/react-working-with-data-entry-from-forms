import React, {FC, useState, useRef, useEffect} from "react";

const SomeInput: FC = (props) => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [enteredName, setEnteredName] = useState<string>('');
    const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
    const [wasNameInputTouched, setWasInputTouched] = useState(false);

    useEffect(() => {
        if (isEnteredNameValid) {
            console.log('Данные в инпуте невалидны');
        }
    }, [isEnteredNameValid]);

    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredName(event.target.value);
    };

    const nameInputLastFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setWasInputTouched(true);

        if (enteredName.trim() === '') {
            setIsEnteredNameValid(false);
            return;
        }
    }

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setWasInputTouched(true);

        if (enteredName.trim() === '') {
            setIsEnteredNameValid(false);
            return;
        }

        setIsEnteredNameValid(true);

        console.log(enteredName);
        setEnteredName('');
    };

    const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

    const nameInputClasses = isNameInputInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            ref={nameInputRef}
            value={enteredName}
            onBlur={nameInputLastFocusHandler}
        />
          {!isNameInputInvalid && <p className='error-text'>Необходимо указать имя</p>}
      </div>
        <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
