import './Question.css';
import { useState } from 'react';

type QuestionProps = {
    question: string,
    children: React.ReactNode,
    id: number
}

const Question: React.FC<QuestionProps> = ({ question, children, id }) => {

    const [isHelperChecked, setHelperChecked] = useState<boolean>(false);

    return (
        <div className="question">
            <div className='question_wrapper'>
                <h3>{question}</h3>
                <input type="checkbox" className='hepler_checkbox' checked={isHelperChecked} onChange={()=>{}}/>
                <label htmlFor={`question_${id}`} onClick={() => setHelperChecked(!isHelperChecked)}></label>
            </div>
            <input type="checkbox" className='faq_checkbox' id={`question_${id}`}/>
            <div className='answer_wrapper'>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Question;