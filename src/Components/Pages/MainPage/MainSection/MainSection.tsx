import { FormsEnum } from '../../../../Enums/Enums';
import BasicButton from '../../../BasicButton/BasicButton';
import './MainSection.css';

interface IMainSectionProps {
    changeForm: (form: FormsEnum) => void;
    changeIsForm: (isForm: boolean) => void;
}

const MainSection: React.FC<IMainSectionProps> = ({ changeForm, changeIsForm }) => {
    return (
        <section id='section_main'>
            <h2>Система фотофиксации <span>нарушений скоростного режима</span></h2>
            <BasicButton onClick={() => {
                changeForm(FormsEnum.CarNumber);
                changeIsForm(true);
            }} text='Узнать наличие штрафов'></BasicButton>
        </section>
    )
}

export default MainSection;