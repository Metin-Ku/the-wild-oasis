import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    // ! 385. ders queryKey neden önemli yoksa bug olur
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    // ! 384.ders
    // ! react query default olarak fetchlerken başarısız olursa üç kez daha dener bunu engellemek için retry: false
    retry: false,
  });

  return { isLoading, error, booking };
}
