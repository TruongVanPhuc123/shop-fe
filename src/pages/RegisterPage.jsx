import { AlertDestructive } from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const defaultValues = { name: "", email: "", password: "", remember: true };

const schema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().required("Password required"),
});

function RegisterPage() {
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

  const onSubmit = (data) => {
    const from = location.state?.from?.pathName || "/";
    // const { emil, passwrod } = data;
    console.log(data);
    try {
      navigate(from);
    } catch (error) {
      setError("responseError", error);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 items-center h-[100vh] ">
      <img
        src="../../public/nav/favicon.ico"
        alt=""
        className="w-20 animate-bounce"
      />
      {!!errors.responseError && (
        <AlertDestructive title={errors.responseError.message} />
      )}
      <p className="text-3xl font-bold">Register Page</p>
      <div className="md:w-[20%] w-[80%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <div className="text-right">
            <Link
              to={"/login"}
              className="hover:border-b-2 hover:border-blue-500 text-blue-500"
            >
              You have a account?
            </Link>
          </div>
          <Input placeholder="Username" {...register("name")} />
          {errors && <p className="text-red-500">{errors.name?.message}</p>}
          <Input placeholder="Email" {...register("email")} />
          {errors && <p className="text-red-500">{errors.email?.message}</p>}
          <Input placeholder="Password" {...register("password")} />
          {errors && <p className="text-red-500">{errors.password?.message}</p>}

          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
