
import { Card, Button, Icon } from 'semantic-ui-react';
import styled from "styled-components"
import {colours} from '../../common/colours';

const StyledCard = styled(Card)`

    background: ${({ isdragging  }) =>
    isdragging ? colours.primary[4] : colours.primary[0]} !important;
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
            {item.description && 
            <Card.Content>{item.description}</Card.Content>
            }
            <Card.Content extra>
        <div >
          <Button icon color='green' size="mini" onClick={()=>onEdit(item)}>
            <Icon name='edit outline' />
          </Button>
          <Button icon color='red' size="mini" onClick={()=>onDelete(status,item)}>
            <Icon name='delete' />
          </Button>
        </div>
      </Card.Content>

        </StyledCard>

    )
}

export default KanbanCard