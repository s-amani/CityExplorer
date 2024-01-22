import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export const NavBar = () => {
    return (
        <Menu inverted fixed="top" >
            <Container>
                <Menu.Item header as={NavLink} to='/'>
                    <img src="/assets/logo-sse-ex.png" alt="Logo"/>
                    CityExplorer
                </Menu.Item>
                <Menu.Item name="City List" as={NavLink} to='/cities' />
                <Menu.Item  style={{display: 'none'}}>
                    <Button positive content="Create City" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;