import { memo } from "react"

function Content( {count} ) {

    console.log('Re-render')

    return (
        <h2>HELLO ANH EM {count}</h2>
    )
}

export default memo(Content)