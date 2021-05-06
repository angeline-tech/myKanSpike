import _ from "lodash";
import styled from "styled-components";
import KanbanColumn from "./column";
import FormModal from "./formModal";
import { initalBoardState } from "../../common/defaultData";
import { DragDropContext } from "react-beautiful-dnd";
import React, { useState, useMemo } from "react";
import produce from "immer";
import {colours} from '../../common/colours';

const generateId = () => Date.now().toString();

const BoardRoot = styled.div`
  min-height: 0;
  height: 100%;
  min-width: 800px;
  max-width: 1400px;
  margin: auto;
  background: ${colours.primary[5]};
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

  const [isModalVisible, setModalVisible ] = useState(false)

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

  const [itemToEdit, setItemToEdit] = useState(null);

  const openModal = (item) => {
    setItemToEdit(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setItemToEdit(null);
    setModalVisible(false);
  };

  const handleDelete = (status,itemToDelete) =>
    setItemsByStatus((current) =>
      produce(current, (draft) => {
        draft[status].cards = draft[status].cards.filter(
          (item) => item.id !== itemToDelete.id
        );
      })
    );

  const initialValues = useMemo(
    () => ({
      title: itemToEdit?.title ?? '',
      description: itemToEdit?.description ?? '',
    }),
    [itemToEdit]
  );

  const renderColumns = () => {
    return _.values(itemsByStatus).map((colProps) => {
      return (
        <KanbanColumn
          key={colProps.status}
          {...colProps}
          onClickAdd={
            colProps.status === "Backlog"
              ? () => openModal(null)
              : undefined
          }
          onEdit={openModal}
          onDelete={handleDelete}
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

      <FormModal
      onClose={closeModal}
      onOpen={openModal}
      visible={isModalVisible}
      onOk={(values) => {
        console.log("Values")
        console.log()
        setItemsByStatus((current) =>
          produce(current, (draft) => {
            if (itemToEdit) {
              console.log("There is an item to edit")
              // Editing existing item
              const draftItem = Object.values(draft)
                .flatMap((items) => items.cards)
                .find((item) => item.id === itemToEdit.id);
              if (draftItem) {
                console.log("Draft Item")
                console.log(draftItem)
                draftItem.title = values.title;
                draftItem.description = values.description;
              }
            } else {
              console.log("creating a new todo")
              // Adding new item as "to do"
              draft["Backlog"].cards.push({
                ...values,
                id: generateId(),
              });
            }
          })
        );
      }}
      initialValues={initialValues}
      />
    </>
  );
};

export default KanbanBoard;
