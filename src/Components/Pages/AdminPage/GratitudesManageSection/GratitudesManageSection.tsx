const GratitudesManageSection : React.FC = () => {
    return(
        <section id="gratitudes_manage_section" className="admin_section">
            <h2>Запросы <span>благодарностей</span></h2>
            <form action="" id="gratitude_manage_form-1" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить все благодарности</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Дата</th>
                            <th>Сумма</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Фамилия Имя Отчество</td>
                            <td>26.07.2021</td>
                            <td>10 BYN</td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="gratitude_manage_form-3" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить благодарность по ID</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Дата</th>
                            <th>Сумма</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Фамилия Имя Отчество</td>
                            <td>26.07.2021</td>
                            <td>10 BYN</td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="gratitude_manage_form-5" className="form_base">
                <div className="action_wrapper">
                    <h3>Удалить благодарность</h3>
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

export default GratitudesManageSection;