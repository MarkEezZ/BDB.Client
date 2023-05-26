import BasicItem from "../BasicItem/BasicItem";
import "./FinePaySection.css";

const FinePaySection : React.FC = () => {
    return (
        <section id="section_fine_pay">
            <div className="fine_pay_wrapper">
                <h2>Оплата штрафов по фотофиксации</h2>
                <p>Наложенный штраф должен быть оплачен не позднее одного месяца со дня вступления постановления по делу об административном правонарушении в законную силу.</p>
                <p>Штраф за правонарушение можно оплатить в кассе банка, в платежно-справочном терминале, посредством интернет-банкинга, банкомате и других пунктах банковского обслуживания, подключенных к системе «Расчет» (ЕРИП), без взимания комиссии.</p>
                <h3>Для оплаты штрафа Вам необходимо:</h3>
                <div className="finepay_grid">
                    <BasicItem number="finepay_1">
                        <h3>1</h3>
                        <p>В разделе «Расчет» (ЕРИП) перейти в раздел «МВД» - «Штрафы» - «ГАИ» и выбрать услугу «Фотофиксация скорости»</p>
                    </BasicItem>
                    <BasicItem number="finepay_2">
                        <h3>2</h3>
                        <p>Ввести регистрационный номер правонарушения</p>
                    </BasicItem>
                    <BasicItem number="finepay_3">
                        <h3>3</h3>
                        <p>Сверить фамилию, имя, отчество владельца транспортного средства и сумму штрафа</p>
                    </BasicItem>
                    <BasicItem number="finepay_4">
                        <h3>4</h3>
                        <p>Осуществить оплату</p>
                    </BasicItem>
                </div>
            </div>
        </section>
    );
}

export default FinePaySection;