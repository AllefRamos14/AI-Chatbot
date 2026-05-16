import styled from "styled-components";

export const HeaderContainer = styled.header`

  /* width: 100%;
  max-width: 760px;
  padding: 2rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.85rem;
  } */

    width: 100%;
  max-width: 960px;

  margin: 0 auto;

  padding: 2rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width:768px){
    padding:1rem;
    gap:.75rem;
  }

  @media (max-width:480px){
    padding:.85rem;
  }
  
`;

export const HeaderInfo = styled.div`
  min-width: 0;

  h1 {
    font-size: 1.15rem;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: 6px;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;

  @media (max-width: 480px) {
  width: 38px;
  height: 38px;
  font-size: 18px;
  border-radius: 12px;
}
`;

export const Status = styled.p`


color: ${({ theme, $online }) =>
    $online
      ? theme.colors.textMuted
      : "#ef4444"};

  font-size: 0.8rem;

  display: flex;
  align-items: center;
  gap: 1px;

  .dot-wrapper {
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
  }

  .dot-core {
    width: 9px;
    height: 9px;

    border-radius: 50%;

    background:
      ${({ theme, $online }) =>
        $online
          ? theme.colors.secondary
          : "#ef4444"};

    position: relative;
    z-index: 2;
  }

  .dot-ring {
    position: absolute;

    width: 9px;
    height: 9px;

    border-radius: 50%;

    background:
      ${({ theme, $online }) =>
        $online
          ? theme.colors.secondary
          : "#ef4444"};

    animation:
      ${({ $online }) =>
        $online
          ? "radarPulse 2s ease-out infinite"
          : "none"};
  }

  .dot-ring2 {
    position: absolute;

    width: 9px;
    height: 9px;

    border-radius: 50%;

    background:
      ${({ theme, $online }) =>
        $online
          ? theme.colors.secondary
          : "#ef4444"};

    animation:
      ${({ $online }) =>
        $online
          ? "radarPulse 2s ease-out infinite"
          : "none"};

    animation-delay: .8s;
  }

  @keyframes radarPulse {
    0% {
      transform: scale(1);
      opacity: .8;
    }

    100% {
      transform: scale(3.5);
      opacity: 0;
    }
  }

`;

export const TokenBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.45rem;

  padding: 0.65rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.full};

  background: rgba(255,255,255,.04);
  border: 1px solid ${({ theme }) => theme.colors.border};

  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.8rem;
  white-space: nowrap;

  backdrop-filter: blur(10px);

  svg {
    opacity: .8;
    flex-shrink: 0;
  }

  @media (max-width:768px) {
    display: none;
  }
`;

export const ExportButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.65rem 0.9rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};

  cursor: pointer;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  transition: .25s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
  width: 40px;
  height: 40px;
  padding: 0;

  span {
    display: none;
  }
}
`;

export const HeaderActions = styled.div`

  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  flex-shrink: 0;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;
export const ThemeButton = styled.button`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  transition: .25s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`;