import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setIsMobile, setSidebar } from "@/store/features/sidebarSlice";

export default function useResponsiveSidebar() {
  const dispatch = useDispatch();
  const lastIsMobile = useRef<boolean | null>(null);

  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth < 1024;
    dispatch(setIsMobile(isMobile));
    if (lastIsMobile.current === null) {
      // First run: set sidebar open/close based on device
      dispatch(setSidebar(!isMobile));
    } else if (lastIsMobile.current !== isMobile) {
      // Only if breakpoint crossed
      dispatch(setSidebar(!isMobile));
    }
    lastIsMobile.current = isMobile;
  }, [dispatch]);

  useEffect(() => {
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
}
