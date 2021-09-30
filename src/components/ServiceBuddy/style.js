import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  background: #e95258;
  background: linear-gradient(to right, #e95258 50%, #f9f9f9 50%);
  position: relative;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 68px;
  text-transform: uppercase;
  color: #32495e;
  padding-top: 80px;
`;
export const Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const Desc = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #f9f9f9;
  padding: 100px 0 30px 0;
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
  color: #f9f9f9;
  padding-left: ${(props) => (props.position ? "10px" : "0")};
`;
export const Radius = styled.div`
  width: 6px;
  height: 6px;
  border: 1px solid #f9f9f9;
  border-radius: 50%;
  margin-left: 10px;
`;
export const Button = styled.button`
  border: 1px solid #f9f9f9;
  border-radius: 25px;
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #f9f9f9;
  padding: 15px 50px;
  background: none;
  width: fit-content;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 100px;
`;
export const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 350px;
  right: 150px;
  bottom: 100px;
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
