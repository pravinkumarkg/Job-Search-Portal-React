const MyButton = ({children, onClick, className, buttonStyleType}) => {

    const buttonStyle = {
        common: {
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: '#ffffff',
            borderColor: 'transparent'
        },
        primary: {
            borderColor: '#000000'
        },
        secondary: {
            backgroundColor: '#feb27b'
        },
        teritiary: {
            backgroundColor: '#2cc369'
        }
    }

    const mergedButtonStyles = {...buttonStyle.common, ...buttonStyle[buttonStyleType]}

    return (
        <button style={mergedButtonStyles} class={className} onClick={onClick}>{children}</button>
    )
}

export default MyButton;
