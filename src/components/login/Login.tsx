import './login.css';
// import './loginResponsivo.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import logo from '../../assets/conmac.jpg';

const Login = () => {
  return (
    <div className='wrapper'>
      <form className='form'>
        <img src={logo} alt="Conmac" />

        <div className='input-box'>
          <input 
            type="text"
            placeholder='Username'
            required
          />
          <FaUser className='icon'/>
        </div>

        <div className='input-box'>
          <input 
            type='password'
            placeholder='Password'
            required
          />
          <FaLock className='icon'/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login