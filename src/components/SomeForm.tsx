import {FC} from "react";

const SomeForm: FC = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">Введите Имя</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Введите Фамилию</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">Введите E-Mail</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
