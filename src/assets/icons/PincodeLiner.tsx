import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={56} height={6} fill="none" {...props}>
    <Path
      d="M.113 3 3 5.887 5.887 3 3 .113.113 3Zm55.774 0L53 .113 50.113 3 53 5.887 55.887 3ZM3 3.5h50v-1H3v1Z"
      fill="#828282"
    />
  </Svg>
);

export default SvgComponent;
