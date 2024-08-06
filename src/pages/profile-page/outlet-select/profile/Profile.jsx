import Typography from "@/components/Typography";
import { Input } from "@/components/ui/input";
import { Box, Divider, Stack } from "@mui/material";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, updateUser } from "@/feautures/user/UserSlice";

const schema = yup.object({
  name: yup.string().max(30),
  address: yup.string(),
  phoneNumber: yup.string(),
});

const defaultValues = {
  name: "",
  address: "",
  avatarUrl: null,
  phoneNumber: "",
};

export default function Profile() {
  const [btnUpdateUser, setBtnUpdateUser] = useState(false);
  const [btnUpdate, setbtnUpdate] = useState(false);

  const { user, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const fileURL = useRef();

  const email = user?.email;
  const address = user?.address;
  const phoneNumber = user?.phoneNumber;
  const name = user?.name;
  const avatarUrl = user?.avatarUrl;
  const id = user?._id;

  const { register, setValue, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const handleFile = () => {
    const file = fileURL.current.files[0];
    if (file) {
      setValue("avatarUrl", file);
    }
  };

  const onSubmit = async (body) => {
    setBtnUpdateUser(true);
    dispatch(updateUser({ id, body, setBtnUpdateUser, reset }));
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, success]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        width={"100%"}
        height={"100%"}
        justifyContent={"space-between"}
        spacing={5}
      >
        <Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={1}
            className="pb-2 w-full"
          >
            <Box>
              <Typography className={"text-xl font-bold"}>Profile</Typography>
              <Typography className="text-pretty text-gray-400">
                This is how others will see you on the site.
              </Typography>
            </Box>
            <Button
              type="button"
              onClick={() => setbtnUpdate(!btnUpdate)}
              variant="outline"
            >
              Update Profile
            </Button>
          </Stack>
          <Divider />
        </Box>
        <Stack direction={"row"} justifyContent={"space-between"} spacing={3}>
          <Stack spacing={1}>
            {" "}
            <Typography className={"font-bold"}>Username</Typography>
            <Input placeholder="Username" type="text" disabled value={name} />
            {btnUpdate ? (
              <Box>
                <Input
                  placeholder="Username"
                  type="text"
                  {...register("name")}
                />
                <Typography className={"text-sm text-lime-500"}>
                  Please type your new username
                </Typography>
              </Box>
            ) : (
              <Typography className={"text-sm"}>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </Typography>
            )}
          </Stack>
          <Stack justifyContent={"space-between"} spacing={1}>
            {" "}
            <Typography className={"font-bold"}>Email</Typography>
            <Input placeholder="Email" type="email" disabled value={email} />
            <Typography className={"text-sm"}>
              You can manage verified email addresses in your email settings.
            </Typography>
          </Stack>
          <Stack spacing={1}>
            {" "}
            <Typography className={"font-bold"}>Phone Number</Typography>
            <Input
              placeholder="Phone Number"
              type="number"
              disabled
              value={phoneNumber}
            />
            {btnUpdate ? (
              <Box>
                <Input
                  placeholder="Phone Number"
                  type="number"
                  {...register("phoneNumber")}
                />
                <Typography className={"text-sm text-lime-500"}>
                  Please type your new phone number
                </Typography>
              </Box>
            ) : (
              <Typography className={"text-sm"}>
                This is a valid your phone number.
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack spacing={1}>
          {" "}
          <Typography className={"font-bold"}>Address</Typography>
          <Input
            placeholder="Your Address"
            type="text"
            disabled
            value={address}
          />
          {btnUpdate && (
            <Box>
              <Input
                placeholder="Address"
                type="text"
                {...register("address")}
              />
              <Typography className={"text-sm text-lime-500"}>
                Please type your new address
              </Typography>
            </Box>
          )}
        </Stack>
        <Stack spacing={1}>
          {" "}
          <Typography className={"font-bold"}>Avatar URL</Typography>
          <Input
            placeholder="Image Url"
            type="text"
            disabled
            value={avatarUrl}
          />
          {btnUpdate && (
            <Box>
              <Input
                placeholder="Avatar URL"
                type="file"
                ref={fileURL}
                onChange={handleFile}
              />
              <Typography className={"text-sm text-lime-500"}>
                Please type your new phone number
              </Typography>
            </Box>
          )}
        </Stack>
        {btnUpdate && (
          <>
            {!btnUpdateUser ? (
              <Button type="submit">Yes, I Want To Update </Button>
            ) : (
              <Button type="button" disabled>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Typography className={"animate-spin"}>
                    <AiOutlineLoading3Quarters />
                  </Typography>
                  <Typography>Please Waiting</Typography>
                </Stack>
              </Button>
            )}
          </>
        )}
      </Stack>
    </form>
  );
}
