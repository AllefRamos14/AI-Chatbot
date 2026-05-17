import { Download, LogOut, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ExportButton,
  HeaderActions,
  HeaderContainer,
  HeaderInfo,
  Logo,
  MenuButton,
  Separator,
  Status,
  ThemeButton,
  TokenBadge,
  UserArea,
  UserAvatar,
  UserInitials,
  UserMeta,
  UserPill,
} from "./styles";

export function Header({
  totalTokens,
  onMenuClick,
  CurrentChat,
  hasMessages,
  themeMode,
  toggleTheme,
  onLogout,
}) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const user = JSON.parse(localStorage.getItem("@devcore:user"));

  const initials = user?.name
    ? user.name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "?";

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <HeaderContainer>
      <MenuButton type="button" onClick={onMenuClick} aria-label="Abrir menu">
        <Menu size={18} />
      </MenuButton>

      <Logo>✦</Logo>

      <HeaderInfo>
        <h1>DevCore AI</h1>

        <Status $online={isOnline}>
          <span className="dot-wrapper">
            <span className="dot-ring" />
            <span className="dot-ring2" />
            <span className="dot-core" />
          </span>
          {isOnline ? "Online" : "Offline"}
        </Status>
      </HeaderInfo>

      <HeaderActions>
        {totalTokens > 0 && (
          <TokenBadge title="Total de tokens usados nesta conversa">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44l-3.45-3.45a2.5 2.5 0 0 1 3.54-3.54l.37.37V7a2.5 2.5 0 0 1 2-2.45" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44l3.45-3.45a2.5 2.5 0 0 0-3.54-3.54l-.37.37V7a2.5 2.5 0 0 0-2-2.45" />
            </svg>
            {totalTokens.toLocaleString()}
          </TokenBadge>
        )}

        <ExportButton
          type="button"
          onClick={CurrentChat}
          disabled={!hasMessages}
        >
          <Download size={14} />
          <span>Exportar</span>
        </ExportButton>

        <Separator />

        <ThemeButton
          type="button"
          onClick={toggleTheme}
          aria-label="Alternar tema"
          title="Alternar tema"
        >
          {themeMode === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </ThemeButton>

        <UserPill>
          <UserMeta>
            <strong>{user?.name || "Visitante"}</strong>
          
          </UserMeta>

          <UserArea>
            {user?.photo ? (
              <UserAvatar src={user.photo} alt={user.name} />
            ) : (
              <UserInitials>{initials}</UserInitials>
            )}
          </UserArea>
        </UserPill>

        <ThemeButton
          type="button"
          onClick={onLogout}
          aria-label="Sair"
          title="Sair"
        >
          <LogOut size={15} />
        </ThemeButton>
      </HeaderActions>
    </HeaderContainer>
  );
}