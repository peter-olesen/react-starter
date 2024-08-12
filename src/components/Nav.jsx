import style from '../styles/Nav.module.scss'

export const Nav = () => {
    return (
    <nav>
        <ul className={style.navbarStyle}>
            <li><a className={style.navLink} href="#">Front</a></li>
            <li><a className={style.navLink} href="#">About</a></li>
            <li><a className={style.navLink} href="#">Contact</a></li>
        </ul>
    </nav>
    )
}