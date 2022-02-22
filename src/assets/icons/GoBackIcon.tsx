import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoBackIcon(props: any) {
  return (
    <Svg
      width={37}
      height={16}
      viewBox="0 0 37 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM36.773 8L31 2.226 25.227 8 31 13.774 36.773 8zM1 9h30V7H1v2z"
        fill="#00DC92"
      />
    </Svg>
  );
}

export default GoBackIcon;
