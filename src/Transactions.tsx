import React from "react";
import "./Transactions.css";

function Transactions(props: any) {

    return (
        <div>
            <div className="tcard">
                <img className="tcard-image" src={props.src}/>
                <h2 className="tcard-title">{props.name}</h2>
                <p className="tcard-date">
                    {props.payment_date}
                </p>
                <p className="tcard-time">{props.payment_time}</p>
                <p className="tcard-amount">{props.payment_amount}</p>
                {props.isAutoPay && <p className="tcard-autopay">AUTOPAY</p>}
                {props.isAutoPay && <p className="tcard-status">{props.status}</p>}
                {props.cashback && <p className="tcard-cashback">{props.cashback}</p>}
            </div>
        </div>
    );
}

export default Transactions;
