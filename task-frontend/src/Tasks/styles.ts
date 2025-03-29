import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
