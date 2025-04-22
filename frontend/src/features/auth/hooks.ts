import { useMutation } from "@tanstack/react-query";
import { LoginInput } from "./Schema";
import { loginUser } from "./api";


export const useLogin = () => {
    return useMutation({
      mutationFn: (data: LoginInput) => loginUser(data),
    });
  };
  
