import { useSelector } from "react-redux";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import ComposeMail from "./components/ComposeMail.js/ComposeMail";

function App() {
  const token = useSelector((state) => state.auth.token);

  const isLogin = !!token;
  return (
    <>
      {isLogin && <Header></Header>}
      {!isLogin && <AuthPage></AuthPage>}
      <Route path="/mail">{isLogin && <ComposeMail></ComposeMail>}</Route>
    </>
  );
}

export default App;
