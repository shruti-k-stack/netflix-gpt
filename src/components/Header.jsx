import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    // Implement sign-out logic here, e.g., using Firebase Auth
    signOut(auth)
      .then(() => {
        navigate("/"); // Redirect to login page after sign-out
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        navigate("/error"); // Redirect to login page even if there's an error during sign-out
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <>
      <div className="absolute px-8 py-4 bg-linear-to-b from-black/90 w-full h-screen z-10">
        <img className="w-44" src={LOGO} alt="Logo" />
      </div>
      {user && (
        <div className="flex items-center justify-end absolute top-0 right-0 p-4 z-20 ">
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded mx-2"
            onClick={handleGptSearch}
          >
            GPTSearch
          </button>
          <img src={user?.photoURL} alt="usericon" className="text-red-600" />
          <button
            className="cursor-pointer text-red-600"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
