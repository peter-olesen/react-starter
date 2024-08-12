import { Nav } from './Nav'
import headerStyles from '../styles/Header.module.scss'

export const Header = () => {
    return (
        <header className={headerStyles.headerStyle}>
            <h1 className={headerStyles.oppaGangnamStyle}>React Starter</h1>
            <Nav />
        </header>
    )
}

