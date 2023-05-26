import { FormsEnum, PagesEnum } from "../../Enums/Enums";
import BasicButton from "../BasicButton/BasicButton";
import "./Header.css";

interface IHeaderProps {
    changePage: (page: PagesEnum) => void;
    changeForm: (form: FormsEnum) => void;
    changeIsForm: (isForm: boolean) => void;
    changeIsAuthorized: (isAuthorized: boolean) => void;
    isAuthorized: boolean;
}

const Header: React.FC<IHeaderProps> = ({ changePage, changeForm, changeIsForm, changeIsAuthorized, isAuthorized }) => {
    return (
        <header>
            {isAuthorized &&
                <div className="admin_buttons_wrapper">
                    <BasicButton onClick={() => changePage(PagesEnum.Admin)} text="Управлять"></BasicButton>
                    <BasicButton onClick={() => {
                        changePage(PagesEnum.Home);
                        changeIsAuthorized(false);
                    }} text="Выйти"></BasicButton>                 
                </div>
            }
            <h1>СЗАО <br/>«Безопасные дороги Беларуси»</h1>
            <nav>
                <a onClick={() => changePage(PagesEnum.Home)}>Главная</a>
                <a onClick={() => changePage(PagesEnum.About)}>О компании</a>
                <a onClick={() => changePage(PagesEnum.News)}>Новости</a>
                <a onClick={() => changePage(PagesEnum.Payment)}>Процесс оплаты</a>
                <a onClick={() => changePage(PagesEnum.FAQ)}>FAQ</a>
                <a onClick={() => changePage(PagesEnum.Charity)}>Благотворительность</a>
            </nav>
            <BasicButton onClick={() => {
                changeForm(FormsEnum.CarNumber);
                changeIsForm(true);
            }} text="Узнать наличие штрафов"></BasicButton>
            <input type="checkbox" id="burger_menu_checkbox"/>
            <label htmlFor="burger_menu_checkbox"></label>
            <aside>
                <nav>
                    <a onClick={() => changePage(PagesEnum.Home)}>Главная</a>
                    <a onClick={() => changePage(PagesEnum.About)}>О компании</a>
                    <a onClick={() => changePage(PagesEnum.News)}>Новости</a>
                    <a onClick={() => changePage(PagesEnum.Payment)}>Процесс оплаты</a>
                    <a onClick={() => changePage(PagesEnum.FAQ)}>FAQ</a>
                    <a onClick={() => changePage(PagesEnum.Charity)}>Благотворительность</a>
                </nav>
            </aside>
        </header>
    );
}

export default Header;