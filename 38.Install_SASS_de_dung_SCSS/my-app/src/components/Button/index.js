import clsx from 'clsx'
import style from './Button.module.scss'

// classnames
// clsx

function Button({ primary, disabled }) {
    const classes = clsx(style.btn, {
        [style.primary]: primary,
        'd-flex': false,
        [style.disabled]: disabled
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