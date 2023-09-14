import React from "react";
import ReactDOM from "react-dom";
import { Substance } from "../../types";

interface SubstanceModalProps {
  substance: Substance | null;
  onClose: () => void;
}

const SubstanceModal: React.FC<SubstanceModalProps> = ({ substance, onClose }) => {
  // Render the modal content here

  return (
    <div></div>
  );
};

export default SubstanceModal;
