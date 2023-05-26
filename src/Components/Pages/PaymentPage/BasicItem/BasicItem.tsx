import React from "react";
import "./BasicItem.css";

type BasicItemProps = {
    children: React.ReactNode,
    number: string
}

const BasicItem : React.FC<BasicItemProps> = ({ children, number }) => {
    return (
        <div className={`basic_item basic_item_${number}`}>
            {children}
        </div>
    );
}

export default BasicItem;