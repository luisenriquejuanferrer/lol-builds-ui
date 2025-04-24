import "./style.css";
// import MakeABuildPage from "./pages/MakeABuildPage";
import HomePage from "./pages/HomePage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <HomePage />
        {/* <MakeABuildPage /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
