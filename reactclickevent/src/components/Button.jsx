function Button(){
    
    // let count = 0;

    // const handleclick = (name) => {
    //     if(count < 3){
    //         count++
    //         console.log(`${name} You Clicked Me ${count} time(s)`)
    //     }else{
    //         console.log(`${name} Stop Clicking Me`)
    //     }
    // }

    // return(<button onClick={() => handleclick('Ahmad')}>Click Me</button>);
    
    const handleclick = (e) => e.target.textContent = "Clicked";
    return (<button onDoubleClick={(e) => handleclick(e)}>Click Me</button>)
}
export default Button