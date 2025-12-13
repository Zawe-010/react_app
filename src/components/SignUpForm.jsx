import { useState } from "react";

function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            fetch('url', {
                method: "POST",
                headers: {
                    "Authorization": "Bearer" +localStorage.getItem("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Server Response", data)
                    setFormData({
                        name: '',
                        email: '',
                        password: ''
                    })
                })
        } catch (error) {
            console.error("Error", error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label><br />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label><br />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label><br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <br />
                <input type="submit" />
            </form>
        </>
    );

}

export default SignUpForm;
