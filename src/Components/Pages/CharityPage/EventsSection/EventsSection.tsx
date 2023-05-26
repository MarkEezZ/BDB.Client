import EventsItem from "./EventsItem/EventsItem";
import "./EventsSection.css";

const EventsSection: React.FC = () => {
    return (
        <section id="section_events">
            <h2><span>мы в сми и наши мероприятия</span></h2>
            <div className="grid_wrapper">
                <div className="events_grid">
                    <EventsItem 
                        id={1} 
                        text="От искусственной комы до нормальной жизни ..." 
                        link="https://auto.onliner.by/2021/12/17/kak-spasayut-v-centre-pomoshhi-zhertvam-dtp" 
                        backgroundName="event_1"/>
                    <EventsItem 
                        id={2} 
                        text="Як працуе цэнтр дапамогі ахвярам ..." 
                        link="https://zviazda.by/be/news/20210908/1631116576-yak-pracue-centr-dapamogi-ahvyaram-dtz-dze-vyartayuc-da-aktyunaga-zhyccya" 
                        backgroundName="event_2"/>
                    <EventsItem 
                        id={3} 
                        text="С песнями о героизме и сердечной поддержкой ..." 
                        link="https://www.sb.by/articles/s-pesnyami-o-geroizme-i-serdechnoy-podderzhkoy-v-borovlyanakh-medikov-pozdravili-s-professionalnym-p.html" 
                        backgroundName="event_3"/>
                    <EventsItem 
                        id={4} 
                        text="Новые подходы к паллиативному лечению ..." 
                        link="https://ctv.by/novosti-minska-i-minskoy-oblasti/centr-pomoshchi-postradavshim-v-dtp-otkryli-v-borovlyanah" 
                        backgroundName="event_4"/>
                    <EventsItem 
                        id={5} 
                        text='В Островце прошел трофи-рейд "Рыжий лес - 2021"' 
                        link="https://www.belta.by/regions/view/fotofakt-v-ostrovtse-proshel-trofi-rejd-ryzhij-les-2021-468301-2021/" 
                        backgroundName="event_5"/>
                    <EventsItem 
                        id={6} 
                        text="В Боровлянах для сотрудников госпиталя инвалидов войны ..." 
                        link="https://www.tvr.by/news/obshchestvo/v_borovlyanakh_dlya_sotrudnikov_gospitalya_invalidov_voyny_proveli_blagotvoritelnyy_kontsert/" 
                        backgroundName="event_6"/>
                    <EventsItem 
                        id={7} 
                        text="Большое доброе дело. Под Минском открылся ..." 
                        link="https://auto.onliner.by/2019/09/26/help-2" 
                        backgroundName="event_7"/>
                    <EventsItem 
                        id={8} 
                        text="Аварийность на дорогах в Беларуси за 15 лет ..." 
                        link="https://www.sb.by/articles/v-2bede-ne-ostavyat.html" 
                        backgroundName="event_8"/>
                </div>            
            </div>

        </section>
    );
}

export default EventsSection;