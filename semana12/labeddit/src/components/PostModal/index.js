import React from "react";
import Post from "../../pages/Post";
import Modal from "react-modal";
import "./modalStyles.css";
import { Close, Button } from "./styles";

Modal.setAppElement("#root");

function PostModal({ selectedPost, onClose }) {
  return (
    <Modal className="modal" isOpen={!!selectedPost} onRequestClose={onClose}>
      <Button onClick={onClose}>
        <Close />
      </Button>
      <Post id={selectedPost} showComments={false} />
    </Modal>
  );
}

export default PostModal;
