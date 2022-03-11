import React, {useState} from 'react'

const Form = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfrim] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmitForm =(e)=>{
        e.preventDefault();
        const newForm = {firstname, lastname, email, password, confirm};
        console.log(newForm)
        setIsSubmitted(true)
    }

    const formMessage = () => {
        if( isSubmitted ) {
	    return "Form Submitted";
	} else {
	    return "Welcome";
	}
    };

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmitForm}>
            <h2>{ formMessage() }</h2>
            <div>
                <label>First Name : </label>
                <input type="text" name="firstname" onChange={(e)=>setFirstname(e.target.value)}/>
                {
                    firstname.length<3 && firstname.length>0?
                        <p>First Name Must Be Atleast 2 Characters</p>:
                        ""
                }
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" name="lastname" onChange={(e)=>setLastname(e.target.value)}/>
                {
                    lastname.length<3 && lastname.length>0?
                        <p>Last Name Must Be Atleast 2 Characters</p>:
                        ""
                }
            </div>
            <div>
                <label>Email : </label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                {
                    email.length<5 && email.length>0 ?
                        <p>Email Must Be Atleast 5 Characters</p>:
                        ""
                }
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                {
                    password.length<8 && password.length>0?
                        <p>Password Must Be Atleast 8 Characters</p>:
                        ""
                }
            </div>
            <div>
                <label>Confrim Password: : </label>
                <input type="password" name="confrim" onChange={(e)=>setConfrim(e.target.value)}/>
                {
                    password !== confirm && confirm.length>0?
                        <p>Passwords Much Match</p>:
                        ""
                }
            </div>
            <button>Submit</button>
        </form>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email : {email}</p>
        <p>Password: {password}</p>
        <p>Confrim Password: {confirm}</p>
    </div>

  )
}

export default Form