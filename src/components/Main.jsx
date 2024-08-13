import { ButtonComponent } from './Button'
import { Greeting, NewGreet } from './Greeting'
import mainStyles from '../styles/Main.module.scss'
import buttonStyles from '../styles/Button.module.scss'

export const Main = () => {
    return (
        <main className={mainStyles.mainStyle}>

            {/* Greeting */}
            <Greeting name="Peter" className={mainStyles.Greeting} />
            <Greeting name="Alice" className={mainStyles.Greeting} />
            <Greeting name="Adam" className={mainStyles.Greeting} />
            <NewGreet YourName="Evelina" anyValue="Howdy" />

            {/* Hello */}
            <p className={mainStyles.mainParagraphStyle}>Hello from Main</p>

            {/* Button */}
            <ButtonComponent className={buttonStyles.stdButton} buttonText="Button" />
            <ButtonComponent className={buttonStyles.redButton} buttonText="Don't click" />
            <ButtonComponent className={buttonStyles.stdButton} buttonText="Click me!" onClick={() => alert('Button clicked!')} />
            <ButtonComponent className={buttonStyles.stdButton} buttonText="Not a button" />
            <ButtonComponent id="testid" className={buttonStyles.stdButton} buttonText="Disabled Button" disabled />
        </main>
    )
}