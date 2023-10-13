import { useSelector } from "react-redux";

export const useInvoiceSelector = () => {
  return useSelector((state) => state.invoice)
}

