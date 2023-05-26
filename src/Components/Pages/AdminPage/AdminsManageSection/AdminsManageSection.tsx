const AdminsManageSection : React.FC = () => {
    return(
        <section id="admins_manage_section" className="admin_section">
            <h2>Запросы <span>админов</span></h2>
            <form action="" id="admin-manage_form-1" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить всех админов</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Админ</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>dsfsdf-sdfdf-sdfsd-dfsdf</td>
                            <td>
                                <p>Имя Фамилия Отчество</p>
                                <p>Логин</p>
                                <p>Пароль</p>
                            </td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="admin-manage_form-2" className="form_base">
                <div className="action_wrapper">
                    <h3>Получить админа по ID</h3>
                    <input className="form_button" type="submit" value="Получить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <table className="fines_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Админ</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>dsfsdf-sdfdf-sdfsd-dfsdf</td>
                            <td>
                                <p>Имя Фамилия Отчество</p>
                                <p>Логин</p>
                                <p>Пароль</p>
                            </td>
                        </tr>                  
                    </tbody>
                </table>
            </form>
            <form action="" id="admin-manage_form-3" className="form_base">
                <div className="action_wrapper">
                    <h3>Добавить админа</h3>
                    <input className="form_button" type="submit" value="Добавить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="Имя Фамилия Отчество..."/>
                    <input type="text" placeholder="Логин..."/>
                    <input type="text" placeholder="Пароль..."/>
                </div>
                <p>Успешно!</p>
            </form>
            <form action="" id="admin-manage_form-4" className="form_base">
                <div className="action_wrapper">
                    <h3>Изменить админа</h3>
                    <input className="form_button" type="submit" value="Изменить"/>                    
                </div>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                    <input type="text" placeholder="Имя Фамилия Отчество..."/>
                    <input type="text" placeholder="Логин..."/>
                    <input type="text" placeholder="Пароль..."/>
                </div>
                <p>Успешно!</p>
            </form>
            <form action="" id="admin-manage_form-5" className="form_base">
                <div className="action_wrapper">
                    <h3>Удалить админа</h3>
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

export default AdminsManageSection;