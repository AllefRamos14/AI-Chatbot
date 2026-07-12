import styled from "styled-components";

export const AppContainer = styled.div`

 height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background:
    radial-gradient(
      ellipse 60% 50% at 20% 10%,
      rgba(120, 80, 255, 0.12) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse 50% 40% at 80% 80%,
      rgba(0, 200, 180, 0.08) 0%,
      transparent 60%
    ),
    ${({ theme }) => theme.colors.background};

`;

export const ChatContainer = styled.main`

   width: 100%;
  max-width: 960px;

  flex: 1;
  min-height: 0;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(255, 80, 80, 0.08);
  border: 1px solid rgba(255, 80, 80, 0.2);

  color: #ff8080;

  font-size: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;

  text-align: center;
`;

export const Layout = styled.div`


   width: 100%;
  height: 100vh;       
  display: flex;
  overflow: hidden;     

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;