import "./MapsAndDetectorsSection.css";
import MapsCard from "./MapsCard/MapsCard";

const MapsAndDetectorsSection: React.FC = () => {
    return (
        <section id="section_maps_and_detectors">
            <h2>Стационарные и мобильные датчики контроля скорости, <span>системы вычисления средней скорости</span></h2>
            <div>
                <MapsCard src="/assets/map_icon.png" link="" text="Карты расположения стационарных датчиков контроля скорости и систем вычисления средней скорости"></MapsCard>
                <MapsCard src="/assets/detector_icon.png" link="" text="Списки стационарных датчиков контроля скорости и систем вычисления средней скорости"></MapsCard>
            </div>
            <p>Мобильные датчики контроля скорости устанавливаются по решению ГАИ</p>
        </section>
    );
}

export default MapsAndDetectorsSection;