import { useTheme } from "next-themes";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RoundProgress = ({ value, unit }) => {
  const { theme } = useTheme();
  value = value > 100 ? 100 : value < 0 ? 0 : value;

  return (
    <div className="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)]">
      <CircularProgressbarWithChildren
        value={value}
        styles={{
          path: {
            stroke: `#ED744A`,
            transition: "stroke-dashoffset 0.5s ease 0s",
            transformOrigin: "center center",
          },
          trail: {
            stroke: theme === "light" ? "#E2E8F0" : "#555",
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
          <strong>{value}%</strong>
          <p>{unit}</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default RoundProgress;
