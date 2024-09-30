
import { Link } from "react-router-dom"
import axios from "axios"
import { useForm } from "react-hook-form"
import {useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:6820/register', data)
    .then(response => {
      console.log(response.data)
      navigate('/login')
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };
  return (
    <div>
<form className="form col-sm-6 col-md-4 col-lg-3 col-12 mb-4">
  <p className="title">Register </p>
  <p className="message">Signup now and get full access to our app. </p>
  <div className="flex">
    <label>
      <input required placeholder type="text" className="input" />
      <span>Firstname</span>
    </label>
    <label>
      <input required placeholder type="text" className="input" />
      <span>Lastname</span>
    </label>
  </div>  
  <label>
    <input required placeholder type="email" className="input" />
    <span>Email</span>
  </label> 
  <label>
    <input required placeholder type="password" className="input" />
    <span>Password</span>
  </label>
  <label>
    <input required placeholder type="password" className="input" />
    <span>Confirm password</span>
  </label>
  <Link to={"/login"}>  <button className="submit">Submit</button></Link>

  <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>


    </div>
  )
}

export default Register;