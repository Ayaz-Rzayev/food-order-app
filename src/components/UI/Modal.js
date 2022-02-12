import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.querySelector("#overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.querySelector("#overlays")
      )}
    </Fragment>
  );
};

export default Modal;
