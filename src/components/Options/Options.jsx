import css from "./Options.module.css";
import clsx from "clsx";
import {GOOD, NEUTRAL, BAD} from "../../consts";

const buttonTypes = [GOOD, NEUTRAL, BAD];

const Options = ({updateFeedback, handleResetFeedback, total}) => {
  return (
    <ul className={css.list}>
      {buttonTypes.map((item) => (
        <li key={item} className={css.listItem}>
          <button onClick={() => updateFeedback(item)}>{item}</button>
        </li>
      ))}
      {!!total && (
        <li className={clsx(css.listItem, css.resetButton)}>
          <button onClick={() => handleResetFeedback()}>reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
