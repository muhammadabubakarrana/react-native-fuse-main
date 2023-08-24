
import { totalSize } from "react-native-dimension"

const fontFamily = {
  appTextBlack: 'Inter-Black',
  appTextThin: 'Inter-Thin',
  appTextLight: 'Inter-Light',
  appTextExtraLight: 'Inter-ExtraLight',
  appTextRegular: 'Inter-Regular',
  appTextMedium: 'Inter-Medium',
  appTextSemiBold: 'Inter-SemiBold',
  appTextBold: 'Inter-Bold',
  appTextExtraBold: 'Inter-ExtraBold',
}
const fontSize = {
  h1: totalSize(4),
  h2: totalSize(3.6),
  h3: totalSize(3.2),
  h4: totalSize(2.8),
  h5: totalSize(2.4),
  h6: totalSize(2),
  input: totalSize(1.75),
  large: totalSize(1.8),
  medium: totalSize(1.6),
  regular: totalSize(1.4),
  small: totalSize(1.2),
  tiny: totalSize(1),
  xTiny: totalSize(0.8),
  xxTiny: totalSize(0.6),
}


export  {fontFamily,fontSize}

