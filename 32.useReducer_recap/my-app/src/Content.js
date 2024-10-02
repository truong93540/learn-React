import { memo } from "react"

function Content( {onIcrease} ) {

    console.log('Re-render')

    return (
        <>
            <h2>HELLO ANH EM</h2>
            <button onClick={onIcrease}>Click me!</button>
        </>
    )
}

export default memo(Content)