// import styled from "styled-components";

// export const HeaderContainer = styled.header`

//   /* width: 100%;
//   max-width: 760px;
//   padding: 2rem 1.5rem;

//   display: flex;
//   align-items: center;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     padding: 1rem;
//     gap: 0.75rem;
//   }

//   @media (max-width: 480px) {
//     padding: 0.85rem;
//   } */

//     width: 100%;
//   max-width: 960px;

//   margin: 0 auto;

//   padding: 2rem 1.5rem;

//   display: flex;
//   align-items: center;
//   gap: 1rem;

//   @media (max-width:768px){
//     padding:1rem;
//     gap:.75rem;
//   }

//   @media (max-width:480px){
//     padding:.85rem;
//   }
  
// `;

// export const HeaderInfo = styled.div`
//   /* min-width: 0;

//   h1 {
//     font-size: 1.15rem;
//     white-space: nowrap;
//   }

//   @media (max-width: 480px) {
//     h1 {
//       font-size: 1rem;
//     }
//   } */


//     min-width: 0;

//   display: flex;
//   align-items: center;
//   gap: 1.5rem;

//   h1 {
//     font-size: 1.15rem;
//     white-space: nowrap;
//   }

//   @media (max-width: 768px) {
//     gap: 1rem;
//   }

//   @media (max-width: 480px) {
//     gap: 0.75rem;

//     h1 {
//       font-size: 1rem;
//     }
//   }
// `;

// export const UserArea = styled.div`
//   display: flex;
//   align-items: center;
//   gap: .75rem;

  
  
// `;

// export const UserAvatar = styled.img`
//   width: 40px;
//   height: 40px;

//   border-radius: 50%;
//   object-fit: cover;

//   border: 2px solid
//     ${({ theme }) => theme.colors.primary};

//   flex-shrink: 0;

//   @media (max-width:480px){
//     width:34px;
//     height:34px;
//   }
// `;

// export const UserMeta = styled.div`
//   display:flex;
//   flex-direction:column;

//   strong{
//     font-size:.85rem;
//     color:${({theme})=>theme.colors.text};
//   }

//   span{
//     font-size:.75rem;
//     color:${({theme})=>theme.colors.textMuted};
//   }

//   @media (max-width:480px){
//     display:none;
//   }
// `;

// export const MenuButton = styled.button`
//   display: none;
//   border: none;
//   background: transparent;
//   color: ${({ theme }) => theme.colors.textMuted};
//   cursor: pointer;
//   padding: 6px;
//   border-radius: ${({ theme }) => theme.radii.sm};
//   transition: background ${({ theme }) => theme.transitions.fast},
//     color ${({ theme }) => theme.transitions.fast};

//   &:hover {
//     background: ${({ theme }) => theme.colors.surfaceStrong};
//     color: ${({ theme }) => theme.colors.text};
//   }

//   @media (max-width: 768px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// export const Logo = styled.div`
//   width: 44px;
//   height: 44px;
//   border-radius: 14px;
//   background: linear-gradient(
//     135deg,
//     ${({ theme }) => theme.colors.primary},
//     ${({ theme }) => theme.colors.secondary}
//   );
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 20px;
//   font-weight: bold;
//   flex-shrink: 0;

//   @media (max-width: 480px) {
//   width: 38px;
//   height: 38px;
//   font-size: 18px;
//   border-radius: 12px;
// }
// `;

// export const Status = styled.p`


// color: ${({ theme, $online }) =>
//     $online
//       ? theme.colors.textMuted
//       : "#ef4444"};

//   font-size: 0.8rem;

//   display: flex;
//   align-items: center;
//   gap: 1px;

//   .dot-wrapper {
//     position: relative;

//     display: inline-flex;
//     align-items: center;
//     justify-content: center;

//     width: 24px;
//     height: 24px;
//   }

//   .dot-core {
//     width: 9px;
//     height: 9px;

//     border-radius: 50%;

//     background:
//       ${({ theme, $online }) =>
//         $online
//           ? theme.colors.secondary
//           : "#ef4444"};

//     position: relative;
//     z-index: 2;
//   }

//   .dot-ring {
//     position: absolute;

//     width: 9px;
//     height: 9px;

//     border-radius: 50%;

//     background:
//       ${({ theme, $online }) =>
//         $online
//           ? theme.colors.secondary
//           : "#ef4444"};

//     animation:
//       ${({ $online }) =>
//         $online
//           ? "radarPulse 2s ease-out infinite"
//           : "none"};
//   }

//   .dot-ring2 {
//     position: absolute;

//     width: 9px;
//     height: 9px;

//     border-radius: 50%;

//     background:
//       ${({ theme, $online }) =>
//         $online
//           ? theme.colors.secondary
//           : "#ef4444"};

//     animation:
//       ${({ $online }) =>
//         $online
//           ? "radarPulse 2s ease-out infinite"
//           : "none"};

//     animation-delay: .8s;
//   }

//   @keyframes radarPulse {
//     0% {
//       transform: scale(1);
//       opacity: .8;
//     }

//     100% {
//       transform: scale(3.5);
//       opacity: 0;
//     }
//   }

// `;

// export const TokenBadge = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 0.45rem;

//   padding: 0.65rem 0.9rem;
//   border-radius: ${({ theme }) => theme.radii.full};

//   background: rgba(255,255,255,.04);
//   border: 1px solid ${({ theme }) => theme.colors.border};

//   color: ${({ theme }) => theme.colors.textMuted};
//   font-size: 0.8rem;
//   white-space: nowrap;

//   backdrop-filter: blur(10px);

//   svg {
//     opacity: .8;
//     flex-shrink: 0;
//   }

//   @media (max-width:768px) {
//     display: none;
//   }
// `;

// export const ExportButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;

//   padding: 0.65rem 0.9rem;

//   border: 1px solid ${({ theme }) => theme.colors.border};
//   border-radius: ${({ theme }) => theme.radii.full};

//   cursor: pointer;

//   background: ${({ theme }) => theme.colors.surface};
//   color: ${({ theme }) => theme.colors.text};

//   transition: .25s ease;

//   &:hover:not(:disabled) {
//     transform: translateY(-2px);
//     background: ${({ theme }) => theme.colors.surfaceStrong};
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }

//   @media (max-width: 480px) {
//   width: 40px;
//   height: 40px;
//   padding: 0;

//   span {
//     display: none;
//   }
// }
// `;

// export const HeaderActions = styled.div`

//   margin-left: auto;

//   display: flex;
//   align-items: center;
//   gap: 0.75rem;

//   flex-shrink: 0;

//   @media (max-width: 480px) {
//     gap: 0.4rem;
//   }
// `;
// export const ThemeButton = styled.button`
//   width: 42px;
//   height: 42px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   border: 1px solid ${({ theme }) => theme.colors.border};
//   border-radius: ${({ theme }) => theme.radii.full};

//   background: ${({ theme }) => theme.colors.surface};
//   color: ${({ theme }) => theme.colors.text};

//   cursor: pointer;

//   transition: .25s ease;

//   &:hover {
//     transform: translateY(-2px);
//     background: ${({ theme }) => theme.colors.surfaceStrong};
//   }
// `;

import styled, { keyframes } from "styled-components";

/* ─── Animations ─────────────────────────────────────────── */

const radarPulse = keyframes`
  0%   { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(3.5); opacity: 0; }
`;

/* ─── Container ──────────────────────────────────────────── */

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 960px;
  height: 62px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  gap: 10px;

  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 0 0.85rem;
  }
`;

/* ─── Left side ──────────────────────────────────────────── */

export const MenuButton = styled.button`
  display: none;

  width: 34px;
  height: 34px;
  flex-shrink: 0;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};

  cursor: pointer;
  align-items: center;
  justify-content: center;

  transition: background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;

  border-radius: 10px;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

export const HeaderInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;

  h1 {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
    line-height: 1;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 0.875rem;
    }
  }
`;

export const Status = styled.p`
  font-size: 0.72rem;
  line-height: 1;

  color: ${({ $online, theme }) =>
    $online ? theme.colors.textMuted : theme.colors.danger};

  display: flex;
  align-items: center;
  gap: 2px;

  .dot-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  .dot-core {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ $online, theme }) =>
      $online ? theme.colors.secondary : theme.colors.danger};
    position: relative;
    z-index: 2;
  }

  .dot-ring,
  .dot-ring2 {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ $online, theme }) =>
      $online ? theme.colors.secondary : theme.colors.danger};
    animation: ${({ $online }) => ($online ? radarPulse : "none")} 2s ease-out
      infinite;
  }

  .dot-ring2 {
    animation-delay: 0.8s;
  }
`;

/* ─── Right side — actions ───────────────────────────────── */

export const HeaderActions = styled.div`
  margin-left: auto;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const TokenBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 5px 11px;
  border-radius: ${({ theme }) => theme.radii.full};

  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.03);

  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.78rem;
  white-space: nowrap;

  svg {
    opacity: 0.7;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ExportButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding: 5px 13px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};

  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;

  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 34px;
    height: 34px;
    padding: 0;
    border-radius: ${({ theme }) => theme.radii.sm};

    span {
      display: none;
    }
  }
`;

/* Separador fino entre grupos de ações */
export const Separator = styled.div`
  width: 1px;
  height: 22px;
  background: ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
  margin: 0 2px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  width: 34px;
  height: 34px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};

  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};

  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-1px);
  }
`;

/* ─── User pill ──────────────────────────────────────────── */

export const UserPill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 4px 4px 4px 12px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};

  background: ${({ theme }) => theme.colors.surface};

  cursor: default;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.surfaceMid};
  }

  @media (max-width: 480px) {
    padding: 4px;
    background: transparent;
    border: none;
  }
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  strong {
    font-size: 0.78rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

/* Foto real do usuário */
export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;

  border-radius: 50%;
  object-fit: cover;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

/* Fallback com iniciais quando não há foto */
export const UserInitials = styled.div`
  width: 28px;
  height: 28px;

  border-radius: 50%;
  flex-shrink: 0;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.03em;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 11px;
  }
`;  