import { ButtonComponent } from './Button'
import { Greeting } from './Greeting'
import mainStyles from '../styles/Main.module.scss'
import buttonStyles from '../styles/Button.module.scss'

export const Main = () => {
    return (
        <main className={mainStyles.mainStyle}>

            {/* Greeting */}
            <Greeting name="Peter" className={mainStyles.Greeting} />
            <Greeting name="Alice" className={mainStyles.Greeting} />
            <Greeting name="Adam" className={mainStyles.Greeting} />

            {/* Hello */}
            <p className={mainStyles.mainParagraphStyle}>Hello from Main</p>

            {/* Button */}
            <ButtonComponent className={buttonStyles.ButtonComponent} buttonText="Button" />
            <ButtonComponent buttonText="Don't click" />
            <ButtonComponent buttonText="Click me!" onClick={() => alert('Button clicked!')} />
            <ButtonComponent buttonText="Not a button" />
            <ButtonComponent buttonText="Disabled Button" disabled />
        </main>
    )
}