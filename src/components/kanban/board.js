import styled from "styled-components"
import KanbanColumn from "./column"

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

const card1 = {description:"Card 1", isDragging:true}
const card2 = {description:"Card 2", isDragging:false}
const card3 = {description:"Card 3", isDragging:true}
const cards = [card1,card2,card3]

export const boardState = {
    "Backlog":{status:"Backlog",cards:[card1,card2,card3]},
    "Today":{status:"Today",cards:[card1,card2]},
    "Complete":{status:"Complete",cards:[card3]}
}

const KanbanBoard = () => {
    return(
        <BoardRoot>
            <BoardContent>
                {Object.keys(boardState).map((status)=>{
                    return (    
                        <KanbanColumn {...boardState[status]}></KanbanColumn>
                    )
                }   
                )}

            </BoardContent>
        </BoardRoot>
    )
}

export default KanbanBoard