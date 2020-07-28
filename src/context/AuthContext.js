import { AsyncStorage } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import createDataContext from "./createDataContext";
import myPawsAPI from "../api/mypaws";
import { navigate } from "../navigationRef";

const baseApiUrl = `https://0aa980f6f1ba.ngrok.io`;

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload, isLoading: false };
    case "clear_error_message":
      return { ...state, errorMessage: "", isLoading: false };
    case "on_process":
      return { ...state, errorMessage: "", isLoading: true };
    case "signin":
      return { token: action.payload, errorMessage: "", isLoading: false };
    case "signout":
      return { token: null, errorMessage: "", isLoading: false };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Home");
  } else {
    navigate("MainSignIn");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ firstName, lastName, email, password, confirmPassword }) => {

  dispatch({ type: "on_process" });

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return dispatch({
      type: "add_error",
      payload: "Please fill out every fields",
    });
  }

  if (reg.test(email) === false) {
    return dispatch({
      type: "add_error",
      payload: "Email is not valid",
    });
  }

  if (password.length < 6) {
    return dispatch({
      type: "add_error",
      payload: "Password must be atleast 6 characters",
    });
  }

  try {
    if (password === confirmPassword) {
      const response = await myPawsAPI.post("/api/signup", { firstName, lastName, email, password })
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("Home");
    } else {
      dispatch({
        type: "add_error",
        payload: "Passwords did not match",
      });
    }
  } catch (err) {
    console.log(err)
    dispatch({
      type: "add_error",
      payload: "Something went wrong",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {

  dispatch({ type: "on_process" });

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email || !password) {
    return dispatch({
      type: "add_error",
      payload: "Please fill out every fields",
    });
  }

  if (reg.test(email) === false) {
    return dispatch({
      type: "add_error",
      payload: "Email is not valid",
    });
  }

  try {
    const response = await myPawsAPI.post("/api/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("Home");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Invalid email or password",
    });
  }
};

const signupwithgoogle = (dispatch) => async () => {

  const redirectUrl = await Linking.getInitialURL();
  try {
    const authResult = await WebBrowser.openAuthSessionAsync(`${baseApiUrl}/auth/google`, redirectUrl)

    const { url } = authResult;

    try {
      if (url) {
        const queryStart = url.indexOf("=") + 1
        const queryEnd = url.indexOf("#") + 1 || url.length + 1
        const token = url.slice(queryStart, queryEnd - 1)

        await AsyncStorage.setItem("token", token);
        dispatch({ type: "signin", payload: token });
        navigate("Home");
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong",
      });
    }



    // await setState({ authResult: authResult })
  } catch (err) {
    console.log('ERROR:', err)
  }
};

const signupwithfacebook = (dispatch) => async () => {

  const redirectUrl = await Linking.getInitialURL();

  try {
    const authResult = await WebBrowser.openAuthSessionAsync(`${baseApiUrl}/auth/facebook`, redirectUrl)


    console.log(authResult)
    // const { url } = authResult;

    // try {
    //   if (url) {
    //     const queryStart = url.indexOf("=") + 1
    //     const queryEnd = url.indexOf("#") + 1 || url.length + 1
    //     const token = url.slice(queryStart, queryEnd - 1)

    //     await AsyncStorage.setItem("token", token);
    //     dispatch({ type: "signin", payload: token });
    //     navigate("Home");
    //   }
    // } catch (err) {
    //   dispatch({
    //     type: "add_error",
    //     payload: "Something went wrong",
    //   });
    // }
    // await setState({ authResult: authResult })
  } catch (err) {
    console.log('ERROR:', err)
  }
};




const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  // somehow sign out!!!
  dispatch({ type: "signout" });
  navigate("MainSignIn");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signupwithgoogle, signupwithfacebook, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "", isLoading: false }
);
