import styled from "styled-components";

export const InputContainer = styled.div`

    padding: 1rem 0;

  transition: all .25s ease;

  ${({ $dragActive }) =>
    $dragActive &&
    `
      transform: scale(1.01);
    `}
`;

export const InputRow = styled.div`


    /* display: flex;
    align-items: center;
  gap: 1rem;
  padding: 1rem;
  min-height: 72px;
  border-radius: 22px;
  background: rgba(255,255,255,.04);
  border: 1px solid
    ${({ $dragActive, theme }) =>
      $dragActive
        ? theme.colors.primary
        : "rgba(255,255,255,.08)"};

  transition: .25s ease;

  &:focus-within{
    border-color:
      ${({theme})=>theme.colors.primary};

    box-shadow:
      0 0 0 4px rgba(139,92,246,.10);
  } */

display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  min-height: 72px;

  border-radius: 22px;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid
    ${({ $dragActive, theme }) =>
      $dragActive
        ? theme.colors.primary
        : theme.colors.border};

  transition: .25s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(139,92,246,.10);
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    padding: 0.75rem;
    min-height: 64px;
    border-radius: 18px;
  }

`;

export const TextArea = styled.textarea`
   
  flex: 1;

  background: transparent;
  border: none;
  outline: none;

  resize: none;

  color: ${({ theme }) => theme.colors.text};

  min-height: 24px;
  max-height: 120px;

  padding-top: 0.55rem;

  line-height: 1.6;
  font-size: 0.95rem;

  overflow-y: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }



`;

export const SendButton = styled.button`
  /* width: 42px;
  height: 42px;

  display: grid;
  place-items: center;
  flex-shrink: 0;

  border: none;
  border-radius: 12px;

  cursor: pointer;
  font-size: 1rem;
  color: white;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  transition: transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.03);
    filter: brightness(1.08);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  } */

width: 42px;
  height: 42px;

  display: grid;
  place-items: center;
  flex-shrink: 0;

  border: none;
  border-radius: 12px;

  cursor: pointer;
  color: white;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  transition: transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.03);
    filter: brightness(1.08);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }

`;

export const FooterHint = styled.p`
  margin-top: 0.8rem;
  text-align: center;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const UploadButton = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem;
  border-radius: 0.875rem;

  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
  padding: 0.55rem;
}
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 0.75rem;
`;

export const ImagePreview = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ImagePreviewButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  width: 24px;
  height: 24px;

  border: 0;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

  export const DragText = styled.div`

    text-align: center;

  padding: 0.75rem;

  font-size: 0.9rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary};

  background: ${({ theme }) => theme.colors.primaryHover};

  border: 1px dashed ${({ theme }) => theme.colors.primary};

  border-radius: 14px;

  margin-bottom: .75rem;

  animation: fade .25s ease;

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
