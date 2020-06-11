import styled from "styled-components";

export const Post_page = styled.div`
  padding: 5px 10px;
  margin: 0 auto;
  width: 30rem;
  height: 100%;
  border: 3px solid #026aa7;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  & hr {
  width: 100%;
    border: 1px solid black;
  }
`;

export const Button_post_page = styled.button`
  width: 90px;
  margin-right: 5px;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background:${props =>
    // @ts-ignore
    props.isEdit ? '#026aa7' : 'green'};
  color: #fff;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const Comments_part = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
& h3 {
font-size: 22px;
}
`;
