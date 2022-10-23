import Account from "../Components/Account";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import UserInformation from "../Components/UserInformation";
import { useSelector } from "react-redux";

export default function User() {
  const connected = useSelector((state) => state.connected);
  return connected ? (
    <main className="main bg-dark">
      <Header />
      <UserInformation />
      <Account />
      <Footer />
    </main>
  ) : (
    "Veuillez vous connecter"
  );
}
