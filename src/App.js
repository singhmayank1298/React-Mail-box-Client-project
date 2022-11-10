import { useDispatch, useSelector } from "react-redux";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header/Header";
import { Route, Router, Switch } from "react-router-dom";
import ComposeMail from "./components/ComposeMail.js/ComposeMail";
import { useEffect } from "react";
import { getMails } from "./store/mails-servers";
import SideHeader from "./components/Ui/SideHeader";
import Inbox from "./components/Auth/Inbox/Inbox";

function App() {
  const token = useSelector((state) => state.auth.token);
  const myEmail = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  console.log(myEmail);

  const isLogin = !!token;

  useEffect(() => {
    dispatch(getMails(myEmail));
  }, [myEmail]);
  return (
    <>
      {isLogin && <Header></Header>}
      {isLogin && <SideHeader></SideHeader>}
      {!isLogin && <AuthPage></AuthPage>}
      <Switch>
        <Route path="/mail">{isLogin && <ComposeMail></ComposeMail>}</Route>

        <Route path="/inbox">
          <Inbox></Inbox>
        </Route>
      </Switch>
    </>
  );
}

export default App;
