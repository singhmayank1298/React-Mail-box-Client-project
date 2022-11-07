import { useSelector } from "react-redux";
import AuthPage from "./pages/AuthPage";

function App() {
  const tt = useSelector((state) => state.auth.token);
  console.log(tt);
  return (
    <>
      <AuthPage></AuthPage>
    </>
  );
}

export default App;
