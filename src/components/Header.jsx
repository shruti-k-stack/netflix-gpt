import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    // Implement sign-out logic here, e.g., using Firebase Auth
    signOut(auth).then(() => {
      navigate('/'); // Redirect to login page after sign-out
// eslint-disable-next-line no-unused-vars
}).catch((error) => {
      navigate('/error'); // Redirect to login page even if there's an error during sign-out 
});
  };

  return (
    <>
    <div className="absolute px-8 py-4 bg-linear-to-b from-black/90 w-full h-screen z-10">
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
    </div>
    {user && (
      <div className="flex items-center justify-end absolute top-0 right-0 p-4 z-20 text-red-600">
        <img src={user?.photoURL} alt="usericon" />
        <button className="cursor-pointer" onClick={handleSignOut}>Sign Out</button>
      </div>
    )}
    </>
  )
}

export default Header;