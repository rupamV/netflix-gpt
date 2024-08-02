import React, { useState } from 'react';
import Header from './Header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div> 
      <Header />
      <div>
        <img className='absolute filter brightness-50' 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg" alt='logo'/>
      </div>  
      <form className="absolute w-1/3 bg-black bg-opacity-80 p-12 my-32 mx-auto left-0 right-0 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-6 text-white font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && (
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder=" " 
              className="peer w-full p-3 text-white rounded bg-black bg-opacity-50 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <label className={`absolute left-3 transition-all duration-200 ease-in-out transform origin-top-left ${name ? 'top-0 scale-75 text-white' : 'top-3 scale-100 text-gray-500'}`}>
              Name
            </label>
          </div>
        )}

        <div className="relative mb-4">
          <input 
            type="email" 
            placeholder=" " 
            className="peer w-full p-3 text-white rounded bg-black bg-opacity-50 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <label className={`absolute left-3 transition-all duration-200 ease-in-out transform origin-top-left ${email ? 'top-0 scale-75 text-white' : 'top-3 scale-100 text-gray-500'}`}>
            Email
          </label>
        </div>

        {!isSignInForm && (
          <div className="relative mb-4">
            <input 
              type="tel" 
              placeholder=" " 
              className="peer w-full p-3 text-white rounded bg-black bg-opacity-50 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required 
            />
            <label className={`absolute left-3 transition-all duration-200 ease-in-out transform origin-top-left ${phoneNumber ? 'top-0 scale-75 text-white' : 'top-3 scale-100 text-gray-500'}`}>
              Phone Number
            </label>
          </div>
        )}

        <div className="relative mb-4">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder=" " 
            className="peer w-full p-3 text-white rounded bg-black bg-opacity-50 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <label className={`absolute left-3 transition-all duration-200 ease-in-out transform origin-top-left ${password ? 'top-0 scale-75 text-white' : 'top-3 scale-100 text-gray-500'}`}>
            Password
          </label>
          <div className="absolute inset-y-0 right-3 flex items-center">
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none">
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full p-3 mb-4 text-lg font-semibold text-white bg-red-600 rounded hover:bg-red-700"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <div>
            <input type="checkbox" id="rememberMe" className="mr-1" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          {isSignInForm && <a href="#" className="hover:underline">Forgot Password?</a>}
        </div>

        <span className="text-gray-400">
          {isSignInForm ? (
            <>
              New to Netflix? <a href="#" className="text-white hover:underline font-bold" onClick={(e) => { e.preventDefault(); toggleSignIn(); }}>Sign up now.</a>
            </>
          ) : (
            <>
              Already have an account? <a href="#" className="text-white hover:underline font-bold" onClick={(e) => { e.preventDefault(); toggleSignIn(); }}>Sign in now.</a>
            </>
          )}
        </span>

        <small className="block mt-4 text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. {!showMoreInfo && <a href="#" className="text-blue-500 hover:underline" onClick={(e) => { e.preventDefault(); setShowMoreInfo(true); }}>Learn more.</a>}
        </small>
        {showMoreInfo && (
          <small className="block mt-2 text-gray-400">
            The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
          </small>
        )}
      </form>
    </div>
  );
}

export default Login;