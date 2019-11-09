import React from "react";
import styled, { keyframes } from 'styled-components';

const Card = styled.div`
  max-width: 600px;
  border: 2px dashed purple;
  width: 300px;
  max-height: 550px;
  margin: 50px;
  transition: transform 0.2s ease-in;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #cbcbcb;    
    transform: translateY(-5px) scale(1.05);
    border:9px dashed crimson;
  }
`;
const glow = keyframes`
0% {
    text-shadow: 0 0 10px rgba(255,255,0,0.3),
                 0 0 20px rgba(255,255,0,0.3),
                 0 0 22px  rgba(255,255,0,0.3),
                 0 0 40px  rgba(66,220,219,.8),
                 0 0 60px  rgba(66,220,219,.8),
                 0 0 80px  rgba(66,220,219,.5),
                 0 0 100px rgba(66,220,219,.5),
                 0 0 140px rgba(66,220,219,.5),
                 0 0 200px rgba(66,220,219,.5);
  }
  100% {
    text-shadow: 0 0 2px rgba(255,255,0,0.3),
                 0 0 8px rgba(255,255,0,0.3),
                 0 0 10px rgba(255,255,0,0.3),
                 0 0 20px rgba(66,220,219,.8),
                 0 0 30px rgba(66,220,219,.8),
                 0 0 40px rgba(66,220,219,.8),
                 0 0 50px rgba(66,220,219,.5),
                 0 0 80px rgba(66,220,219,.5);
  }
`;
const Glow = styled.h1`
    color: yellow;
    font-size: 1rem;
    animation: ${glow} 2s infinite
`;
const blink = keyframes`
    0% {opacity: 0}
    49%{opacity: 0}
    50% {opacity: 1}
`;
const Title = styled.p`
    color: crimson;
    animation: ${blink} 2s infinite;
`;

export default function CharacterCard({ attribute }) {
  return (
    <Card>
      <img src={attribute.image}/>
      <Title>{attribute.name}</Title>
      <p>Current Status: {attribute.status}</p>
      <Glow>Species: {attribute.species}</Glow>
      <p>Origin: {attribute.origin.name}</p>
    </Card>
  )
}
