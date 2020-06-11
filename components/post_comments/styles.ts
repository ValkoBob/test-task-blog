import styled from "styled-components";

export const Button_add_comment = styled.button`
  width: 120px;
  margin-right: 5px;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #026aa7;
  white-space:nowrap;
  color: #fff;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const Textarea_comment = styled.textarea`
   border: 1px solid #026aa7;
    resize: none;
    height: 70px;
    border-radius: 4px;
   background: transparent;
   margin: 5px 0;
   padding: 5px;
   overflow: hidden;
   white-space: pre-line;
`;

export const Comment_container = styled.div`

`;
