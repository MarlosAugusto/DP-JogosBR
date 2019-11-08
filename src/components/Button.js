import React from "react";
import styled from "styled-components/native";

export const TxtB = styled.Text`
  color: ${props => props.color};
  font-size: 20;
  text-align: center;
  font-weight: bold;
`;

const Btn = styled.View`
  background-color: ${props => (props.bg ? props.bg : "#ffffff")}cc;
  border-radius: 10;
  border: ${props => props.color};
  width: ${props => (props.wd ? `${props.wd}%` : "70%")};
  height: ${props => (props.hg ? props.hg : 45)};
  align-items: center;
  justify-content: center;
`;

export default function Button({ title, color, bg, wd, hg }) {
  return (
    <Btn color={color} bg={bg} wd={wd} hg={hg}>
      <TxtB color={color}>{title}</TxtB>
    </Btn>
  );
}
