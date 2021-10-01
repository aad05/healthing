import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background: linear-gradient(to right, #e95258 50%, #f9f9f9 50%);
  position: relative;
`;
export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 1;
  height: 718px;
`;
export const Container = styled.div`
  width: 60%;
  margin: auto;
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  text-align: ${(props) => (props.position ? "right" : "left")};
  text-transform: uppercase;
  color: ${(props) => (props.color ? "#F9F9F9" : "#32495E")};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 90px;
`;
export const Desc = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: ${(props) => (props.position ? "right" : "left")};
  color: ${(props) => (props.color ? "#f9f9f9" : "#32495E")};
  padding-top: 50px;
  position: relative;
`;
export const MainList = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-left: ${(props) => (props.position ? "auto" : "none")};
  padding-top: 12px;
`;
export const List = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.color ? "#f9f9f9" : "#32495E")};
  padding-left: ${(props) => (props.position ? "10px" : "0")};
`;
export const Radius = styled.div`
  width: 6px;
  height: 6px;
  border: 1px solid ${(props) => (props.color ? "#32495E" : "#f9f9f9")};
  border-radius: 50%;
  margin-left: 10px;
`;
export const MainButton = styled.div`
  width: fit-content;
  margin-left: ${(props) => (props.position ? "auto" : "none")};
  padding-top: 60px;
  margin-bottom: 60px;
`;
export const Button = styled.button`
  border: 1px solid ${(props) => (props.color ? "#f9f9f9" : "#32495E")};
  border-radius: 25px;
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.color ? "#f9f9f9" : "#32495E")};
  padding: 15px 50px;
  background: none;
  width: fit-content;
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.bg ? "#fff" : "#e95258")};
    color: ${(props) => (props.bg ? "#e95258" : "#fff")};
    border: none;
  }
`;

export const Img = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
export const Img2 = styled.div`
  position: absolute;
  right: 0;
  bottom: -5px;
`;
export const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-top: 50px;
  margin-left: 40px;
`;
export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #c33a7c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 0 0 7px rgba(195, 58, 124, 0.3);
  }
`;
Icon.Phone = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #32495e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 0 0 7px rgba(50, 73, 94, 0.3);
  }
`;
Icon.Checkbox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #4598ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 0 0 0 7px rgba(69, 152, 255, 0.3);
  }
`;
Icon.Whatsapp = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #14ac51;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 0 0 7px rgba(20, 172, 81, 0.3);
  }
`;
Icon.Dots = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #e95258;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 0 0 0 20px rgba(233, 82, 88, 0.3);
  }
`;
export const MouseWrapper = styled.div`
  position: absolute;
  width: 70px;
  cursor: pointer;
  height: 70px;
  background: #f2c94c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: -65px;
  transform: translate(-50%, -50%);
`;
export const PolygonWrapper = styled.div`
  padding-top: 1px;
`;
