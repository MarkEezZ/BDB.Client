import BasicItem from "../BasicItem/BasicItem";
import "./SubscriptionSection.css";

const SubscriptionSection : React.FC = () => {
    return (
        <section id="subscription_section">
            <p>Для оформления бесплатной подписки на смс-уведомления о вынесении в отношении физического лица постановления необходимо быть зарегистрированным пользователем на сайте <a href="">mvd.gov.by</a>.</p>
            <div>
                <BasicItem number={"subscription_1"}>
                    <h3>1</h3>
                    <p>зайти на сайт <a href="">mvd.gov.by</a></p>
                </BasicItem>
                <BasicItem number={"subscription_2"}>
                    <h3>2</h3>
                    <p>нажать кнопку «ВОЙТИ» в правом верхнем углу и нажать кнопку «Регистрация»</p>
                </BasicItem>
                <BasicItem number={"subscription_3"}>
                    <h3>3</h3>
                    <p>далее следовать инструкциям на сайте (более подробная информация размещена) <a href="">по данной ссылке</a></p>
                </BasicItem>
            </div>
        </section>
    );
}

export default SubscriptionSection;