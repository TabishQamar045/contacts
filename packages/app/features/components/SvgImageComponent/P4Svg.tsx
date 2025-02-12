import Svg, {
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
  Path,
  Rect,
} from 'react-native-svg'
export function P4Svg() {
  return (
    <Svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      //   xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Circle cx={28} cy={28} r={28} fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1_84"
            transform="translate(-0.251366) scale(0.00546448)"
          />
        </Pattern>
        <Image
          id="image0_1_84"
          width={275}
          height={183}
          xlinkHref="data:image/jpeg;base64,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"
        />
      </Defs>
    </Svg>
  )
}
