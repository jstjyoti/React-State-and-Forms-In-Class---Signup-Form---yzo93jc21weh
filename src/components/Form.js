import React, {useState} from "react";

export function Form() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError] = useState("");
  const[message,setMessage] = useState("");

  const handleInput = (e) => {
    setError("");
    setMessage("");
    if(e.target.getAttribute('data-testid') === "name"){
      // console.log(e.target.value)
      // console.log(e.target.name);
      setName(e.target.value);
    } else if (e.target.getAttribute('data-testid') === "email"){
      setEmail(e.target.value);
    } else if (e.target.getAttribute('data-testid') === "gender"){
      setGender(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "phoneNumber") {
      setPhone(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "password") {
      setPassword(e.target.value);
    }

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    let userName = email.slice(0,email.indexOf("@"));
    let splitName = name.split("");
    console.log(splitName);
    let getName = splitName.filter((name) => {
      return(
        !(
          (name<="z" && name>="a") || 
          (name<="Z" && name>="A") ||
          (name>=0 && name<=9) ||
          (name===" ")
        )
      )
    })

    if(name===""|| email ==="" ||phone==="" || password ===""){
      // console.log("All fields are mandatory");
      setError("All fields are mandatory")
    }
    else if(getName.length > 0){
      setError("Message: Name is not alphanumeric");
    }

    else if(email.includes("@")===false){
      setError("Email must contain @");
    }
    else if(!Number(phone)){
      // console.log(phone)
      setError("Phone Number must contain only numbers");
    }
    else if(password.length < 6){
      // console.log(password.length)
      setError("Password must contain atleast 6 letters");
    } else {
      setError("")
      // console.log(userName)
      setMessage("Hello " + userName);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setGender("male");    
    } 
    
  }
  return (
    <div id="main">
      {error ? <h1>{error}</h1> : null}
      {message ? <h1>{message}</h1> : null}
      <form onSubmit={handleSubmit}>
          <br></br>
          <label>Name :</label> <br />
          <br></br>
          <input
            type="text"
            data-testid="name"
            value={name}
            onChange={handleInput}
          />
          <br></br>
          <label>Email :</label> <br />
          
          <input
            type="text"
            data-testid="email"
            value={email}
            onChange={handleInput}
          />
          
          <label>Gender :</label>
          <select data-testid="gender" value={gender} onChange={handleInput}>
            <option>male</option>
            <option>female</option>
            <option>other</option>
          </select>
          
          <label>Phone Number :</label>  <br />  
          <input
            type="text"
            data-testid="phoneNumber"
            value={phone}
            onChange={handleInput}
          />
         
         
          <label>Password :</label><br />
          <input
            type="password"
            data-testid="password"
            value={password}
            onChange={handleInput}
          />
            <button type="submit" data-testid="submit">Submit</button>
          </form> 
          </div>
  );
}

