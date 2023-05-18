import './styled-text.css'

const StyledText = ({text}) => {
    return <p className="styled-text">{text.toUpperCase()}</p>
}

export default StyledText