import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => { 
  const { selectedOption, handleClearSelectedOption } = props;
  return (
    <Modal
      className="modal"
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={handleClearSelectedOption}
      closeTimeoutMS={200}
    >
      <h3 className="modal__title"> Selected Option </h3>
        { props.selectedOption && <p className="modal__body"> {props.selectedOption} </p> }
      <button className="button" onClick={handleClearSelectedOption}> Okay </button>
    </Modal>
  );
};

export default OptionModal;
