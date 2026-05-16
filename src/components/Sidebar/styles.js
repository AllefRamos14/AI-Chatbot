import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 280px;
  height: 100dvh;
  padding: 24px 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 280px;
    height: 100dvh;
    transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform ${({ theme }) => theme.transitions.base};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const SidebarOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    position: fixed;
    inset: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const SidebarTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1rem;
  font-weight: 600;
`;

export const NewChatButton = styled.button`
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 13px 14px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 600;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  transition: transform ${({ theme }) => theme.transitions.base},
    opacity ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 4px;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.surfaceMid} transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.surfaceMid};
    border-radius: ${({ theme }) => theme.radii.full};
  }
`;

export const ChatItem = styled.div`
  width: 100%;
  border: 1px solid
    ${({ $active, theme }) =>
      $active
        ? `rgba(124, 77, 255, 0.8)`
        : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 12px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primaryHover : theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  text-align: left;
  transition: background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.88rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    border-color: rgba(124, 77, 255, 0.4);
  }
`;

export const DeleteButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: ${({ theme }) => theme.radii.full};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  transition: background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const EmptyText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  text-align: center;
  margin-top: 24px;
  line-height: 1.5;
`;

export const SidebarFooter = styled.footer`
  color: ${({ theme }) => theme.colors.textDisabled};
  font-size: 0.75rem;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display:flex;
  align-items:center;
  gap:.6rem;

  padding:.75rem 1rem;

  border-radius:14px;

  background:
    ${({theme})=>theme.colors.surface};

  border:1px solid
    ${({theme})=>theme.colors.border};
`;
export const SearchInput = styled.input`
  flex:1;

  background:transparent;

  border:none;
  outline:none;

  color:
   ${({theme})=>theme.colors.text};

  font-size:.9rem;

  &::placeholder{
    color:
      ${({theme})=>
      theme.colors.textMuted};
  }
`;
