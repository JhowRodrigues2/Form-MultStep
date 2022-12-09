import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import "./Steps.css";
import { FiSend } from "react-icons/fi";
interface StepProps {
  currentStep: number;
}
const Steps = ({ currentStep }: StepProps) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Idenficação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
