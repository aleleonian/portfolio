import React from "react";

export function Intro() {
    return (
        <div className="intro">
            {/* <div className="nes-container is-dark with-title"> */}
                {/* <p className="title">Container.is-dark</p> */}
                <p className="nes-balloon from-left is-dark">Hi! My name is Alejandro and i'm a Full Stack Javascript Developer.</p>
                <p className="nes-balloon from-right ">I started building websites when all you needed was HTML and Google did not exist :D</p>
                <p className="nes-balloon from-left is-dark">Currently I use React.js, Node.js, HTML, CSS, Javascript, MySql and MongoDB among other tools.</p>
                <img src="/public/Images/smiley.png" width="50"/>
            {/* </div> */}
        </div>
    )
}