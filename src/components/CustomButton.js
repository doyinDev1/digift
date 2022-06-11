// import {Button} from 'react-bootstrap'

const CustomButton = ({onClick, disabled, type, customButtonStyling, titleStyles, title}) => {
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        style={{...customButtonStyling, textAlign: "center", borderRadius: "5px"}}
    >
        <span style={titleStyles}>{title}</span>
    </button>
  )
}

export default CustomButton