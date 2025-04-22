import { api } from "../../api/api";
import { LoginInput } from "./Schema";


export const loginUser = async (data: LoginInput) => {
    const response = await api.post("/login", data);
    return response.data;
  };
  