import './NewsSection.css';
import PeaceOfNews from './PeaceOfNews/PeaceOfNews';

const NewsSection: React.FC = () => {
    return (
        <section id='section_news'>
            <div className='print_mass_media'>
                <h2>печатные <span>сми</span> о нас:</h2>
                <article>
                    <PeaceOfNews date='29.07.2020' link='https://auto.tut.by/news/road/694423.html'>
                        Белорусы пропускают «письма счастья» от ГАИ. Что делать, чтобы не стать злостным неплательщиком
                    </PeaceOfNews>
                    <PeaceOfNews date='13.04.2020' link='https://abw.by/news/law/2020/04/13/otsuda--prihodyat-pisma-schastya-sistema-fotofiksacii-narushenii-skorosti-iznutri'>
                        Отсюда приходят "письма счастья". Система фотофиксации нарушений скорости изнутри                    
                    </PeaceOfNews>
                    <PeaceOfNews date='07.02.2020' link='https://auto.tut.by/news/exclusive/671544.html'>
                        Попал на камеры 76 раз. Составили топ нарушителей скорости за прошлый год                    
                    </PeaceOfNews>
                    <PeaceOfNews date='07.02.2020' link='https://av.by/news/pisma-schastya-za-neprojdennyj-tehosmotr-eto-realno-razbiraemsya-kak-ustroeny-kamery-skorosti'>
                        «Письма счастья» за непройденный техосмотр — это реально. Разбираемся, как устроены камеры скорости                   
                    </PeaceOfNews>
                    <PeaceOfNews date='23.01.2020' link='https://auto.tut.by/news/exclusive/669456.html'>
                        «По нашей улице объезжают платные дороги». Как камеры скорости спасают людей, живущих возле трасс
                    </PeaceOfNews>
                    <PeaceOfNews date='19.11.2019' link='https://auto.tut.by/news/exclusive/661366.html?utm_source=editorial_block&utm_campaign=recirculation_tut&utm_medium=read_more'>
                        «Через несколько лет после аварии перестала говорить, двигаться». Как врачи поднимают на ноги жертв ДТП
                    </PeaceOfNews>
                </article>
            </div>
            <hr />
            <div className='tele_mass_media'>
                <h2><span>телеэфир</span> о нас:</h2>
                <article>
                    <PeaceOfNews date='29.12.2019' link='https://ctv.by/novosti-minska-i-minskoy-oblasti/za-10-let-chislo-pogibshih-v-dtp-belorusov-snizilos-v-3-raza'>
                        За 10 лет число погибших в ДТП белорусов снизилось в 3 раза. Спасают камеры фотофиксации?
                    </PeaceOfNews>
                    <PeaceOfNews date='13.01.2020' link='https://www.tvr.by/news/obshchestvo/kak_prokhodit_protsess_oformleniya_pravonarusheniya/'>
                        «Письма счастья» за непройденный техосмотр — это реально. Разбираемся, как устроены камеры скорости
                    </PeaceOfNews>
                    <PeaceOfNews date='31.07.2019' link='https://www.youtube.com/watch?v=j08A18E9A38'>
                        Контроль скорости на дорогах. Как и где это делают сотрудники ДПС в Беларуси?
                    </PeaceOfNews>
                    <PeaceOfNews date='20.09.2018' link='https://www.youtube.com/watch?v=1XmFO08vv18'>
                        Попробовали обмануть камеру фотофиксации при помощи чудо-наклеек. Что вышло? ABW.BY
                   </PeaceOfNews>
                    <PeaceOfNews date='27.07.2018' link='https://ont.by/news/oleg-novickij-ocenil-sistemy-raboti-kamer-fotofiksacii-i-ih-osnaschyonnosti'>
                        Олег Новицкий оценил систему работы камер фотофиксации и их оснащённости
                    </PeaceOfNews>
                    <PeaceOfNews date='27.07.2018' link='https://ctv.by/novosti-minska-i-minskoy-oblasti/my-hotim-pomogat-oleg-novickiy-vstretilsya-s-organizatorami'>
                        Мы хотим помогать                    
                    </PeaceOfNews>
                </article>
            </div>
        </section>
    )
}

export default NewsSection;