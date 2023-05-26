import "./EventsItem.css";
import BasicButton from "../../../../BasicButton/BasicButton";

type EventsItemProps = {
    id: number,
    text: string,
    link: string,
    backgroundName: string
}

const EventsItem : React.FC<EventsItemProps> = ({ id, text, link, backgroundName }) => {
    return (
        <div className="events_item" id={`events_item_${id}`}>
            <div className="events_img_div" style={{backgroundImage: `url(assets/events/${backgroundName}.png)`}} />
            <div className="events_content_div">
                <h4>{text}</h4>
                <BasicButton text="Читать далее" onClick={() => {window.open(link)}}></BasicButton>                
            </div>
        </div>
    );
}

export default EventsItem;