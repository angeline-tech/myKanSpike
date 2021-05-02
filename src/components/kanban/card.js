
import { Card } from 'antd';
import styled from 'styled-components';

//this isn't working
const StyledCard = styled(Card)`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => (props.isDragging ? '#fafafa' : '#fff')};
`;

const KanbanCard = ( {item,
    status,
    isDragging,
    onEdit,
    onDelete}) => {
    return(
        <StyledCard
        isDragging={isDragging}
        id={item.id}>
            {item.title}
            {item.description}
        </StyledCard>
    )
}

export default KanbanCard