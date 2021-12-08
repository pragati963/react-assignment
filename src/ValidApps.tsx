import React from "react";
import "./ValidApps.css";
import {useSpring, animated} from "react-spring";
import {useScroll} from "react-use-gesture";

const clamp = (value: number, clampAt: number = 30) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};

const movies = [
    "/bigbasket.png",
    "/dunzo.png",
    "/zomato.jpg",
    "/grofers.svg"

];


function ValidApps(props: any) {

    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
    }));

    const bind = useScroll((event: { scrolling: any; delta: number[]; }) => {
        set({
            transform: `perspective(500px) rotateY(${
                event.scrolling ? clamp(event.delta[0]) : 0
            }deg)`
        });
    });


    return (
        <div {...bind()}>
            <animated.div className="vcard"
                          style={{
                              ...style
                          }}>
                <a href={props.url} target="_blank">
                    <img className="vimage" alt="loading" src={props.src}/>
                </a>
            </animated.div>
        </div>
    );
}

export default ValidApps;
