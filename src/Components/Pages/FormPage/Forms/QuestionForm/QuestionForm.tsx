import "./../FormBase.css";
import "./QuestionForm.css";

interface IQuestionFormProps {
    changeIsForm: (isForm: boolean) => void;
}

const QuestionForm: React.FC<IQuestionFormProps> = ({ changeIsForm }) => {
    return (
        <form id="form_question" className="form_base" onSubmit={() => {}}>
            <button className="mini_close_button" onClick={(e: React.FormEvent) => {
                e.preventDefault(); 
                changeIsForm(false)
            }}></button>
            <h3>Задать вопрос</h3>
            <div className="input_wrapper">
                <p>Имя</p>
                <input type="text"/>
            </div>
            <div className="input_wrapper">
                <p>Электронная почта</p>
                <input type="email"/>
            </div>
            <div className="input_wrapper">
                <p>Сообщение</p>
                <textarea />
            </div>
            <div className="checkbox_wrapper">
                <input id="rules_agreement_checkbox" className="checkbox" type="checkbox" />
                <label htmlFor="rules_agreement_checkbox"></label>
                <p>Подтверждаю ознакомление с <a href="">Политикой обработки персональных данных</a> и даю согласие на их обработку</p>
            </div>
            <input className="form_button" type="submit"/>
        </form>
    );
}

export default QuestionForm;