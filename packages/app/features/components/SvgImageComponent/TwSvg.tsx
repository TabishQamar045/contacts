import Svg, { Circle, Defs, Pattern, Use, Image, Path } from 'react-native-svg'

export function TwSvg() {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5 0C7.761 0 10 2.239 10 5C10 7.761 7.761 10 5 10C2.239 10 0 7.761 0 5C0 2.239 2.239 0 5 0Z"
        fill="#1DA1F2"
      />
      <Path
        d="M3.83998 7.54005C6.19798 7.54005 7.48898 5.58605 7.48898 3.89105C7.48898 3.83605 7.48898 3.78005 7.48498 3.72505C7.73598 3.54305 7.95298 3.31905 8.12498 3.06105C7.89098 3.16505 7.64298 3.23305 7.38898 3.26305C7.65698 3.10305 7.85698 2.85105 7.95298 2.55405C7.70098 2.70305 7.42598 2.80905 7.13898 2.86505C6.65298 2.34905 5.84098 2.32405 5.32498 2.80905C4.99198 3.12205 4.85098 3.58905 4.95398 4.03405C3.92298 3.98205 2.96198 3.49505 2.31098 2.69405C1.97098 3.28005 2.14398 4.02905 2.70798 4.40605C2.50398 4.40005 2.30398 4.34505 2.12598 4.24605C2.12598 4.25105 2.12598 4.25705 2.12598 4.26205C2.12598 4.87205 2.55598 5.39805 3.15498 5.51905C2.96598 5.57005 2.76798 5.57805 2.57598 5.54105C2.74398 6.06305 3.22498 6.42105 3.77398 6.43205C3.31998 6.78905 2.75898 6.98305 2.18198 6.98205C2.07998 6.98205 1.97798 6.97605 1.87698 6.96305C2.46098 7.34005 3.14398 7.54005 3.83998 7.53905"
        fill="white"
      />
    </Svg>
  )
}
