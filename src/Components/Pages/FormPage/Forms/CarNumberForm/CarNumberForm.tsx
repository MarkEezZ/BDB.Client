import "./CarNumberForm.css";
import "./../FormBase.css";

interface ICarNumberFormProps {
    changeIsForm: (isForm: boolean) => void;
}

const CarNumberForm : React.FC<ICarNumberFormProps> = ({ changeIsForm }) => {
    return (
        <form id="form_car_number" className="form_base" onSubmit={() => {}}>
            <button className="mini_close_button" onClick={(e: React.FormEvent) => {
                e.preventDefault(); 
                changeIsForm(false)
            }}></button>
            <h3>Введите номер авто</h3>
            <div className="input_wrapper">
                <input type="text" placeholder="1111 AA-1"/>
            </div>
            <table className="fines_table">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Место</th>
                        <th>Превышение</th>
                        <th>Штраф</th>
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td>29.03.2022</td>
                        <td>Независимости, 75</td>
                        <td>10 км/ч</td>
                        <td>50 BYN</td>
                    </tr>                  
                </tbody>
            </table>
            <input className="form_button" type="submit" value="Узнать наличие штрафов"/>
        </form>
    );
}

export default CarNumberForm;