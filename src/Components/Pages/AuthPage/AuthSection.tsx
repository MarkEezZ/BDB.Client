import AuthForm from "../FormPage/Forms/AuthForm/AuthForm";
import "./AuthSection.css";
import "../FormPage/Forms/FormBase.css"
import { PagesEnum } from "../../../Enums/Enums";

interface IAuthSectionProps {
    changePage: (page: PagesEnum) => void;
    changeIsAuthorized: (isAuthorized: boolean) => void;
}


const AuthSection : React.FC<IAuthSectionProps> = ({ changePage, changeIsAuthorized }) => {
    return(
        <section id="auth_section">
            <AuthForm changePage={changePage} changeIsAuthorized={changeIsAuthorized}></AuthForm>
        </section>
    );
}

export default AuthSection;