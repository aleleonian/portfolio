import React from "react";
import { Button, Colors, Container, Text } from "nes-ui-react";

function emptyCallback() {

}
export function Menu() {
    return (
        <Container title='Menu' className="menu">
            <Button size="large" className="menuItem" color="primary" onClick={emptyCallback}>Projects</Button>
            <Button size="large" className="menuItem" color="warning" onClick={emptyCallback}>About</Button>
            <Button size="large" className="menuItem" color="error" onClick={emptyCallback}>Contact</Button>
            <Button size="large" className="menuItem" color="success" onClick={emptyCallback}>Links</Button>
        </Container>
    )
}