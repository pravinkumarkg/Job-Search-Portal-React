const Link = ({children, className, onClick}) => {

    const LinkStyle = {
        color: '#043ca7',
        textDecoration: 'none'  
    }

    return (
        <a class={className} style={LinkStyle} href="#" onClick={onClick}>{children}</a>
    )
}

export default Link;