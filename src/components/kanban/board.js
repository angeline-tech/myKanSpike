import styled from "styled-components"
import KanbanColumn from "./column"

const BoardRoot = styled.div`
    min-height: 0;
    height: 100%;
    min-width: 800px;
    max-width: 1400px;
    margin: auto;
    background: pink;
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
                KanbanBoard
            </BoardContent>
        </BoardRoot>
    )
}

export default KanbanBoard