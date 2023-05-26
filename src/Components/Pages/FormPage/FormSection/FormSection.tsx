import './FormSection.css';

type FormSectionProps = {
    children: React.ReactNode
    changeIsForm: (isOpened: boolean) => void;
}

const FormSection : React.FC<FormSectionProps> = ({ children, changeIsForm }) => {
    return (
        <section id="section_form">
            <button className="button_close_form" onClick={() => changeIsForm(false)}></button>
            {children}
        </section>        
    );
}

export default FormSection;