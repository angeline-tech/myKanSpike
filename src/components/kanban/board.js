import styled from "styled-components"
import KanbanColumn from "./column"
import { TASK_STATUS } from "./../../common/types/kanban"

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

const KanbanBoard = () => {
    return(
        <BoardRoot>
            <BoardContent>
                {Object.keys(TASK_STATUS).map((status)=>(<KanbanColumn></KanbanColumn>)
                )}

            </BoardContent>
        </BoardRoot>
    )
}

export default KanbanBoard