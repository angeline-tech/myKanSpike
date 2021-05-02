import { Card } from "antd"
import styled from "styled-components"
import { Droppable, Draggable } from 'react-beautiful-dnd';
import KanbanCard from "./card"
import {colours} from '../../common/colours';

const ColumnRoot = styled(Card)`
user-select: none;
flex: 1;
margin: 0.5rem;
display: flex;
flex-direction: column;
// To force each flex item to have equal width
// even if they have long texts with no spaces etc.
min-width: 0;
> .ant-card-body {
  overflow: hidden;
  height: 100%;
  padding: 0;
}
`;

const KanbanColumn = (props) => {


const DroppableRoot = styled.div`
  height: 100%;
  overflow-y: auto;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? colours.primary[2] : colours.primary[1]};
`;

    return(
        <ColumnRoot
        title={props.status}>
            <Droppable droppableId={props.status}>
        {(provided, snapshot) => (
          <DroppableRoot
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.cards.map((item, index) => {
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