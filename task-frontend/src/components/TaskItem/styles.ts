import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input{
    margin-left: 10px;
  }
`;

export const Title = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#888' : '#000')};
  margin-left: 10px;
`;

export const EditButton = styled.button`
  background: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  margin-right: 8px;
`;


export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
`;
