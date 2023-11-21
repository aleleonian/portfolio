import React from "react";
import { Button, Colors, Container, Text } from "nes-ui-react";

function emptyCallback() {

}
export function Menu() {
    return (
        <>
            <Container title='Menu' className="menu">
                <Button color="primary" onClick={emptyCallback}>Projects</Button>
                <Button color="warning" onClick={emptyCallback}>About</Button>
                <Button color="error" onClick={emptyCallback}>Contact</Button>
                <Button color="success" onClick={emptyCallback}>Github</Button>
            </Container>
        </>
    )
}