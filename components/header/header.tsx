import styles from "./header.module.scss";
import BasicIcon from "../basicIcon/basicIcon";

const Header = () => {
  return (
    <>
      <header className={styles.header + " glassmorphism"}>
        <div>
          <BasicIcon name="burger-menu" />
          <a href="#">
            <img src="#" alt="Logo Saline" />
          </a>
        </div>

        <div></div>

        <a href="" className="btn btn-purple-solid-intense">
          <BasicIcon name="profile" />
          Mon profil
        </a>
      </header>
    </>
  );
};

export default Header;
