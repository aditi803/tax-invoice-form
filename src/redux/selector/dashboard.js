import { useSelector } from "react-redux";

export const useDashboardSelector = () => {
  return useSelector((state) => state.dashboard)
}

