import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { PlayerContext } from "../context/PlayerContext";
import { createPortal } from "react-dom";

export const LoginPage = () => {
  const { setToken, url, setUser, setIsLoginPortal } =
    useContext(PlayerContext);

  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({
    user_name: "",
    user_id: "",
    user_password: "",
    user_role: "user",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    // let new_url = url;

    if (currState === "Sign Up") {
      await fetch(`${url}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setData({
        user_name: "",
        user_id: "",
        user_password: "",
        user_role: "user",
      });

      setCurrState("Login");
    }
    if (currState === "Login") {
      const users = await fetch(`${url}users`)
        .then((res) => res.json())
        .then((data) => data);
      users.forEach((user) => {
        if (
          data.user_id === user.user_id &&
          data.user_password === user.user_password
        ) {
          setIsLoginPortal(false);
          setToken(true);
          setUser(user);
        }
      });
    }
  };

  return (
    <div className="absolute top-[0%] z-[1000] w-full h-screen bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-[white] flex flex-col gap-[25px] animate-[fadeIn_0.5s] px-[30px] py-[25px] rounded-lg sm:w-[max(70%,30px)] sm:px-[15px] py-[15px] "
      >
        <div className=" bg-inherit flex justify-between items-center text-[black] ">
          <h2 className="bg-inherit text-2xl font-black sm:text-base">
            {currState.toUpperCase()}
          </h2>
          <IoClose
            className="bg-inherit text-2xl p-1 rounded-full cursor-pointer hover:bg-[tomato] hover:text-white "
            onClick={() => {
              setIsLoginPortal(false);
            }}
          />
        </div>
        <div className="bg-inherit flex flex-col gap-5">
          {currState === "Sign Up" ? (
            <input
              className="bg-inherit border rounded p-2.5 border-solid border-[#C9C9C9] sm:p-2"
              name="user_name"
              onChange={onChangeHandler}
              value={data.user_name}
              type="text"
              placeholder="Full Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            className="bg-inherit border rounded p-2.5 border-solid border-[#C9C9C9] sm:p-2"
            name="user_id"
            onChange={onChangeHandler}
            value={data.user_id}
            type="text"
            placeholder="User ID"
          />
          <input
            className="bg-inherit border rounded p-2.5 border-solid border-[#C9C9C9] sm:p-2"
            name="user_password"
            onChange={onChangeHandler}
            value={data.user_password}
            type="password"
            placeholder="User Password"
            required
          />
        </div>
        <button className="rounded text-[white] bg-[#FF4C24]  cursor-pointer p-2.5 border-[none] sm:p-2">
          {currState === "Login" ? "Login" : "Create account"}
        </button>

        {currState === "Login" ? (
          <p className="bg-inherit">
            Create a new account?{" "}
            <span
              className="bg-inherit text-[tomato] cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="bg-inherit">
            Already have an account?
            <span
              className="bg-inherit text-[tomato] cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              {" "}
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

const LoginPortal = () => {
  return createPortal(<LoginPage />, document.getElementById("root"));
};

export default LoginPortal;
