import { Modal, Form, Button } from "semantic-ui-react";
import {useState} from 'react';

const FormModal = ({ onClose, onOpen, visible, onOk, initialValues }) => {
    const [formValues, setformValues] = useState(initialValues)
    
    const onFieldChange = (event) => {
        const field = event.target.id
        const newValue = event.target.value
        const newValues = {...formValues}
        newValues[field] = newValue
        setformValues(newValues)
    }

    const resetFields = () => {
      setformValues({title:"",description:""})
    }

  return (
    <Modal onClose={onClose} onOpen={onOpen} open={visible}>
      <Modal.Header>Add a To-do</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input id="title" placeholder="Title" value={formValues["title"]} onChange={(event)=>{onFieldChange(event)}}/>
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input id="description" placeholder="Description" value={formValues["description"]} onChange={(event)=>onFieldChange(event)}/>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button danger onClick={onClose}>
          Cancel
        </Button>
        <Button
          content="Add Another"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {onOk(formValues); resetFields() }}
          type="submit"
          primary
        />
        <Button
          content="Done"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {onOk(formValues); onClose() }}
          type="submit"
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default FormModal;
