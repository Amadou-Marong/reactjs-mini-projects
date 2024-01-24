function Image(){
    const imageUrl = './src/assets/shirt-logo.jpg'

    const handleclick = (e) => e.target.style.display = 'none'

    return(<img onClick={(e) => handleclick(e)} src={imageUrl}></img>);
}
export default Image