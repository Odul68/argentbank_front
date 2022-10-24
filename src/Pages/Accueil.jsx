import FeatureItems from "../Components/FeatureItems";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Introduction from "../Components/Intro";

/**
 * Homepage with general information
 * link to the login page in the header
 * @component
 */

export default function Accueil() {
  return (
    <div className="accueil">
      <Header />
      <Introduction />
      <FeatureItems />
      <Footer />
    </div>
  );
}
