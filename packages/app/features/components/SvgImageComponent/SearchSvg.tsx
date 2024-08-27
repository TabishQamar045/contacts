import Svg, {
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
  Path,
  Rect,
} from 'react-native-svg'

type SearchSVgProps={
  stroke:string

}

export function SearchSvg(props:SearchSVgProps) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.6246 22.3512C18.6997 22.3512 23.6246 17.6502 23.6246 11.8512C23.6246 6.05221 18.6997 1.3512 12.6246 1.3512C6.54944 1.3512 1.62457 6.05221 1.62457 11.8512C1.62457 17.6502 6.54944 22.3512 12.6246 22.3512Z"
        stroke={props.stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.6246 25.3512L20.6246 20.3512"
        stroke={props.stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
