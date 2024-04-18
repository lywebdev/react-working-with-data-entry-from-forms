import {FC, useState} from "react";
import {create} from "node:domain";


const SomeForm: FC = (props) => {
    const createFormValidation = (nameInput: boolean = false, surnameInput: boolean = false, emailInput: boolean = false) => {
        return {
            nameInput,
            surnameInput,
            emailInput,
        };
    }

    const [formValidation, setFormValidation] = useState(createFormValidation());

    const changeNameInputValid = (isValid: boolean) => {
        setFormValidation(
            createFormValidation(
                isValid,
                formValidation.surnameInput,
                formValidation.emailInput,
            )
        );
    }


    return (
        <form>
            <div className="control-group">
                <div className="form-control">
                    <label htmlFor="name" setIsValid={changeNameInputValid}>Введите Имя</label>
                    <input type="text" id="name"/>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Введите Фамилию</label>
                    <input type="text" id="name"/>
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="name">Введите E-Mail</label>
                <input type="text" id="name"/>
            </div>
            <div className="form-actions">
                <button>Отправить</button>
            </div>
        </form>
    );
};

export default SomeForm;
