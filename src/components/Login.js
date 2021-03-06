import PopupWithForm from './PopupWithForm'
import {Link} from 'react-router-dom'



function Login(props) {

  const handleEmailChange= (e)=> {
    props.setUserEmail(e.target.value)
}

const handlePasswordChange= (e)=> {
    props.setUserPassword(e.target.value)
}
  
  return (
    <>
    <PopupWithForm
      name='login'
      title='Log in'
      isOpen={true}
      overlay = {false}
      titleCentered = {true}
      closeButton = {false}
      onClose={props.onClose}
      onSubmit={props.handleLoginSubmit}
    >
          <input type="text" 
          placeholder="Email" 
          id="email-input" 
          className="popup__field popup__field_login" 
          name="name" 
          value = {props.userEmail} 
          required minLength={2} 
          maxLength={40} 
          onChange={handleEmailChange}
/>
          <input type="password" 
          placeholder="Password" 
          id="password-input" 
          className="popup__field popup__field_login" 
          name="about" 
          value = {props.userPassword} 
          required minLength={2} 
          maxLength={200}
          onChange={handlePasswordChange}
/>
        <input
          className="popup__save popup__save_login"
          aria-label="Log in"
          defaultValue="Log in"
          onClick={props.onSubmit}
      />
      <Link className='popup__link' to='/signup'>
          Not a member yet? Sign up here!
        </Link>
    </PopupWithForm>
    
  </>
   
  )
}

export default Login;