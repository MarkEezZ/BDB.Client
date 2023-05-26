import './PeaceOfNews.css';

type PeaceOfNewsProps = {
    date: string,
    children: React.ReactNode
    link: string
}

const PeaceOfNews: React.FC<PeaceOfNewsProps> = ({ date, link, children }) => {
    return (
        <div className="peace_of_news">
            <h4>{date}</h4>
            <a href={link}>{children}</a>
        </div>
    );
}

export default PeaceOfNews;