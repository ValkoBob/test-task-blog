import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
  background: #026aa7;
  color: #fff;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Button_in_header = styled.a`
  margin: 17px;
  cursor: pointer;
  background: #026aa7;
  border-radius: 25px;
  border: 2px solid #fff;
  padding: 10px 20px 10px 20px;
  font-size: 18px;
  font-family: Helvetica Neue;

  &:hover {
    opacity: 0.5;
    color: white;
  }
`;

export const Header_Title = styled.h1`
  font-family: Helvetica Neue;
  cursor: default;
`;

export const Main = styled.main`
  padding: 40px 100px;
  display: flex;
  flex-wrap: wrap;
`;
