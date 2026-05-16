
import {
  Dot,
  DotsWrapper,
  LoadingText,
  TypingContainer,
} from "./styles";

export function TypingDots() {
  return (
    <TypingContainer>
      <LoadingText>
        DevCore AI está pensando
      </LoadingText>

      <DotsWrapper>
        <Dot />
        <Dot />
        <Dot />
      </DotsWrapper>
    </TypingContainer>
  );
}