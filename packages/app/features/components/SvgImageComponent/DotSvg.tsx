import Svg, {
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
  Path,
  Rect,
} from 'react-native-svg'
export function DotSvg() {
  return (
    <Svg
      width={5}
      height={26}
      viewBox="0 0 5 26"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="2.5" cy={3} r="2.5" fill="#76738A" />
      <Circle cx="2.5" cy={13} r="2.5" fill="#76738A" />
      <Circle cx="2.5" cy={23} r="2.5" fill="#76738A" />
    </Svg>
  )
}
