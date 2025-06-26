import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    }
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5 max-w-lg mx-auto" onSubmit={onSubmit}>
      <h2 className="text-5xl font-bold text-center">Sign In</h2>
      <label className="text-gray-700 text-md font-bold flex-1">
        <span className="pl-2">Email</span>
        <input
          className={`input ${errors.email ? "border-8 border-red-500" : ""}`}
          type="email"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="input-error">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        <span className="pl-2">Password</span>
        <input
          className={`input ${
            errors.password ? "border-8 border-red-500" : ""
          }`}
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
        />
        {errors.password && (
          <span className="input-error">{errors.password.message}</span>
        )}
      </label>
      <span className="flex items-center justify-between">
        <span className="text-sm">
          Not Registered?{" "}
          <Link to="/register" className="link text-sm ">
            Create an account here
          </Link>
        </span>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </span>
    </form>
  );
};

export default SignIn;
