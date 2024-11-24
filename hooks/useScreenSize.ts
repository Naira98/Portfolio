import { useEffect, useMemo, useState } from "react";

type ScreenSize = "xs" | "sm" | "md" | "lg";

const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const size = useMemo(
    (): ScreenSize =>
      width < 640 ? "xs" : width < 890 ? "sm" : width < 1300 ? "md" : "lg",
    [width],
  );

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return size;
};

export default useScreenSize;
