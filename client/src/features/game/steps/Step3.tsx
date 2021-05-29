import styled from "styled-components";
import { theme } from "styles/theme";
import { StepProps, GameState } from "features/game/gameSlice";
import {
  PlayersGrid,
  Player,
  NextButton,
} from "features/game/components/PlayerGrid";

export const Step3 = ({ gameState, broadcast, name }: StepProps) => {
  const [firstPlayer] = gameState.players;
  return (
    <>
      <QuestionNumber>Question: {gameState.scene} / 10</QuestionNumber>
      <PlayerScores gameState={gameState} />
      {firstPlayer && (
        <NextButton
          disabled={firstPlayer.name !== name}
          onClick={() => broadcast("scene:next")}
          autoFocus
        >
          {firstPlayer.name === name
            ? "Next Question"
            : `Waiting for ${firstPlayer.name}`}
        </NextButton>
      )}
    </>
  );
};

export const Step3Spectate = ({ gameState }: StepProps) => {
  return (
    <>
      <QuestionNumber>Question: {gameState.scene} / 10</QuestionNumber>
      <PlayerScores gameState={gameState} />
    </>
  );
};

const PlayerScores = ({ gameState }: { gameState: GameState }) => {
  const players = gameState.players.map((player) => {
    return (
      <PlayerContainer key={player.name}>
        <Player playerName={player.name} />
        <PlayerScore>{player.score}</PlayerScore>
      </PlayerContainer>
    );
  });
  return (
    <>
      <TitleContainer>
        <h2 className="title">Scoreboard</h2>
      </TitleContainer>
      <PlayersContainer singleCol>{players}</PlayersContainer>
    </>
  );
};

const QuestionNumber = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.4;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const TitleContainer = styled.div`
  margin-bottom: ${theme.spacings(5)};
  .title {
    text-align: center;
    margin: 0;
  }
`;

const PlayersContainer = styled(PlayersGrid)`
  margin-bottom: ${theme.spacings(5)};
  max-width: 300px;
  ${theme.breakpoints.desktop} {
    margin-bottom: 0;
    max-width: none;
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${theme.breakpoints.desktop} {
    flex-direction: column-reverse;
  }
`;

const PlayerScore = styled.h2`
  margin: 0;
  transform: translateY(-10px);
  ${theme.breakpoints.desktop} {
    margin-top: auto;
  }
`;
