import FeatureItems from "../Components/FeatureItems";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Introduction from "../Components/Intro";

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
