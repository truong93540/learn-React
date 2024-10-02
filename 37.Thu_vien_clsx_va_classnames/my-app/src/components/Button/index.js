import clsx from 'clsx'
import style from './Button.module.css'

// classnames
// clsx

function Button({ primary }) {
    const classes = clsx(style.btn, {
        [style.primary]: primary,
        'd-flex': false
    })

    return (
        <>
            <button className={classes} >
                Click me!
            </button>
        </>
    )
}

export default Button