import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.theme.fundo};
`;

export const Title = styled.Text`
  font-size: ${props=>props.theme.tamanho};
  color: ${props=>props.theme.cor};
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #fff;
`;
