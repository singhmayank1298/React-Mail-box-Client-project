import { useDispatch, useSelector } from "react-redux";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import ComposeMail from "./components/ComposeMail.js/ComposeMail";
import { useEffect } from "react";
import { getMails } from "./store/mails-servers";
import SideHeader from "./components/Ui/SideHeader";

import SentPage from "./pages/SentPage";
import InboxPage from "./pages/InboxPage";

function App() {
  const token = useSelector((state) => state.auth.token);
  const myEmail = useSelector((state) => state.auth.email);
  const content = useSelector((state) => state.mail.content);

  const dispatch = useDispatch();
  console.log(myEmail);

  const isLogin = !!token;

  useEffect(() => {
    setInterval(() => {
      dispatch(getMails(myEmail, false));
    }, 3000);
  }, [myEmail, dispatch]);

  useEffect(() => {
    dispatch(getMails(myEmail, true));
  }, [content, myEmail, dispatch]);

  return (
    <>
      {isLogin && <Header></Header>}
      {isLogin && <SideHeader></SideHeader>}
      {!isLogin && <AuthPage></AuthPage>}
      <Switch>
        <Route path="/mail">{isLogin && <ComposeMail></ComposeMail>}</Route>

        <Route path="/inbox">
          <InboxPage></InboxPage>
        </Route>
        <Route path="/sent">
          <SentPage></SentPage>
        </Route>
      </Switch>
    </>
  );
}

export default App;
