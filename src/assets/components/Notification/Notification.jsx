import s from "./Notification.module.css"

const Notification = ({ message }) => (
  <div>
    <p className={s.container}>{message}</p>
  </div>
);

export default Notification;