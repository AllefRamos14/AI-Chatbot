import styled from "styled-components";

export const MessagesContainer = styled.section`

   flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;

  padding: 0 1rem 1rem;

  min-height: 0;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    padding: 0 0.85rem 0.85rem;
    gap: 0.85rem;
  }
`;

export const EmptyState = styled.div`

   /* flex: 1;
  min-height: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 1rem;

  padding: 2rem 1rem;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding: 2rem 0.5rem 1rem;
  } */

    margin: auto;

  width: 100%;
  max-width: 760px;

  min-height: calc(100vh - 260px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  gap: 1.25rem;

  padding: 2rem 1rem;

  @media (max-width: 480px) {
    min-height: calc(100vh - 220px);
    padding: 1rem 0.5rem;
  }
`;

export const EmptyIcon = styled.div`

  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const EmptyTitle = styled.h2`

   font-size: clamp(2rem, 3vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.1;

  @media (max-width: 480px) {
    font-size: 2.7rem;
  }
`;

export const EmptyDescription = styled.p`

  max-width: 620px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

export const Suggestions = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;

  margin-top: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    gap: 0.6rem;
  }
`;

export const SuggestionButton = styled.button`

   border: none;
  cursor: pointer;

  padding: 0.7rem 1rem;

  border-radius: 999px;

  background: rgba(124, 77, 255, 0.12);

  color: ${({ theme }) => theme.colors.primary};

  transition: 0.2s;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.05);

  &:hover {
    transform: translateY(-2px);
    background: rgba(124, 77, 255, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }
`;

export const Badge = styled.span`
  padding: 6px 14px;
  border-radius: 999px;

  background: rgba(124, 77, 255, 0.12);

  border: 1px solid rgba(124, 77, 255, 0.2);

  color: ${({ theme }) => theme.colors.primary};

  font-size: 0.75rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;