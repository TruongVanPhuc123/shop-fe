import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home-page";
import DetailPage from "../pages/detail-page/index";
import BlankLayout from "../layouts/BlankLayout";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ProductsPage from "@/pages/product-page/index";
import AuthRequired from "./AuthRequired";
import ProfilePage from "@/pages/profile-page/ProfilePage";
import OrderPage from "@/pages/order-page/OrderPage";
import DashBoardPage from "@/pages/profile-page/outlet-select/dash-board/DashBoardPage";
import { Cart } from "@/components/cart/Cart";
import Profile from "@/pages/profile-page/outlet-select/profile/Profile";
import OrderProfile from "@/pages/profile-page/outlet-select/order-profile/OrderProfile";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequired>
            <MainLayout />
          </AuthRequired>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPage />} />
      </Route>

      <Route
        path="/profile"
        element={
          <AuthRequired>
            <ProfilePage />
          </AuthRequired>
        }
      >
        <Route index element={<Profile />} />
        <Route path="dash-board" element={<DashBoardPage />} />
        <Route path="order-profile" element={<OrderProfile />} />
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
