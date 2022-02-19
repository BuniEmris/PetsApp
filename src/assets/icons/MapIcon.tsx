import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MapIcon(props: any) {
  return (
    <Svg
      width={28}
      height={26}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 20l-8 2V4l8-2M18 24l-8-4V2l8 4v18zM18 6l8-2v18l-8 2"
        stroke="#BDBDBD"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
}

export default MapIcon;
