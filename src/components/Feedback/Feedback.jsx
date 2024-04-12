import css from "./Feedback.module.css";

const Feedback = ({good, neutral, bad, total, positive}) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <span>Good:</span> {good}
      </li>
      <li className={css.listItem}>
        <span>Neutral:</span> {neutral}
      </li>
      <li className={css.listItem}>
        <span>Bad:</span>
        {bad}
      </li>
      <li className={css.listItem}>
        <span>Total:</span> {total}
      </li>
      <li className={css.listItem}>
        <span>Positive:</span> {positive}%
      </li>
    </ul>
  );
};

export default Feedback;
