import './Card.css';

type CardProps = {
    text: string,
    img?: string
}

const Card: React.FC<CardProps> = ({ text, img }) => {
    return (
        <div className='card'>
            {img && <img src={img} alt={img}></img>}
            <p>{text}</p>
        </div>
    )
}

export default Card;