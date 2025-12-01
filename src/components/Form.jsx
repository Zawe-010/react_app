import { useState } from "react";

function Form(){
    const [name, setName]=useState("")
    const [phone, setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [isAdult,setIsAdult]=useState(false)

    function handleSubmit(e){
        e.preventDefault();

        if (name.length < 3 || name.length > 50) {
            alert("Name must be between 3 and 50 characters");
            return;
        }

        const phonePattern = /^(?:\+254|0)?7\d{8}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number");
            return;
        }

        // Email validation
        if (!email) {
            alert("Email cannot be empty");
            return;
        }

        // Simple email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        console.log("Form Data submitted successfully")
        alert("Form submitted successfully!");
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input>
            </div>

            <h1>{name}</h1>

            <div>
                <label>Phone</label>
                <input type="tel" onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
            </div>

            <h1>{phone}</h1>

            <div>
                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>

            <h1>{email}</h1>

            <div>
                <label>Are you an adult?</label>
                <input type="checkbox" checked={isAdult} onChange={(e)=>setIsAdult(e.target.checked)}></input>
            </div>

            <h1>Adult Status: {isAdult? "I am an adult." : "I am not an adult."}</h1>

            <button type="submit">Submit</button>


        </form>
        </>
    )
}
export default Form;
