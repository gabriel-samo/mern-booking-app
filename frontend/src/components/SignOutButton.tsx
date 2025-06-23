import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.logout, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed Out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    }
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      className="text-emerald-600 px-3 py-2 font-bold bg-white hover:bg-gray-200 rounded"
      onClick={handleClick}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
