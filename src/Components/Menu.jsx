import React from "react";
// import { Button, Colors, Container, Text } from "nes-ui-react";

export function Menu() {
    return (
        <>
            <div className="menu nes-container">
                <button type="button" className="nes-btn is-primary is-icon">Projects
                <i className="nes-icon star is-small"></i>
                </button>
                <button type="button" className="nes-btn is-success">About</button>
                <button type="button" className="nes-btn is-warning">Contact</button>
                <button type="button" className="nes-btn is-error">Links</button>
            </div>
        </>
        // <section className="showcase">
        //     <section className="menu nes-container with-title">
        //         <h3 className="title">Buttons</h3>
        //         <div id="buttons" className="item">
        //             <a className="nes-btn" href="#">Normal</a>
        //             <button type="button" className="nes-btn is-primary">Primary</button>
        //             <button type="button" className="nes-btn is-success">Success</button>
        //             <button type="button" className="nes-btn is-warning">Warning</button>
        //             <button type="button" className="nes-btn is-error">Error</button>
        //             <button type="button" className="nes-btn is-disabled">Disabled</button>
        //         </div>
        //     </section>
        // </section>
    )
}