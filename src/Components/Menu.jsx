import React from "react";
// import { Button, Colors, Container, Text } from "nes-ui-react";

export function Menu({ pageName }) {
    return (
        <>
            <div className="menu nes-container">
                <button type="button" className="nes-btn is-primary is-icon">Projects
                    {pageName == "projects" ? <i className="nes-icon star is-small"></i> : ""}
                </button>
                <button type="button" className="nes-btn is-success">About
                    {pageName == "about" ? <i className="nes-icon star is-small"></i> : ""}
                </button>
                <button type="button" className="nes-btn is-warning">Contact
                    {pageName == "contact" ? <i className="nes-icon star is-small"></i> : ""}
                </button>
                <button type="button" className="nes-btn is-error">Links
                    {pageName == "links" ? <i className="nes-icon star is-small"></i> : ""}
                </button>
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