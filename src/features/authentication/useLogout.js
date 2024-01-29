import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

// ! 391.ders
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // ! tüm cacheleri temizleme
      queryClient.removeQueries();
      // ! replace sayesinde browser geriye gitme tuşu işe yaramaz
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
