import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  background: linear-gradient(to right, #e95258 50%, #f9f9f9 50%);
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 20px 0;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
LogoWrapper.Icon = styled.img`
  width: 70px;
  height: 45px;
  margin-right: 20px;
`;
LogoWrapper.Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #f9f9f9;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
Menu.Title = styled(NavLink)`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #32495e;
  margin-left: 52px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;
`;
export const activeStyle = {
  background: "#E95258",
  borderRadius: "12px",
  padding: "10px 20px",
  color: "#fff",
  transition: "all .7s ease",
};
