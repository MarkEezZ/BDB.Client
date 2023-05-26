const DetectorsManageSection : React.FC = () => {
    return(
        <section id="detectors_manage_section" className="admin_section">
            <h2>Запросы <span>детекторов</span></h2>
            <form action="" id="detector_manage_form-1" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить все детекторы</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Расположение</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <p>Независимости 176</p>
                            </td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="detector_manage_form-2" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить детектор по ID</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Расположение</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <p>Независимости 176</p>
                            </td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="detector_manage_form-3" className="form_base">
                <div className="action_wrapper">
                    <h3>Добавить детектор</h3>
                    <input className="form_button" type="submit" value="Добавить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="Место расположения..."/>
                </div>
                <p>Успешно!</p>
            </form>
            <form action="" id="detector_manage_form-4" className="form_base">
                <div className="action_wrapper">
                    <h3>Изменить детектор</h3>
                    <input className="form_button" type="submit" value="Изменить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                    <input type="text" placeholder="Место расположения..."/>
                </div>
                <p>Успешно!</p>
            </form>
            <form action="" id="detector_manage_form-5" className="form_base">
                <div className="action_wrapper">
                    <h3>Удалить детектор</h3>
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

export default DetectorsManageSection;