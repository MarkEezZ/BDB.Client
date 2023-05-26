import './BasicButton.css';

interface iBasicButtonProps {
    onClick: () => void;
    text: string;
}

const BasicButton: React.FC<iBasicButtonProps> = ({ onClick, text }) => {
    return (
        <button className='basic_button' onClick={onClick}>{text}</button>
    )
}

export default BasicButton;