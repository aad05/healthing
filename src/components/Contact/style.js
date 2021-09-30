import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #e95258 50%, #f9f9f9 50%);
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  padding-top: 100px;
`;
export const Right = styled.div`
  flex: 1;
  padding: 100px 0 0 50px;
`;
Right.Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;
  color: #32495e;
  text-align: left;
`;
Right.Desc = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #32495e;
  padding-top: 20px;
`;
Right.Name = styled.input`
  width: 300px;
  padding: 20px;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-top: 40px;
  outline: none;
  font-size: 18px;
  ::placeholder {
    font-size: 16px;
  }
`;
Right.Surname = styled.input`
  width: 300px;
  padding: 20px;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-top: 10px;
  outline: none;
  font-size: 18px;
  ::placeholder {
    font-size: 16px;
  }
`;
Right.Phone = styled.input`
  width: 300px;
  padding: 20px;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-top: 10px;
  outline: none;
  font-size: 18px;
  ::placeholder {
    font-size: 16px;
  }
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
  margin-top: 50px;
  :hover {
    background-color: ${(props) => (props.bg ? "#fff" : "#e95258")};
    color: ${(props) => (props.bg ? "#e95258" : "#fff")};
    border: none;
  }
`;
