import navStyles from '../styles/Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={navStyles.navbar}>
            <ul className={navStyles.navbarStyle}>
                <li><a className={navStyles.navLink} href="#">Front</a></li>
                <li><a className={navStyles.navLink} href="#">About</a></li>
                <li><a className={navStyles.navLink} href="#">Contact</a></li>
            </ul>
        </nav>
    )
}