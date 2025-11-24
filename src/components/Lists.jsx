function Lists(){
    const fruits = ["Apples", "Grapes", "Bananas", "Passions"]

    return (
        <>
        <ul>
            {fruits.map((fruit)=><li>{fruit}</li>)}
        </ul>
        </>
    )
}

export default Lists