import { DynamicHeader } from './DynamicHeader'
import { Nav } from './Nav'
import headerStyles from '../styles/Header.module.scss'

export const Header = () => {
    return (
        <header className={headerStyles.headerStyle}>
            <DynamicHeader className={headerStyles.oppaGangnamStyle} headerText="Props er cool" />
            <Nav />
        </header>
    )
}

