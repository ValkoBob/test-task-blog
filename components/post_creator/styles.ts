import styled from "styled-components";

export const Post_Creator = styled.div`
  width: 100vw;
  height: 70vh;
`;

export const Form = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
`;

export const Input_Creator = styled.input`
    border: 2px solid #026aa7;
    padding: 5px;
    margin-bottom: 10px;
`;

export const Button_Creator = styled.button`
  width: 200px;
  margin: 0 auto;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 7px;
  background: #5aac44;;
  color: #fff;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const Reply = styled.div`
    margin: 0 auto;
    font-size: 24px;
    color: #026aa7;
`;
