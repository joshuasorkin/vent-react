import {useState} from 'react';
import {firebase} from '../../firebase';
import ErrorLabel from '../ErrorLabel/ErrorLabel';
import InputItem from '../InputItem/InputItem';
import './style.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default function RegistrationForm(){
    const initialInputState = '';

    const [userName,setUserName] = useState(initialInputState);
    const [email,setEmail] = useState(initialInputState);
    const [password,setPassword] = useState(initialInputState);
    const [phoneNumber,setPhoneNumber] = useState(initialInputState);
    const [confirmPassword,setConfirmPassword] = useState(initialInputState);
    const [passwordsMatch,setPasswordsMatch] = useState(false);
    const [errorText,setErrorText] = useState('');

    function handleInputChange(e){
        const {id, value} = e.target;
        switch(id){
            case "userName":
                setUserName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phoneNumber":
                setPhoneNumber(value);
                checkForExistingPhoneNumber(value);
                break;
            case "password":
                setPassword(value);
                validatePassword(value,confirmPassword);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                validatePassword(password,value);
                break;
            default:
                console.log(`No handler specified for input ${id}`);
        }

    }

    function checkForExistingPhoneNumber(phoneNumber_arg){
        setErrorText('phone number checked')
    }

    //using passed-in args here because otherwise
    //it will run with password and confirmPassword as they were
    //before the state change
    function validatePassword(password_arg,confirmPassword_arg){
        let result=password_arg === confirmPassword_arg;
        setPasswordsMatch(result);
        if(result){
            setErrorText('');
        }
        else{
            setErrorText(`Passwords don't match`);
        }
    }

    function handleSubmit(e){
        if (passwordsMatch){
            createUserWithEmailAndPassword(firebase.auth,email,password)
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => {
                setErrorText(err.message);
            });
        }
        else{
            setErrorText(`passwords '${password}' and '${confirmPassword}' don't match, submission canceled`);
            return;
        }
        setUserName('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
        setConfirmPassword('');
    }

    return(
        <div className="form">
            <div className="form-body">
                <InputItem 
                    inputName="userName"
                    labelText="Username"
                    type="text"
                    handleInputChange={handleInputChange}
                    value={userName}
                />
                <InputItem
                    inputName="email"
                    labelText="Email"
                    type="text"
                    handleInputChange={handleInputChange}
                    value={email}
                />
                <InputItem 
                    inputName="phoneNumber"
                    labelText="Phone Number"
                    type="text"
                    handleInputChange={handleInputChange}
                    value={phoneNumber}
                />
                <InputItem
                    inputName="password"
                    labelText="Password"
                    type="password"
                    handleInputChange={handleInputChange}
                    value={password}
                />
                <InputItem
                    inputName="confirmPassword"
                    labelText="Confirm Password"
                    type="password"
                    handleInputChange={handleInputChange}
                    value={confirmPassword}
                />
                <ErrorLabel 
                    errorText = {errorText}
                />
            </div>
            <div className="footer">
                <button className="btn btn-primary" onClick={handleSubmit} type="submit">Register</button>
            </div>
        </div>
    );
}