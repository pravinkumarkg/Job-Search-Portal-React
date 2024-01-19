const Image = ({imagePath, imageAlt, Width, Height}) => {
    return(
        <img src={imagePath} alt={imageAlt} width={Width} height={Height} />
    )
}

export default Image;