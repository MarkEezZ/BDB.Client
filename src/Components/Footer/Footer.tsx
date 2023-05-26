import { PagesEnum } from '../../Enums/Enums';
import './Footer.css';

interface IFooterProps {
    changePage: (page: PagesEnum) => void;
    isAuthorized: boolean;
}

const Footer: React.FC<IFooterProps> = ({ changePage, isAuthorized }) => {
    return (
        <footer>
            <nav>
                <a onClick={() => changePage(PagesEnum.Home)}>Главная</a>
                <a onClick={() => changePage(PagesEnum.About)}>О компании</a>
                <a onClick={() => changePage(PagesEnum.News)}>Новости</a>
                <a onClick={() => changePage(PagesEnum.Payment)}>Процесс оплаты</a>
                <a onClick={() => changePage(PagesEnum.FAQ)}>FAQ</a>
                <a onClick={() => changePage(PagesEnum.Charity)}>Благотворительность</a>
                {!isAuthorized &&
                    <a onClick={() => changePage(PagesEnum.Auth)}>Войти</a>
                }
            </nav>
            <div className='line'></div>
            <div className='contacts'>
                <h3>Контакты</h3>
                <p>Орган ведущий административный процесс</p>
                <p>Отдел обеспечения функционирования систем автоматической фиксации правонарушений МВД Республики Беларусь (ООФСАФП МВД):</p>
                <p>+375(17)229-75-36, 229-75-38 отделение по работе с физическими лицами;</p>
                <p>+375(17)229-75-37 отделение по работе с юридическими лицами;</p>
                <p>+375(17)229-75-48 отделение по работе с лицами иностранных государств.</p>
                <p>Режим работы ООФСАФП МВД: понедельник – пятница. <br/> Рабочее время: 09:00-13:00; 14:00-18:00.</p>
            </div>
            <p>Совместное закрытое акционерное общество «Безопасные дороги Беларуси» <br/>
                Ул. Первомайская, 16,220030, Республика Беларусь, г. Минск <br/>
                тел: +375(17)229-75-11, <br/>
                факс: +375(17)229-75-02, <br/>
                <a href="">E-mail: dbbel@dbbel.com</a><br/>
                <a href="">speed-control.by</a>
                </p>
        </footer>
    );
}

export default Footer;