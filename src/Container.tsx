import React from "react";
import './App.css';
import {ReactComponent as Vectors} from './vectors.svg';
import Card from "./Card";
import Recharge from "./Recharge";
import ValidApps from "./ValidApps";
import Transactions from "./Transactions";


function Container() {

    const Sdata = [
        {

            img: "/simpl_logo.png",
            description: "SPENT TILL NOW",
            amount: 1800,
            duedate: "15 Aug"
        },
        {

            img: "/paylater.png",
            description: "SPENT THIS MONTH",
            amount: 1150,
            duedate: ""
        }

    ]

    const Rdata = [
        {

            img: "./prepaid.png"

        },
        {
            img: "./electricity.png"
        },
        {
            img: "./broadband.png"

        },
        {
            img: "./gas.png"
        },
        {
            img: "./landline.png"
        },
        {
            img: "./water.png"
        },
        {
            img: "./data_card.png"
        }


    ]


    //icons repeated as dummy
    const Vdata = [
        {

            src: "./img.png",
            url: "https://www.bigbasket.com/",


        },
        {
            src: "./img_1.png",
            url: "https://www.dunzo.com/",

        },
        {
            src: "./img_2.png",
            url: "https://grofers.com/",

        },
        {
            src: "./img_3.png",
            url: " https://www.zomato.com/",

        }

    ]

    //show transaction history
    const Tdata = [
        {

            src: " ./zomato.png",
            name: "Zomato",
            payment_date: "May 24",
            payment_time: "06:12 PM",
            isAutoPay: false,
            cashback: "",
            status: "",
            payment_amount: 250

        },
        {

            src: " ./img_4.png",
            name: "Bescom",
            payment_date: "May 24",
            payment_time: "06:10 PM",
            isAutoPay: true,
            cashback: "",
            status: "PROCESSING",
            payment_amount: 250
        },
        {
            src: " ./bigbasket.png",
            name: "Big basket",
            payment_date: "May 23",
            payment_time: "06:10 PM",
            isAutoPay: false,
            cashback: "100 Cashback! Will be credited after repayment",
            status: "PROCESSING",
            payment_amount: 300

        }


    ]


    return (
        <div className="body">
            <div className="rectangle"></div>
            <div className="square">
                <div className="header">
                    <span className="title">
                    Welcome to <Vectors/> Simpl
                </span>
                </div>

                <div style={{display: "flex", padding: "60px"}}>
                    {Sdata.map((val: any) => {
                        return (
                            <Card
                                img={val.img}
                                description={val.description}
                                duedate={val.duedate}
                                amount={val.amount}
                            />
                        );
                    })}
                </div>
                <div>
                    <div className="recharge">
                        <span className="recharge-header"> You can also use Simpl on </span>

                        {Rdata.map((val: any) => {
                            return (
                                <Recharge
                                    img={val.img}
                                />
                            );
                        })}
                    </div>
                </div>

                <div style={{paddingTop: "170px"}}>

                    <div className="valid">
                        <span className="vtitle"> You can also use Simpl on </span>

                        {Vdata.map((val: any) => {
                            return (
                                <ValidApps
                                    src={val.src}
                                    url={val.url}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className="transactions">
                        <div className="transactions-title"> Recent transactions</div>
                        {Tdata.map((val: any) => {
                            return (
                                <Transactions
                                    src={val.src}
                                    name={val.name}
                                    payment_date={val.payment_date}
                                    payment_time={val.payment_time}
                                    isAutoPay={val.isAutoPay}
                                    cashback={val.cashback}
                                    status={val.status}
                                    payment_amount={val.payment_amount}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;