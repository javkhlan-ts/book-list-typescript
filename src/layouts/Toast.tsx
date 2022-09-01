import ReactDOM from "react-dom";
import { ToastState } from "../store/toastSlice";
import style from "./Toast.module.css";

interface ToastProps {
  toastState: ToastState;
}

const Toast: React.FC<ToastProps> = (props) => {
  let bgColor;

  switch (props.toastState.status) {
    case "success":
      bgColor = "#668FB3";
      break;
    case "warning":
      bgColor = "#F67802";
      break;
    case "error":
      bgColor = "#D0312D";
      break;
    default:
      bgColor = "#668FB3";
      break;
  }

  if (!props.toastState.show) return null;

  return ReactDOM.createPortal(
    <div
      className={style.toast__container}
      style={{ backgroundColor: bgColor }}
    >
      <p>{props.toastState.text}</p>
    </div>,
    document.getElementById("portal")!
  );
};

export default Toast;
