import { PagesEnum } from "../../../../../Enums/Enums";
import "./AuthForm.css";

interface IAuthFormProps {
    changePage: (page: PagesEnum) => void;
    changeIsAuthorized: (isAuthorized: boolean) => void;
}

const AuthForm : React.FC<IAuthFormProps> = ({ changePage, changeIsAuthorized }) => {

    function formSubmit(e: React.FormEvent) {
        e.preventDefault();
        changeIsAuthorized(true);
        changePage(PagesEnum.Admin);
    }

    return(
        <form id="auth_form" className="form_base" onSubmit={(e: React.FormEvent) => {formSubmit(e)}}>
            <h3>Добро пожаловать!</h3>
            <div className="input_wrapper">
                <p>Логин</p>
                <input type="text" placeholder="Логин..."/>
            </div>
            <div className="input_wrapper">
                <p>Пароль</p>
                <input type="text" placeholder="Пароль..."/>
            </div>
            <input className="form_button" type="submit" value="Войти"/>
        </form>
    );
}

export default AuthForm;