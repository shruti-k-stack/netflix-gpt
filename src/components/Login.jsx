import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header'


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
    <Header />
    <div className="login">
        <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg" alt="Logo" />
      </div>
      <div className="absolute mt-20 mx-auto flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-white z-10">
      <div className='relative'>
        <h1 className="text-white text-6xl mb-4 font-black text-center">Unlimited movies, shows, and more</h1>
        <p className="text-white text-xl font-medium mb-8 text-center">Starts at ₹149. Cancel at any time.</p>
      </div>
      <form className="w-80 p-4 mx-auto flex flex-col bg-black/80 rounded-md">
        <h3 className="text-white text-sm mb-4 font-normal text-center">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="m-0">
          {isSignInForm ? <h2 className="text-white text-3xl mb-4 font-bold text-center">Sign In</h2> : <h2 className="text-white text-3xl mb-4 font-bold text-center">Sign Up</h2>}
          {!isSignInForm && (
  <>
    <label className='text-gray-500'>Full Name</label>
    <input
      type="text"
      placeholder="Full Name"
      className="p-3 my-2 bg-black/70 rounded-md w-full text-base font-normal border border-gray-500"
    />
  </>
)}

          <label className='text-gray-500'>Email</label>
        <input type="text" placeholder="Email Address" className="p-3 my-2 bg-black/70 rounded-md w-full text-base font-normal border border-gray-500" />
          
          <label className='text-gray-500'>Password</label>
        <input type = "password" placeholder="Password" className="p-3 my-2 bg-black/70 rounded-md w-full text-base font-normal border border-gray-500" />
        <button onClick={toggleForm} className="w-full p-3 mb-2 bg-red-600 rounded-md text-xl">{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <h5 className="text-white text-sm mt-4">Don't have an account? <Link to="/signup"><span className="text-red-600">{isSignInForm ? "Sign Up" : "Sign In"} Now</span></Link></h5>
        </div>
      </form>
      </div>
        </>
)
}

export default Login