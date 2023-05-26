import BasicItem from "../BasicItem/BasicItem";
import "./StepsSection.css";

const StepsSection: React.FC = () => {
    return (
        <section id="section_steps">
            <h2>Для получения электронной копии постановления или проверки наличия вынесенных поставновлений в отношении физического лица необходимо:</h2>
            <div>
                <div className="image_wrapper">
                    <img src="/assets/camera_icon.png" alt="camera_icon" />
                </div>
                <article className="steps_grid">
                    <BasicItem number={"steps_1"}>
                        <h3>1</h3>
                        <p>зайти на сайт <a href="">mvd.gov.by</a></p>
                    </BasicItem>
                    <BasicItem number={"steps_2"}>
                        <h3>2</h3>
                        <p>зайти в личный кабинет (нажать кнопку «ВОЙТИ» в правом верхнем углу и ввести логин и пароль), 
                            если вы не зарегистрированы на сайте <a href="">mvd.gov.by</a>, то пройти регистрацию</p>
                    </BasicItem>
                    <BasicItem number={"steps_3"}>
                        <h3>3</h3>
                        <p>в левом меню выбрать «Физические лица» - «Неуплаченные штрафы по линии ГАИ»</p>
                    </BasicItem>
                    <BasicItem number={"steps_4"}>
                        <h3>4</h3>
                        <p>ввести капчу и нажать кнопку «Отправить»</p>
                    </BasicItem>
                </article>
                <div className="image_wrapper">
                    <img src="/assets/car_icon.png" alt="car_icon" />
                </div>
            </div>
        </section>
    );
}

export default StepsSection;