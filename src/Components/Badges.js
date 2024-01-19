const Badges = ({color, children, className}) => {

    const badgeStyles = {
        backgroundColor: color,
        color: '#000',
        borderRadius: '12px',
        padding: '3px 25px',
        fontSize: '14px'
    }

    return (
        <span class={className} style={badgeStyles}>{children}</span>
    )
}

export default Badges;