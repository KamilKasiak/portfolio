import "./AnimatedLetters.scss"

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((element, index) => (
                    <span key={element + index} className={`${letterClass} _${index + idx}`}>
                        {element}
                    </span>
                ))
                
            }
        </span>
    )
}
export default AnimatedLetters