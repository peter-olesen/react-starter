import { Nav } from './Nav'
import style from '../styles/Header.module.scss'

export const Header = () => {
    return (
        <header className={style.headerStyle}>
            <h1 className={style.oppaGangnamStyle}>React Starter</h1>
            <Nav />
        </header>
    )
}

