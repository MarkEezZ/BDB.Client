import "./../FormBase.css";
import "./DonateForm.css";

import { useState } from 'react';

interface IDonateFormProps {
    changeIsForm: (isForm: boolean) => void;
}

const DonateForm: React.FC<IDonateFormProps> = ({ changeIsForm }) => {
    const [isCard, setIsCard] = useState<boolean>(true);

    return (
        <form id="form_donate" className="form_base" onSubmit={() => {}}>
            <button className="mini_close_button" onClick={(e: React.FormEvent) => {
                e.preventDefault(); 
                changeIsForm(false)
            }}></button>
            <h3>Пожертвовать</h3>
            <div className="payment_way_wrapper">
                <input type="radio" id="card_way" name="payment_way" defaultChecked/>
                <label htmlFor="card_way" className="form_button" onClick={() => setIsCard(true)}>По номеру карты</label>
                <input type="radio" id="erip_way" name="payment_way"/>
                <label htmlFor="erip_way" className="form_button" onClick={() => setIsCard(false)}>Через ЕРИП</label>
            </div>
            {isCard ?
                <>
                    <div className="input_wrapper">
                        <p>Номер карты</p>
                        <input type="text" placeholder="XXXX XXXX XXXX XXXX"/>
                    </div>
                    <div className="input_wrapper">
                        <p>Имя держателя карты</p>
                        <input type="text" placeholder="CARDHOLDER NAME"/>
                    </div>
                    <div className="cvv_wrapper">
                        <div className="input_wrapper">
                            <p>Cрок действия карты</p>
                            <input type="text" placeholder="06/25"/>
                        </div>
                        <div className="input_wrapper">
                            <p>СVV</p>
                            <input type="text" placeholder="XXX"/>
                        </div>
                    </div>
                    <div className="input_wrapper amount_input">
                        <p>Введите сумму</p>
                        <input type="text" placeholder="XXXX BYN"/>
                    </div>
                    <div className="checkbox_wrapper">
                        <input id="rules_agreement_checkbox" className="checkbox" type="checkbox" />
                        <label htmlFor="rules_agreement_checkbox"></label>
                        <p>Подтверждаю ознакомление с <a href="">Политикой обработки персональных данных</a> и даю согласие на их обработку</p>
                    </div>
                    <input className="form_button" type="submit" value="Пожертвовать"/>
                </> 
                :
                <div>
                    <h4>Для проведения платежа необходимо выбрать:</h4>
                    <ol>
                        <li>Пункт системы «Расчет» (ЕРИП)</li>
                        <li>Благотворительность, общественные объединения</li>
                        <li>Прочие общественные объединения</li>
                        <li>Безопасные дороги</li>
                        <li>Благотворительный взнос</li>
                        <li>Укажите ФИО или слово «благотворитель» (эта информация будет размещена на нашем сайте)</li>
                        <li>Выберите сумму платежа</li>
                        <li>Проверьте правильность введенной вами информации</li>
                        <li>Совершите платеж</li>
                    </ol>
                </div>
            }

        </form>
    );
}

export default DonateForm;