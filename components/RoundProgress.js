import { useTheme } from "next-themes";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useIsMounted from "../hooks/useIsMounted";
import { useEffect } from "react";
import { useState } from "react";

const RoundProgress = ({ value, unit }) => {
  const isMounted = useIsMounted();
  const { theme } = useTheme();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(value > 100 ? 100 : value < 0 ? 0 : value);
    return () => setDisplayValue(0);
  }, []);

  return (
    <div className="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] round-progress">
      <CircularProgressbarWithChildren
        value={displayValue}
        styles={{
          path: {
            stroke: `#ED744A`,
            transition: "stroke-dashoffset 1s ease 0.1s",
            transformOrigin: "center center",
          },
          trail: {
            stroke: theme === "dark" && isMounted ? "#555" : "#E2E8F0",
            strokeLinecap: "butt",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          background: {
            fill: "#3e98c7",
          },
        }}
      >
        <div className="md:text-base text-center text-sm">
          <strong>{displayValue}%</strong>
          <p>{unit}</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default RoundProgress;
