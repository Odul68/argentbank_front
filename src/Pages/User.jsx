import Account from "../Components/Account";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import UserInformation from "../Components/UserInformation";
import { useSelector } from "react-redux";

/**
 * User page with personal information
 * User needs to be connected to access to the page
 * @component
 */

export default function User() {
  const connected = useSelector((state) => state.connected);
  return connected ? (
    <>
      <Header />
      <main className="main bg-dark">
        <UserInformation />
        <Account />
      </main>
      <Footer />
    </>
  ) : (
    "Veuillez vous connecter"
  );
}
