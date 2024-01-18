import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed="top" >
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo-sse.png" alt="Logo" style={{marginRight: '10px', width: 70, height: 30}}/>
                    City Explorer
                </Menu.Item>
                <Menu.Item name="Cities" />
                <Menu.Item>
                    <Button positive content="Create City" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}