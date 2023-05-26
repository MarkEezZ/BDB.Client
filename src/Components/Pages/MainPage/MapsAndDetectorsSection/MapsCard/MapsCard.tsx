import "./MapsCard.css"

type MapsCardProps = {
    src: string,
    link: string,
    text: string
}

const MapsCard: React.FC<MapsCardProps> = ({ src, link, text }) => {
    return (
        <div className="maps_card">
            <div>
                <img src={src} alt="picture" />
            </div>
            <a href={link}>{text}</a>
        </div>
    );
}

export default MapsCard;