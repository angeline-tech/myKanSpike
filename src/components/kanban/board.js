import _ from "lodash";
import styled from "styled-components";
import KanbanColumn from "./column";
import { initalBoardState } from "../../common/defaultData";
import { DragDropContext } from "react-beautiful-dnd";
import React, { useState } from "react";
import produce from "immer";
import {colours} from '../../common/colours';

// const generateId = () => Date.now().toString();

const BoardRoot = styled.div`
  min-height: 0;
  height: 100%;
  min-width: 800px;
  max-width: 1400px;
  margin: auto;
  background: green;
`;

const BoardContent = styled.div`
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  background-color: ${colours.primary[0]};
`;

const KanbanBoard = () => {
  const [itemsByStatus, setItemsByStatus] = useState(initalBoardState);

  const handleDragEnd = ({ source, destination }) => {
    setItemsByStatus((current) =>
      produce(current, (draft) => {
        // dropped outside the list
        if (!destination) {
          return;
        }
        const [removed] = draft[source.droppableId].cards.splice(
          source.index,
          1
        );
        draft[destination.droppableId].cards.splice(
          destination.index,
          0,
          removed
        );
      })
    );
  };

  const renderColumns = () => {
    return _.values(itemsByStatus).map((colProps) => {
      return (
        <KanbanColumn
          key={colProps.status}
          {...colProps}
          // onClickAdd={
          //   colProps.status === "Backlog"
          //     ? () => openTaskItemModal(null)
          //     : undefined
          // }
          // onEdit={openTaskItemModal}
          // onDelete={handleDelete}
        ></KanbanColumn>
      );
    });
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <BoardRoot>
          <BoardContent>{renderColumns()}</BoardContent>
        </BoardRoot>
      </DragDropContext>
    </>
  );
};

export default KanbanBoard;
