import React from "react";
import { Header, Container, LogoWrapper, Menu, activeStyle } from "./style";
import Logo from "../../assets/imgs/logo.png";
import { navbar } from "../../utils/Navbar";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
export const Navbar = () => {
  const history = useHistory();
  return (
    <Header>
      <Container>
        <Fade top cascade>
          <LogoWrapper onClick={() => history.push("/home")}>
            <LogoWrapper.Icon src={Logo} />
            <LogoWrapper.Title>HEALTHING</LogoWrapper.Title>
          </LogoWrapper>
        </Fade>
        <Menu>
          {navbar.map(({ title, path, id }) => {
            return (
              <Menu key={id}>
                <Menu.Title to={path} activeStyle={activeStyle}>
                  <Fade top cascade>
                    {title}
                  </Fade>
                </Menu.Title>
              </Menu>
            );
          })}
        </Menu>
      </Container>
    </Header>
  );
};
