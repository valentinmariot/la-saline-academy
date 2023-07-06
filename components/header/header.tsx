import styles from './header.module.scss'

const Header = () => {
  return (
    <>
      <header className={styles.header + ' glassmorphism'}>
          <div>
              <span className="ico-burger-menu"/>
              <a href="/">
                  <img src="" alt="Logo Saline"/>
              </a>
          </div>

          <div>

          </div>

          <a href="" className="btn btn-purple-solid-intense">
              <span className="ico-profile"/>
              Mon profil
          </a>
      </header>
    </>
  );
};

export default Header;
