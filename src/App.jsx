import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./components/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
