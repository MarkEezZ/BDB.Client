import Card from './Card/Card';
import './SecondSection.css';

const SecondSection: React.FC = () => {
    return (
        <section id='section_second'>
            <div className='info_wrapper iw_first'>
                <article>
                    <h3><span>Система фотофиксации нарушений</span> включает следующее:</h3>
                    <div>
                        <Card text='датчики контроля скорости (стационарные, мобильные) и системы вычисления средней скорости' 
                            img='/assets/photo_icon.png'></Card>
                        <Card text='центр фиксации правонарушений (г.Минск)' 
                            img='/assets/house_icon.png'></Card>
                        <Card text='пункты контроля и оплаты (стационарные, мобильный)' 
                            img='/assets/money_icon.png'></Card>
                    </div>
                </article>
                <article>
                    <h3>Датчики контроля скорости и системы вычисления средней скорости <span>предназначены для:</span></h3>
                    <div>
                        <Card text='контроля скоростного режима транспортных средств и фиксации нарушений'></Card>
                        <Card text='формирования пакета данных с информацией о нарушениях'></Card>
                        <Card text='передачи пакета данных о нарушениях в центр фиксации правонарушений'></Card>
                    </div>
                </article>
            </div>
            <div className='info_wrapper iw_second'>
                <article>
                    <h3><span>Центр фиксации нарушений</span> (далее – ЦФП) осуществляет:</h3>
                    <div className='card_wrapper'>
                        <Card text='получение данных о нарушениях от датчиков контроля скорости в базу данных ЦФП'></Card>
                        <Card text='контроль качества зафиксированной информации'></Card>
                        <Card text='передачу данных о нарушениях в подразделения МВД Республики Беларусь'></Card>
                        <Card text='взаимодействие с пунктами контроля и оплаты'></Card>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default SecondSection;