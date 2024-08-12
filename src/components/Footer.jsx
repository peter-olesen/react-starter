import footerStyles from '../styles/Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={footerStyles.footerStyle}>
            <p className={footerStyles.footStuckinToilet}>I'm a paragraph inside the footer</p>
        </footer>
    )
}