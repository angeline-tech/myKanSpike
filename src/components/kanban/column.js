import { Container, Button, Segment } from "semantic-ui-react"
import styled from "styled-components"
import { Droppable, Draggable } from 'react-beautiful-dnd';
import KanbanCard from "./card"
import {colours} from '../../common/colours';

const ColumnRoot = styled(Container)`
user-select: none;
flex: 1;
margin: 0.5rem;
display: flex;
flex-direction: column;
padding:10px;
// To force each flex item to have equal width
// even if they have long texts with no spaces etc.
min-width: 0;
> .ui.container.body {
  overflow: hidden;
  height: 100%;
  padding: 0;
}
`;

const DroppableRoot = styled.div`
  height: 90%;
  overflow-y: auto;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? colours.primary[2] : colours.primary[1]};
`;

const KanbanColumn = ({status,cards, onClickAdd}) => {
    return(
        <ColumnRoot
        key={status}
        extra={
          onClickAdd && (
            <Button type="primary" onClick={onClickAdd}>
              Add
            </Button>
          )}
        >

          <Segment>{status}</Segment>
            <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <DroppableRoot
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {cards.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      key={item.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <KanbanCard
                        item={item}
                        status={item.status}
                        isdragging={snapshot.isDragging.valueOf()}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </DroppableRoot>
        )}
      </Droppable>
        </ColumnRoot>
    )
}

export default KanbanColumn