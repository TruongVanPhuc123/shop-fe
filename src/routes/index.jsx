import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import BlankLayout from "../layouts/BlankLayout";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ProductsPage from "@/pages/ProductsPage";
import AuthRequired from "./AuthRequired";
import DashBoardPage from "@/pages/dashboard/DashBoardPage";

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
      </Route>
      <Route path="/dashboard" element={<DashBoardPage />} />

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
