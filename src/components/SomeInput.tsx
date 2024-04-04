import React, {FC, useState, useRef} from "react";

const SomeInput: FC = (props) => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [enteredName, setEnteredName] = useState<string>('');
    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredName(event.target.value);
    };
    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        console.log(enteredName);
        setEnteredName('');
    };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Введите Имя</label>
        <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            ref={nameInputRef}
            value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
