import style from './Paragraph.module.css'

function Heading() {
    return(
        <p className={style.paragraph}>
            Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
        </p>
    )
}

export default Heading