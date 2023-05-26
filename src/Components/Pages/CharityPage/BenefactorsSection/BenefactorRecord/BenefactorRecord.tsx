import "./BenefactorRecord.css";

type BenefactorRecordProps = {
    name: string,
    date: string,
    amount: number,
}

const BenefactorRecord : React.FC<BenefactorRecordProps> = ({ name, date, amount }) => {
    return (
        <div className="benefactor_record">
            <p className="benefactor_name">{name}</p>
            <p className="benefactor_date">{date}</p>
            <p className="benefactor_amount">{`${amount} BYN`}</p>
        </div>
    );
}

export default BenefactorRecord;