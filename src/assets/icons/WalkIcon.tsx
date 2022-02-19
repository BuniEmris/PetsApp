import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WalkIcon(props: any) {
  return (
    <Svg
      width={25}
      height={22}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 2h12a4 4 0 110 8H7a5 5 0 000 10h13"
        stroke="#BDBDBD"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
}

export default WalkIcon;
