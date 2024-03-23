import { FaEye } from "react-icons/fa6";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.appName}>Contacts Viewer</span>
      <FaEye size={"2rem"} color="white" />
    </header>
  );
}
