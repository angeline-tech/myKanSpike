import _ from "lodash";
import styled from "styled-components"
import KanbanColumn from "./column"
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import produce from 'immer';

const BoardRoot = styled.div`
    min-height: 0;
    height: 100%;
    min-width: 800px;
    max-width: 1400px;
    margin: auto;
`;

const BoardContent = styled.div`
height: 100%;
padding: 0.5rem;
display: flex;
justify-content: space-around;
`;


const card1 = {id:"1", title:"Card 1",description:"This is my first card"}
const card2 = {id:"2", title:"Card 2",description:"This is my second card"}
const card3 = {id:"3", title:"Card 3",description:"This is my third card"}
const card4 = {id:"4", title:"Card 4",description:"This is my fourth card"}
const card5 = {id:"5", title:"Card 5",description:"This is my fifth card"}


 const initalBoardState = {
    "Backlog":{status:"Backlog",cards:[card1,card2,card3,card4,card5]},
    "Today":{status:"Today",cards:[]},
    "Complete":{status:"Complete",cards:[]},
    "Archive":{status:"Archive",cards:[]},
}


const KanbanBoard = () => {


const [itemsByStatus, setItemsByStatus] = useState(initalBoardState) 

const handleDragEnd = ({
    source,
    destination,
  }) => {
    setItemsByStatus((current) =>
      produce(current, (draft) => {
        // dropped outside the list
        if (!destination) {
          return;
        }
        const [removed] = draft[
          source.droppableId 
        ].cards.splice(source.index, 1);
        draft[destination.droppableId].cards.splice(
          destination.index,
          0,
          removed
        );
      })
    );
  };


    return(
        <>
        <DragDropContext onDragEnd={handleDragEnd}>
            <BoardRoot>
                <BoardContent>
                    {_.values(itemsByStatus).map(colProps => {
                        return(
                            <KanbanColumn {...colProps}></KanbanColumn>
                        )
                    })}
                </BoardContent>
            </BoardRoot>
        </DragDropContext>
        </>
    )
}

export default KanbanBoard