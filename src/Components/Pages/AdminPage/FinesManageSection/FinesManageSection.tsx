const FinesManageSection : React.FC = () => {
    return(
        <section id="fines_manage_section" className="admin_section">
            <h2>Запросы <span>штрафов</span></h2>
            <form action="" id="fine_manage_form-1" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить все штрафы</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Штраф</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>sdfg-wert-sdfg-wert</td>
                            <td>
                                <p>29.03.2022</p>
                                <p>Независимости, 75</p>
                                <p>10 км/ч</p>
                                <p>50 BYN</p>
                            </td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="fine_manage_form-2" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить штрафы по номеру машины</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="Номер машины..."/>
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Штраф</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>sdfg-wert-sdfg-wert</td>
                            <td>
                                <p>29.03.2022</p>
                                <p>Независимости, 75</p>
                                <p>10 км/ч</p>
                                <p>50 BYN</p>
                            </td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="fine_manage_form-3" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить штраф по ID</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Штраф</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>sdfg-wert-sdfg-wert</td>
                            <td>
                                <p>29.03.2022</p>
                                <p>Независимости, 75</p>
                                <p>10 км/ч</p>
                                <p>50 BYN</p>
                            </td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="fine_manage_form-4" className="form_base">
                <div className="action_wrapper">
                    <h3>Добавить штраф</h3>
                    <input className="form_button" type="submit" value="Добавить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="Дата..."/>
                    <input type="text" placeholder="Адрес..."/>
                    <input type="text" placeholder="Превышение..."/>
                    <input type="text" placeholder="Сумма..."/>
                </div>
                <p>Успешно!</p>
            </form>
            <form action="" id="fine_manage_form-5" className="form_base">
                <div className="action_wrapper">
                    <h3>Удалить штраф</h3>
                    <input className="form_button" type="submit" value="Удалить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <p>Успешно!</p>
            </form>
        </section>        
    );
}

export default FinesManageSection;