import { FormsEnum } from "../../../../Enums/Enums";
import BasicButton from "../../../BasicButton/BasicButton";
import BenefactorRecord from "./BenefactorRecord/BenefactorRecord";
import "./BenefactorsSection.css";

interface IBenefactorsProps {
    changeForm: (form: FormsEnum) => void;
    changeIsForm: (isForm: boolean) => void;
}

const BenefactorsSection : React.FC<IBenefactorsProps> = ({ changeForm, changeIsForm}) => {
    return (
        <section id="section_benefactors">
            <h2><span>Благотворители</span></h2>
            <div className="benefactors_wrapper">
                <BenefactorRecord name="Иванов Иван Иванович" date="11.02.2023" amount={50}></BenefactorRecord>
                <BenefactorRecord name="Иванов Иван Иванович" date="11.02.2023" amount={50}></BenefactorRecord>
                <BenefactorRecord name="Иванов Иван Иванович" date="11.02.2023" amount={50}></BenefactorRecord>
            </div>
            <div className="pagination_wrapper">
                <button className="button-left"></button>
                <button className="button-right"></button>
            </div>
            <BasicButton text="Пожертвовать" onClick={() => {
                changeForm(FormsEnum.Donate);
                changeIsForm(true);
            }}></BasicButton>
        </section>
    );
}

export default BenefactorsSection;