import "./PaymentMainSection.css";

const PaymentMainSection: React.FC = () => {
    return (
        <section id="section_payment_main">
            <article>
                <h2><span>Контактная информация</span> органа ведущего административный процесс</h2>
                <p>По вопросам, возникшим в рамках вынесенного постановления, или по получению копии постановления, гражданин может обратиться в ГАИ по месту жительства.</p>
            </article>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6c5c08e1bac33f2d99d2b13d1448c67839f738fed1fc70bc3560e71e3198b853&amp;source=constructor" width="600" height="450" frameBorder="0"></iframe>
        </section>
    );
}

export default PaymentMainSection; 