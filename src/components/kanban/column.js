import { Card } from "antd"
import styled from "styled-components"
import KanbanCard from "./card"

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

const KanbanColumn = () => {
    const card1 = {description:"Card 1", isDragging:true}
    const card2 = {description:"Card 2", isDragging:false}
    const card3 = {description:"Card 3", isDragging:true}
    const cards = [card1,card2,card3]
    return(
        <ColumnRoot>
            {cards.map((card)=>(
                <KanbanCard {...card}/> 
            ))}
        </ColumnRoot>
    )
}

export default KanbanColumn