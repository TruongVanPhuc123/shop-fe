import { AlertDestructive } from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { Box, Stack } from "@mui/material";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Typography from "@/components/Typography";

const defaultValues = { name: "", email: "", password: "", remember: true };

const schema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().required("Password required"),
});

function RegisterPage() {
  const auth = useAuth();

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
    const { name, email, password } = data;
    try {
      await auth.register({ name, email, password }, () => {
        navigate("/login");
      });
    } catch (error) {
      setError("responseError", error);
    }
  };

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      className=" h-[100vh] "
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
        className="xl:w-[22%] w-[80%]"
      >
        <Box>
          <img src="/favicon.ico" alt="" className="w-20 animate-bounce" />
        </Box>
        <Typography className={"w-full"}>
          {!!errors.responseError && (
            <AlertDestructive title={errors.responseError.message} />
          )}
        </Typography>
        <p className="text-3xl font-bold">Register Page</p>
        <div className="w-full">
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
            {errors && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}

            {!isSubmitting ? (
              <Button type="submit">Register</Button>
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

export default RegisterPage;
