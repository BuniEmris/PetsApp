import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CenteredIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 13h2.055A9.004 9.004 0 0011 20.945V23h2v-2.055A9.004 9.004 0 0020.945 13H23v-2h-2.055A9.004 9.004 0 0013 3.055V1h-2v2.055A9.004 9.004 0 003.055 11H1v2zm4-1a7 7 0 1114 0 7 7 0 01-14 0zm7-4a4 4 0 110 8 4 4 0 010-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
        fill="#1E2126"
      />
    </Svg>
  );
}

export default CenteredIcon;
