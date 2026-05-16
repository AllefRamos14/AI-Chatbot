import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: translateY(0) scale(0.7);
    opacity: 0.4;
  }

  40% {
    transform: translateY(-5px) scale(1);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
`;

export const TypingContainer = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 0.9rem;

  padding: 0.9rem 1rem;

  margin-top: 0.3rem;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.06);

  backdrop-filter: blur(12px);

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);

  @media (max-width: 480px) {
    padding: 0.8rem 0.9rem;
    gap: 0.7rem;
  }
`;

export const LoadingText = styled.span`
  font-size: 0.88rem;

  color: ${({ theme }) => theme.colors.gray};

  animation: ${pulse} 1.8s infinite ease;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  animation: ${bounce} 1.2s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: 0.15s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  @media (max-width: 480px) {
    width: 7px;
    height: 7px;
  }
`;