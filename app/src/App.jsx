import Header from "./Component/Header";
import Principal from "./Component/Principal";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import "./App.css";
function App() {
  return (
    <div className="Containar-principal">
      <Header />
      <Principal />
      <Card />
      <Footer />
    </div>
  );
}
export default App;
