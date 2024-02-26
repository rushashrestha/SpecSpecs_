import { useState } from "react";
import LoginInput from "./LoginInput";


const Login = (props) => {
 
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
 
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <div className="header">
           
            <div className="text">Sign In</div>
            <div className="underline"></div>
          </div>
        
        {inputs.map((input) => (
          <LoginInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            />
        ))}
        <div className="submit">
        <button type="submit">Sign In</button>
        </div>
        <div className="account">
        <p>Don't have an account?</p><button onClick={() => props.onFormSwitch('App')}> Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;