import React from "react";
import "./Recharge.css";


function Recharge(props: any) {

    return (
        <>
            <div>
                <div className="rcard"
                >
                    <a href={props.url}>
                        <img className="rimage" alt="W3Schools" src={props.img}/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Recharge;
