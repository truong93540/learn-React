import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <p className={context.theme} >
            My mother is a person I admire most. She devoted a lot of time and energy to the upbringing of my two brothers and 1. Despite working hard, she always made time to teach us many useful things which are necessary and important in our later lives. Moreover, she is a good role model for me to follow.
        </p>
    )
}

export default Paragraph