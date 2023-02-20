import { Router } from "./routes/Router";
import { Header, ToastMessage } from "./components";
import { BrowserRouter } from "react-router-dom";
import {
  clearMessage as clearMessageAuth,
  getMessage as getMessageAuth,
  isAuth,
} from "./redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  hideMessage,
  isShow,
  showMessage,
} from "./redux/toastMessage/toastMessageSlice";
import { useEffect } from "react";
import {
  getMessage as getMessageProject,
  clearMessage as clearMessageProject,
} from "./redux/projects/projectSlice";

const App = () => {
  const messageAuth = useSelector(getMessageAuth);
  const messageProject = useSelector(getMessageProject);
  const show = useSelector(isShow);
  const auth = useSelector(isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMessage(messageAuth || messageProject));

    if (messageAuth || messageProject) {
      setTimeout(() => {
        dispatch(clearMessageAuth());
        dispatch(clearMessageProject());
        dispatch(hideMessage());
      }, 3000);
    }
  }, [messageAuth, messageProject]);

  return (
    <BrowserRouter>
      {auth && <Header />}
      {show && (messageAuth || messageProject) ? (
        <ToastMessage text={messageAuth! || messageProject!} />
      ) : null}
      <Router />;
    </BrowserRouter>
  );
};

export default App;
