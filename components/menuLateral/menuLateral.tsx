import styles from './menuLateral.module.scss'

const Header = () => {
    return (
        <>
            <aside className={styles.menuLat}>
                <ul className="menu glassmorphism border">
                    <li>
                        <a href="/" className="hover-effect">Academy</a>
                    </li>
                    <li>
                        <a href="/quick-notes" className="hover-effect">Quick notes</a>
                    </li>
                    <li>
                        <a href="/challenges" className="hover-effect">Challenges</a>
                    </li>
                    <li>
                        <a href="/forum" className="hover-effect">Forum</a>
                    </li>
                </ul>
                <div className="footer">
                    <div className="liens">
                        <a href="/offres" className="hover-effect">Offres</a>
                        <a href="/contact" className="hover-effect">Nous contacter</a>
                        <a href="/mentions-legales" className="hover-effect">Mentions légales</a>
                        <a href="/conditions_generales" className="hover-effect">Conditions générales</a>
                    </div>
                    <div className="reseaux">
                        <a href="" target="_blank" rel="next">
                            <span className="ico-tiktok"/>
                        </a>
                        <a href="" target="_blank" rel="next">
                            <span className="ico-youtube"/>
                        </a>
                        <a href="" target="_blank" rel="next">
                            <span className="ico-twitter"/>
                        </a>
                        <a href="" target="_blank" rel="next">
                            <span className="ico-instagram"/>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Header;