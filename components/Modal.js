import React from "react";
import Portfolio from "./Portfolio";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function modalOverlay(port) {

currentPortfolio = this.port;

  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
   
       {() => setModalOpen(!modalOpen)}
  
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default modalOverlay;