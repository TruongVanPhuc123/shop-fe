import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertDestructive } from "@/components/Alert";
import Typography from "@/components/Typography";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().required("Password required"),
});

const defaultValues = { email: "", password: "", remember: true };

function LoginPage() {
  const auth = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const from = location.state?.from?.pathName || "/";
    const { email, password } = data;
    // console.log(data);
    try {
      await auth.login({ email, password }, () => {
        navigate(from);
      });
    } catch (error) {
      setError("responseError", error);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 items-center h-[100vh] ">
      <img
        src="../../public/nav/favicon.ico"
        alt=""
        className="w-20 animate-bounce"
      />
      <Typography>
        {" "}
        {!!errors.responseError && (
          <AlertDestructive title={errors.responseError.message} />
        )}
      </Typography>
      <p className="text-3xl font-bold">Login Page</p>
      <div className="md:w-[20%] w-[80%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <div className="text-right">
            <Link
              to={"/register"}
              className="hover:border-b-2 hover:border-blue-500 text-blue-500"
            >
              You haven`t a account?
            </Link>
          </div>
          <Input placeholder="Email" {...register("email")} />
          {errors && (
            <Typography className="text-red-500">
              {errors.email?.message}
            </Typography>
          )}
          <Input placeholder="Password" {...register("password")} />
          {errors && (
            <Typography className="text-red-500">
              {errors.password?.message}
            </Typography>
          )}

          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
