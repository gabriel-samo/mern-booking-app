import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registarion Success!", type: "SUCCESS" });
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
      <h2 className="text-5xl font-bold text-center">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          <span className="pl-2">First Name</span>
          <input
            className={`input ${
              errors.firstName ? "border-8 border-red-500" : ""
            }`}
            type="text"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="input-error">{errors.firstName.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          <span className="pl-2">Last Name</span>
          <input
            className={`input ${
              errors.lastName ? "border-8 border-red-500" : ""
            }`}
            type="text"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="input-error">{errors.lastName.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
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
      <label className="text-gray-700 text-sm font-bold flex-1">
        <span className="pl-2">Confirm Password</span>
        <input
          className={`input ${
            errors.confirmPassword ? "border-8 border-red-500" : ""
          }`}
          type="password"
          {...register("confirmPassword", {
            validate: (value) => {
              if (!value) {
                return "This field is required";
              } else if (watch("password") !== value) {
                return "Your passwords do not match";
              }
            }
          })}
        />
        {errors.confirmPassword && (
          <span className="input-error">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span className="flex items-center justify-between">
        <span className="text-sm">
          Already Registered?{" "}
          <Link to="/sign-in" className="link">
            Login here
          </Link>
        </span>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
