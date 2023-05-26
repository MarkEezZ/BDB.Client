import "./ToolsSection.css"

const ToolsSection: React.FC = () => {
    return (
        <section id="section_tools">
            <div className="tools_h2_wrapper">
                <h2><span>Используемое оборудование</span></h2>
            </div>
            <div className="tools_items_wrapper">
                <p>системы фотофиксации Mesta 2000/2200 на базе измерителей скорости радиолокационных MESTA 210 C ("Sagem Securite", Франция (FR));</p>
                <p>измерители скорости транспортных средств радиолокационные стационарные MultaRadar SD580 ("JENOPTIK Robot GmbH", Германия (DE));</p>
                <p>измерители скорости транспортных средств лазерные PoliScan M1HP, PoliScan F1HP, PoliScan FM1/FM1.SR ("VITRONIC Dr.-Ing. Stein Bildverarbeitungssysteme GmbH", Германия (DE));</p>
                <p>комплексы измерения скорости транспортных средств фоторадарные КОРДОН (ООО "Симикон", г. Санкт-Петербург, Россия (RU));</p>
                <p>измерители скорости радиолокационные с фотофиксацией EHL-RSVS-700 ("Beijing E-Hualu Information Technology Co., Ltd.", Китай (CN));</p>
                <p>комплексы программно-аппаратные RoadEye S01 (СЗАО "Безопасные дороги Беларуси", г. Минск, Республика Беларусь (BY));</p>
                <p>системы вычисления средней скорости транспортных средств на определенных участках автомобильных дорог «RoadEye AverSpeed» (СЗАО "Безопасные дороги Беларуси", г. Минск, Республика Беларусь (BY)).</p>
            </div>
        </section>
    );
}

export default ToolsSection;