import Svg, { Rect, Path } from 'react-native-svg'

export function CloseSvg() {
  return (
    <Svg
      width={49}
      height={49}
      viewBox="0 0 49 49"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="0.148682"
        y="0.0467529"
        width="48.735"
        height="48.735"
        rx="24.3675"
        fill="white"
      />
      <Path
        d="M16.3936 16.2919L32.6386 32.5369"
        stroke="black"
        strokeWidth="2.90089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.3936 32.5369L32.6386 16.2919"
        stroke="black"
        strokeWidth="2.90089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
