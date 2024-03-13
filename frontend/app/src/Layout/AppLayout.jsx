import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import NavigationContainer from "../components/NavigationContainer";
import Footer from "../components/Footer";
import WriteButton from "../components/WriteButton";

export default function AppLayout() {
  return (
    <>
      <WriteButton></WriteButton>
      <Header></Header>
      <br />
      <br />
      <br />
      <NavigationContainer></NavigationContainer>
      <br />
      <br />
      <br />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
