import css from "./Notifications.module.css";
const Empty = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>No feedback yet</p>
    </div>
  );
};

export default Empty;
