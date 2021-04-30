
import { Card } from 'antd';
import styled from 'styled-components';

//this isn't working
const StyledCard = styled(Card)`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => (props.isDragging ? '#fafafa' : '#fff')};
`;

const KanbanCard = (props) => {



    return(
        <StyledCard
        isDragging={false}>
            {props.description}
        </StyledCard>
    )
}

export default KanbanCard