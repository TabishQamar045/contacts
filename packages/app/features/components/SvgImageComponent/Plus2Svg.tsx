import Svg, {
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
  Path,
  ClipPath,
  G,
} from 'react-native-svg'
import FeFlood from 'react-native-svg'
import FeOffset from 'react-native-svg'
import FeColorMatrix from 'react-native-svg'
import FeGaussianBlur from 'react-native-svg'
import FeComposite from 'react-native-svg'
import FeBlend from 'react-native-svg'
import Filter from 'react-native-svg'

export function Plus2Svg() {
  return (
    <Svg
      width={93}
      height={75}
      viewBox="0 0 93 75"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_1_153)">
        <Circle cx="46.8" cy="32.3512" r="31.8246" fill="#00052C" />
        <Path
          d="M59.5279 30.2294H48.9197V19.6212C48.9197 18.4501 47.9692 17.4996 46.7981 17.4996C45.6269 17.4996 44.6764 18.4501 44.6764 19.6212V30.2294H34.0682C32.8971 30.2294 31.9466 31.1799 31.9466 32.351C31.9466 33.5222 32.8971 34.4727 34.0682 34.4727H44.6764V45.0809C44.6764 46.252 45.6269 47.2025 46.7981 47.2025C47.9692 47.2025 48.9197 46.252 48.9197 45.0809V34.4727H59.5279C60.699 34.4727 61.6495 33.5222 61.6495 32.351C61.6495 31.1799 60.699 30.2294 59.5279 30.2294Z"
          fill="white"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_1_153"
          x="0.631101"
          y="0.526611"
          width="92.3378"
          height="92.3378"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity={0} result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="14.3443" />
          <FeGaussianBlur stdDeviation="7.17215" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.0243851 0 0 0 0 0.0870895 0 0 0 0.12 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_153"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_153"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  )
}
