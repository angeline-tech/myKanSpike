import styled from 'styled-components';
import KanBanBoard from '../components/kanban/board'
import { Container, Header} from 'semantic-ui-react'

const StyledContainer = styled(Container)`
padding: 50px;
height:95vh
`;

function App() {
  return (
    <StyledContainer>
      <Header>MyKan</Header>
      <KanBanBoard></KanBanBoard>
    </StyledContainer>
  );
}

export default App;
