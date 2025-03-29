import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#888' : '#000')};
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
`;
