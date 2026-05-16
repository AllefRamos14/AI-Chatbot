import { Brain, Download, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { ExportButton, HeaderActions, HeaderContainer, HeaderInfo, Logo, MenuButton, Status, ThemeButton, TokenBadge } from "./styles";
export function Header({ totalTokens, onMenuClick, CurrentChat, hasMessages,themeMode,toggleTheme }) {

const [isOnline, setIsOnline] = useState(
  navigator.onLine
);

useEffect(() => {
  function handleOnline() {
    setIsOnline(true);
  }

  function handleOffline() {
    setIsOnline(false);
  }

  window.addEventListener(
    "online",
    handleOnline
  );

  window.addEventListener(
    "offline",
    handleOffline
  );

  return () => {
    window.removeEventListener(
      "online",
      handleOnline
    );

    window.removeEventListener(
      "offline",
      handleOffline
    );
  };
}, []);


  return (
    <HeaderContainer>
      <MenuButton type="button" onClick={onMenuClick} aria-label="Abrir menu">
        <Menu size={20} />
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
  <ExportButton
    type="button"
    onClick={CurrentChat}
    disabled={!hasMessages}
  >
    <Download size={16} />
    <span>Exportar</span>
    
  </ExportButton>

  {totalTokens > 0 && (
    <TokenBadge title="Total de tokens usados nesta conversa">
      <Brain size={14} />
      {totalTokens.toLocaleString()}
    </TokenBadge>
  )}

  <ThemeButton
  type="button"
  onClick={toggleTheme}
  aria-label="Alternar tema"
  title="Alternar tema"
>
  {themeMode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
</ThemeButton>
</HeaderActions>
    </HeaderContainer>
  );
}
