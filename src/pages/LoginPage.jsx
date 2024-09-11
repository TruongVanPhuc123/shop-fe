import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertDestructive } from "@/components/Alert";
import Typography from "@/components/Typography";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Box, Stack } from "@mui/material";

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
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const from = location.state?.from?.pathName || "/";
    const { email, password } = data;
    try {
      await auth.login({ email, password }, () => {
        navigate(from);
      });
    } catch (error) {
      setError("responseError", error);
    }
  };

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      className=" h-[100vh] "
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
        className="xl:w-[25%] w-[80%]"
      >
        <Box>
          {" "}
          <img src="/favicon.ico" alt="" className="w-20 animate-bounce" />
        </Box>
        <Typography className={"w-full"}>
          {" "}
          {!!errors.responseError && (
            <AlertDestructive title={errors.responseError.message} />
          )}
        </Typography>
        <p className="text-3xl font-bold">Login Page</p>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2"
          >
            <div className="text-right">
              <Link
                to={"/register"}
                className="hover:border-b-2 hover:border-blue-500 text-blue-500"
              >
                You haven`t account?
              </Link>
            </div>
            <Input placeholder="Email" {...register("email")} type="text" />
            {errors && (
              <Typography className="text-red-500">
                {errors.email?.message}
              </Typography>
            )}
            <Input
              placeholder="Password"
              {...register("password")}
              type="password"
            />
            {errors && (
              <Typography className="text-red-500">
                {errors.password?.message}
              </Typography>
            )}

            {!isSubmitting ? (
              <Button type="submit">Login</Button>
            ) : (
              <Button disabled>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Typography className={"animate-spin"}>
                    <AiOutlineLoading3Quarters />
                  </Typography>
                  <Typography>Please Waiting</Typography>
                </Stack>
              </Button>
            )}
          </form>
        </div>
      </Stack>
    </Stack>
  );
}

export default LoginPage;
