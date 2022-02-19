import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
function Camera(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path opacity={0.25} fill="url(#pattern0)" d="M0 0H80V80H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1603_865"
            transform="matrix(.00077 0 0 .00077 -.02 0)"
          />
        </Pattern>
        <Image
          id="image0_1603_865"
          width={1350}
          height={1299}
        />
      </Defs>
    </Svg>
  );
}
export default Camera;