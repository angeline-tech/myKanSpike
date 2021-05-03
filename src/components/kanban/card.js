
import { Card } from 'semantic-ui-react';
import styled from "styled-components"
import {colours} from '../../common/colours';

const StyledCard = styled(Card)`

    background: ${({ isdragging }) =>
    isdragging ? colours.primary[4] : colours.primary[3]} !important;
    width: 90% !important;
    padding: 0px !important;
    margin-left: 10px !important; 
    margin-right: 30px !important; 
    margin-top: 10px !important; 
    margin-bottom: 10px !important; 
`;

const KanbanCard = ( {item,
    status,
    isdragging,
    onEdit,
    onDelete}) => {
    return(
    

        <StyledCard
        isdragging={isdragging}
        id={item.id}>
            <Card.Header> {item.title}</Card.Header>
            <Card.Content>{item.description}</Card.Content>

        </StyledCard>

    )
}

export default KanbanCard