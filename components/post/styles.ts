import styled from 'styled-components';

export const One_Post = styled.div`
  padding: 5px 10px;
  margin: 10px;
  border: 3px solid #026aa7;
  display: flex;
  flex-direction: column;
`;

export const Input_post = styled.input`
   border: ${props =>
    // @ts-ignore
    props.isEdit ? 'none' : '1px solid #026aa7'};
   background: transparent;
   margin: 5px 0;
   padding: 5px;
`;

export const Textarea_post = styled.textarea`
   border: ${props =>
    // @ts-ignore
    props.isEdit ? 'none' : '1px solid #026aa7'};
    resize: none;
    height: 50px;
   background: transparent;
   margin: 5px 0;
   padding: 5px;
   overflow: hidden;
   white-space: pre-line;
`;

export const Button_Edit = styled.button`
  margin-right: 5px;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #026aa7;
  color: #fff;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const Button_Delete = styled.button`
  margin-right: 5px;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #ff4600d1;
  color: #fff;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const Button_Visit = styled.button`
  margin-right: 5px;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #026aa7;
  color: #fff;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const Buttons = styled.div`
margin: 5px;
margin-bottom: 5px;
`;
