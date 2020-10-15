import styled from "styled-components";

export const HeaderNavigation = styled.ul`
  display: flex;
`;

export const Logo = styled.div`
  font-size: ${(props) => props.theme.fontSize.h2};
  color: blue;
  margin-right: 15px;
`;
export const LoginIcon = styled.div`
  margin-top:5px;
  width: 40px;
  height: 34px;
`;
export const ProfileHead = styled.div`
  display: flex;
  flex:1;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogOut = styled.div`
  background: none;
  border: none;
  color: #11142f;
  opacity: 0.4;
  font-weight: 600;
  font-size: 14px;
  margin:10px;
  cursor:pointer;
  &:hover {
    opacity: 1;
  }
`;
export const Btn = styled.div`
  background: none;
  border: none;
  color: #11142f;
  opacity: 0.4;
  font-weight: 600;
  margin: 10px;
  font-size: 14px;
  
  cursor:pointer;
  &:hover {
    opacity: 1;
  }
`;