function Button(props){
    // function
    const greet = (word)=>{
        console.log(word) 
    }

    return(
        <>
        <button onClick={()=>greet("Good Evening")}>{props.title}</button>
        </>
    )
}

export default Button