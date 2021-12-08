import React from "react";
import "./Card.css";
import {animated, useSpring} from "react-spring";
import {useScroll} from "react-use-gesture";
import {ReactComponent as Notify} from './notify.svg';
import {ReactComponent as Faq} from './faq.svg';


const clamp = (value: any, clampAt = 30) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};


function Card(props: any) {

    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
    }));

    const bind = useScroll(event => {
        set({
            transform: `perspective(500px) rotateY(${
                event.scrolling ? clamp(event.delta[0]) : 0
            }deg)`
        });
    });


    return (

        <div  {...bind()}>
            <animated.div className="card"
                          style={{
                              ...style
                          }}>
                <div className="card__body">

                    <img className="card-image" src={props.img}/>
                    <div className="due">
                        {props.duedate && <h2 className="overdue">BILL OVERDUE</h2>}
                    </div>

                    <p className="card-description">{props.description}</p>
                    <h2 className="amount">{props.amount}</h2>
                    {props.duedate && <h2 className="duedate-title">DUE DATE</h2>}
                    <p className="duedate">{props.duedate}</p>
                    {!props.duedate &&
                    <div>
                        <Faq className="faq1-svg"/>
                        <a className="faq1-link" href="https://www.w3schools.com/">FAQs</a>
                    </div>
                    }
                </div>

                {props.duedate && <button className="button">PAY 1500</button>}
                {!props.duedate && <div className="faq">
                    <Notify className="faq-svg"/>
                    <p className="faq-title">Clear last month’s dues with ICICI bank on/before 15th to avoid late
                        payment fees.</p>
                    <a className="faq-link" href="https://www.w3schools.com/">Manage account</a>
                </div>}
            </animated.div>
        </div>

    );
}

export default Card;

