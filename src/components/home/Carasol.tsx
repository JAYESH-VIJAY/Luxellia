import { useReducer } from "react";

import styles from "./Carosol.module.scss";
import Button from "./../universal/Button";

const SliderImage = ["/Images/Slider_1.png", "/Images/Slider_2.png"];
const SliderImageMedium = [
  "/Images/Slider_1_md.png",
  "/Images/Slider_2_md.png",
];
interface State {
  index: number;
  visibility: boolean;
}
const initialState: State = {
  index: 0,
  visibility: false,
};
interface IndexAction {
  type: "IncIndex" | "DecIndex";
  payload: number;
}
interface VisibilityAction {
  type: "setVisibility" | "removeVisibility";
}
type Action = IndexAction | VisibilityAction;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "IncIndex":
      if (state.index != SliderImage.length - 1)
        return { ...state, index: state.index + action.payload };
      else return { ...state, index: 0 };
    case "DecIndex":
      if (state.index != 0)
        return { ...state, index: state.index - action.payload };
      else return { ...state, index: SliderImage.length - 1 };
    case "setVisibility":
      return { ...state, visibility: true };
    case "removeVisibility":
      return { ...state, visibility: false };
    default:
      return state;
  }
};

function Carasol() {
  const [{ index, visibility }, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={styles.container}
      onMouseOver={() => dispatch({ type: "setVisibility" })}
      onMouseOut={() => dispatch({ type: "removeVisibility" })}
    >
      <div>
        {index === 0 && (
          <div className={styles.text}>
            <span>Get up to 80%</span>
            <h2>
              Explore Irresistible <br /> Women's Fashion.
            </h2>
            <Button>shop now</Button>
          </div>
        )}
        {index === 1 && (
          <div className={styles.text}>
            <span>Get up to 50%</span>
            <h2>
              Revamp Your Style <br />
              with Men's Fashion.
            </h2>
            <Button>shop now</Button>
          </div>
        )}

        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={SliderImageMedium[index]}
            className={styles.slider_image}
          />
          <img
            src={SliderImage[index]}
            className={styles.slider_image}
            alt="Luxellia"
          />
        </picture>
      </div>
      {visibility && (
        <div className={styles.mark_container}>
          <span
            className={styles.prev}
            onClick={() => dispatch({ type: "DecIndex", payload: 1 })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${styles.prevmark}  w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span
            className={styles.next}
            onClick={() => dispatch({ type: "IncIndex", payload: 1 })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${styles.nextmark} w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}

export default Carasol;
