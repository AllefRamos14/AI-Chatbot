// import styled from "styled-components";

// export const Container = styled.main`
//   min-height: 100vh;
//   width: 100%;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   padding: 2rem;

//   background:
//     radial-gradient(circle at top, rgba(124, 58, 237, 0.25), transparent 35%),
//     ${({ theme }) => theme.colors.background};

//   position: relative;
//   overflow: hidden;
// `;

// export const Glow = styled.div`
//   position: absolute;
//   width: 28rem;
//   height: 28rem;
//   border-radius: 50%;

//   background: rgba(124, 58, 237, 0.18);
//   filter: blur(90px);

//   top: -8rem;
//   right: -8rem;
// `;

// export const Content = styled.section`
//   width: 100%;
//   max-width: 480px;

//   padding: 2.5rem;

//   border: 1px solid rgba(255, 255, 255, 0.08);
//   border-radius: 2rem;

//   background: rgba(15, 15, 20, 0.82);
//   backdrop-filter: blur(16px);

//   box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);

//   text-align: center;

//   z-index: 1;
// `;

// export const Brand = styled.h2`
//   font-size: 1rem;
//   font-weight: 700;
//   letter-spacing: 0.18em;
//   text-transform: uppercase;

//   color: ${({ theme }) => theme.colors.primary};
//   margin-bottom: 1.5rem;
// `;

// export const Badge = styled.span`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;

//   padding: 0.45rem 0.85rem;
//   border-radius: 999px;

//   font-size: 0.75rem;
//   font-weight: 600;

//   color: ${({ theme }) => theme.colors.text};
//   background: rgba(255, 255, 255, 0.06);

//   margin-bottom: 1.25rem;
// `;

// export const Title = styled.h1`
//   font-size: clamp(2rem, 5vw, 3rem);
//   line-height: 1.05;
//   font-weight: 800;

//   color: ${({ theme }) => theme.colors.text};

//   margin-bottom: 1rem;
// `;

// export const Description = styled.p`
//   font-size: 1rem;
//   line-height: 1.7;

//   color: ${({ theme }) => theme.colors.textSecondary};

//   margin-bottom: 2rem;
// `;

// export const Actions = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.875rem;
// `;

// export const GoogleButton = styled.button`
//   height: 3.25rem;

//   border: none;
//   border-radius: 1rem;

//   background: ${({ theme }) => theme.colors.text};
//   color: ${({ theme }) => theme.colors.background};

//   font-size: 0.95rem;
//   font-weight: 700;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.75rem;

//   cursor: pointer;
//   transition: all 0.25s ease;

//   span {
//     width: 1.5rem;
//     height: 1.5rem;

//     border-radius: 50%;
//     background: ${({ theme }) => theme.colors.background};
//     color: ${({ theme }) => theme.colors.text};

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     font-weight: 800;
//   }

//   &:hover {
//     transform: translateY(-2px);
//     filter: brightness(0.92);
//   }
// `;

// export const GuestButton = styled.button`
//   height: 3.25rem;

//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 1rem;

//   background: rgba(255, 255, 255, 0.04);
//   color: ${({ theme }) => theme.colors.text};

//   font-size: 0.95rem;
//   font-weight: 700;

//   cursor: pointer;
//   transition: all 0.25s ease;

//   &:hover {
//     transform: translateY(-2px);
//     background: rgba(255, 255, 255, 0.08);
//   }
// `;

// export const FooterText = styled.p`
//   margin-top: 1.75rem;

//   font-size: 0.8rem;
//   color: ${({ theme }) => theme.colors.textSecondary};

//   strong {
//     color: ${({ theme }) => theme.colors.text};
//   }
// `;

import styled, { keyframes } from "styled-components";

/* ─── Animations ─────────────────────────────────────────── */

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.3; transform: scale(0.6); }
`;

/* ─── Layout ─────────────────────────────────────────────── */

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 1rem;

  background: ${({ theme }) => theme.colors.background};

  position: relative;
  overflow: hidden;


   @media (max-width: 480px) {
    align-items: flex-end;   /* card gruda no fundo */
    padding: 0;
  }
`;

export const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;

  ${({ $position }) =>
    $position === "top-left"
      ? `
        width: 560px;
        height: 560px;
        background: radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 65%);
        top: -200px;
        left: -120px;
      `
      : `
        width: 380px;
        height: 380px;
        background: radial-gradient(circle, rgba(0,200,180,0.09) 0%, transparent 65%);
        bottom: -100px;
        right: -80px;
      `}
`;

export const Grid = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
  background-size: 48px 48px;
`;

/* ─── Card ───────────────────────────────────────────────── */

export const Card = styled.section`
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 400px;

  padding: 2.25rem 2rem 2rem;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  box-shadow:
    0 0 0 1px rgba(139, 92, 246, 0.10) inset,
    0 40px 80px rgba(0, 0, 0, 0.55);

  text-align: center;

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 28px 28px 0 0;
    padding: 0.5rem 1.25rem 2rem;
    margin-top: auto; /* empurra pro fundo */
  }
`;

/* ─── Logo & Brand ───────────────────────────────────────── */

export const LogoImage = styled.img`
  width: 72px;
  height: 72px;

  border-radius: 18px;
  object-fit: cover;

  margin-bottom: 1.25rem;

  box-shadow:
    0 8px 32px rgba(139, 92, 246, 0.35),
    0 0 0 1px rgba(139, 92, 246, 0.2);


    @media (max-width: 480px) {
    position: absolute;
    top: -110px;             /* flutua acima do sheet */
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0;
  }
`;

export const Brand = styled.p`
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.text};

  margin: 0 0 1.4rem;
`;

export const BrandAccent = styled.em`
  font-style: normal;
  color: ${({ theme }) => theme.colors.primary};
`;

/* ─── Eyebrow badge ──────────────────────────────────────── */

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  background: rgba(139, 92, 246, 0.10);
  border: 1px solid rgba(139, 92, 246, 0.22);
  border-radius: ${({ theme }) => theme.radii.full};

  padding: 3px 13px;

  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 1.4rem;
`;

export const EyebrowDot = styled.span`
  width: 5px;
  height: 5px;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  animation: ${pulseDot} 2.2s ease-in-out infinite;
`;

/* ─── Title ──────────────────────────────────────────────── */

export const Title = styled.h1`
  font-size: clamp(1.7rem, 5vw, 2.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;

  color: ${({ theme }) => theme.colors.text};

  margin: 0 0 0.85rem;
`;

export const TitleAccent = styled.em`
  font-style: normal;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* ─── Description ────────────────────────────────────────── */

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;

  color: ${({ theme }) => theme.colors.textMuted};

  margin: 0 0 1.6rem;
`;

/* ─── Features ───────────────────────────────────────────── */

export const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  margin-bottom: 1.75rem;
`;

export const Feature = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 11px;
  color: ${({ theme }) => theme.colors.textDisabled};
`;

export const FeatureCheck = styled.span`
  width: 14px;
  height: 14px;
  flex-shrink: 0;

  background: rgba(139, 92, 246, 0.14);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ─── Separator ──────────────────────────────────────────── */

export const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 0.9rem;
`;

export const SeparatorLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

export const SeparatorLabel = styled.span`
  font-size: 10.5px;
  color: ${({ theme }) => theme.colors.surfaceMid};

  text-transform: uppercase;
  letter-spacing: 0.09em;
`;

/* ─── Actions ────────────────────────────────────────────── */

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  margin-bottom: 1.75rem;
`;

export const GoogleButton = styled.button`
  width: 100%;
  height: 50px;

  border: none;
  border-radius: ${({ theme }) => theme.radii.md};

  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};

  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    filter: brightness(0.92);
  }

  &:active {
    transform: translateY(0);
  }

   @media (max-width: 480px) { height: 54px; border-radius: 14px; }
`;

export const GuestButton = styled.button`
  width: 100%;
  height: 50px;

  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};

  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    border-color: rgba(139, 92, 246, 0.22);
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) { height: 54px; border-radius: 14px; }
`;

// Novo componente — adicione no styles.js
export const DragHandle = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    width: 36px; height: 4px;
    background: ${({ theme }) => theme.colors.border};
    border-radius: 999px;
    margin: 0.5rem auto 1.5rem;
  }
`;

/* ─── Footer ─────────────────────────────────────────────── */

export const FooterText = styled.p`
  font-size: 0.72rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.surfaceMid};

  margin: 0;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textDisabled};
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;