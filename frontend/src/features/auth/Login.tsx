import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, loginSchema } from "./Schema";
import { useLogin } from "./hooks";
import toast from './../../../node_modules/react-hot-toast/src/index';

const Login = () => {
  const {
    register,
    handleSubmit } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();

  const onSubmit = (data: LoginInput) => {
    // Check if password is less than 6 characters
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    loginMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Login successful");
      },
      onError: () => {
        toast.error(`Login failed`);
      },
    });
  };

  return (
    // Container for centering the form
    <div className="flex flex-col items-center justify-between">
      {/* Login form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between items-center w-[320px] h-[315px]"
      >
        {/* Heading */}
        <h2 className="text-[30px]">Welcome Back!</h2>

        {/* Email (UID) input */}
        <input
          type="email"
          placeholder="UID"
          {...register("email")}
          className="w-full h-[48px] px-[5px] m-[5px] border outline-none rounded-[10px]"
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full h-[48px] px-[5px] m-[5px] border outline-none rounded-[10px]"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-[326px] h-[60px] mt-[20px] bg-[#2b3a67] text-white text-[20px] outline-none border-0 rounded-[10px] hover:bg-blue-700"
        >
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
