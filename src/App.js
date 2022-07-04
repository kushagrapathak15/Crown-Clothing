import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./routes/navigation/navbar.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./components/shop/shop.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
