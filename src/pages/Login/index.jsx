import { toast } from "react-toastify";
import { loginWithGoogle } from "../../services/firebase";
import {
  Actions,
  Brand,
  BrandAccent,
  Card,
  Container,
  Description,
  DragHandle,
  Eyebrow,
  EyebrowDot,
  Feature,
  FeatureCheck,
  Features,
  FooterLink,
  FooterText,
  GoogleButton,
  Grid,
  GuestButton,
  LogoImage,
  Orb,
  Separator,
  SeparatorLabel,
  SeparatorLine,
  Title,
  TitleAccent,
} from "./styles";
import logoSrc from "/icons/icon-512x512.png";

export function Login({ onGuestAccess }) {

  
  async function handleGoogleLogin() {
  try {
    const user = await loginWithGoogle();

    localStorage.setItem(
      "@devcore:user",
      JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: "user",
      })
    );

    toast.success(`👋 Olá, ${user.displayName}! Login realizado com sucesso.`, {
  autoClose: 3000,
});

    onGuestAccess();
  } catch (error) {
    console.log("Erro no login Google:", error);

    toast.error("Não foi possível fazer login com Google.");
  }
}

function handleGuestAccess() {
  localStorage.setItem(
    "@devcore:user",
    JSON.stringify({
      name: "Visitante",
      email: null,
      photo: null,
      role: "guest",
    })
  );

  toast.info("👋 Olá! Você entrou como visitante.", {
  autoClose: 3000,
});

  onGuestAccess();
}

  

  return (
    <Container>
      <Orb $position="top-left" />
      <Orb $position="bottom-right" />
      <Grid />

      <Card>
        <DragHandle />

        <LogoImage src={logoSrc} alt="DevCore AI" />

        <Brand>
          Dev<BrandAccent>Core</BrandAccent> AI
        </Brand>

        <Eyebrow>
          <EyebrowDot />
          Plataforma inteligente
        </Eyebrow>

        <Title>
          Bem-vindo de volta.
          <br />
          <TitleAccent>Entre para continuar.</TitleAccent>
        </Title>

        <Description>
          Salve conversas, sincronize histórico e personalize sua experiência
          com IA.
        </Description>

        <Features>
          <Feature>
            <FeatureCheck>
              <CheckIcon />
            </FeatureCheck>
            Histórico salvo
          </Feature>

          <Feature>
            <FeatureCheck>
              <CheckIcon />
            </FeatureCheck>
            Multi-dispositivo
          </Feature>

          <Feature>
            <FeatureCheck>
              <CheckIcon />
            </FeatureCheck>
            Personalizado
          </Feature>
        </Features>

        <Separator>
          <SeparatorLine />
          <SeparatorLabel>continuar com</SeparatorLabel>
          <SeparatorLine />
        </Separator>

        <Actions>
          <GoogleButton type="button" onClick={handleGoogleLogin}>
            <GoogleIcon />
            Entrar com Google
          </GoogleButton>

          <GuestButton type="button" onClick={handleGuestAccess}>
            <GuestIcon />
            Continuar como visitante
          </GuestButton>
        </Actions>

        <FooterText>
          Ao continuar, você concorda com os{" "}
          <FooterLink href="#">Termos de Uso</FooterLink> e{" "}
          <FooterLink href="#">Política de Privacidade</FooterLink>.
        </FooterText>
      </Card>
    </Container>
  );
}

function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path
        d="M1.5 4L3 5.5L6.5 2"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function GuestIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle
        cx="8"
        cy="5.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M2.5 13.5C2.5 11.015 5.015 9 8 9s5.5 2.015 5.5 4.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}