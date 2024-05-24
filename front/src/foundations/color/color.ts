const neutral_light = {
  neutral_light0: '#FFFFFF',
  neutral_light100: '#F7F8F9',
  neutral_light200: '#F1F2F4',
  neutral_light300: '#DDDFE5',
  neutral_light400: '#B3B9C4',
  neutral_light500: '#8590A2',
  neutral_light600: '#758195',
  neutral_light700: '#616F86',
  neutral_light800: '#44546F',
  neutral_light900: '#2C3D5D',
  neutral_light1000: '#182A4E',
  neutral_light1100: '#081F42',
}

const neutral_dark = {
  neutral_dark0: '#161A1D',
  neutral_dark100: '#1D2125',
  neutral_dark200: '#22272B',
  neutral_dark300: '#2C333A',
  neutral_dark400: '#454F59',
  neutral_dark500: '#596773',
  neutral_dark600: '#738496',
  neutral_dark700: '#8C9BAA',
  neutral_dark800: '#9FADBC',
  neutral_dark900: '#B6C2CF',
  neutral_dark1000: '#C7D1DB',
  neutral_dark1100: '#DEE4EA',
}

const primary = {
  primary100: '#E7F9FF',
  primary200: '#C6EDFB',
  primary300: '#9ED9EE',
  primary400: '#6CC3E0',
  primary500: '#42B2D7',
  primary600: '#2998BD',
  primary700: '#227D9B',
  primary800: '#1F6A83',
  primary900: '#154555',
  primary1000: '#1E3037',
}

const palette = {
  ...neutral_light,
  ...neutral_dark,
}

const light = {
  neutral0: palette.neutral_light0,
  neutral100: palette.neutral_light100,
  neutral200: palette.neutral_light200,
  neutral300: palette.neutral_light300,
  neutral400: palette.neutral_light400,
  neutral500: palette.neutral_light500,
  neutral600: palette.neutral_light600,
  neutral700: palette.neutral_light700,
  neutral800: palette.neutral_light800,
  neutral900: palette.neutral_light900,
  neutral1000: palette.neutral_light1000,
  neutral1100: palette.neutral_light1100,

  ...primary,
}

const dark = {
  neutral0: palette.neutral_dark0,
  neutral100: palette.neutral_dark100,
  neutral200: palette.neutral_dark200,
  neutral300: palette.neutral_dark300,
  neutral400: palette.neutral_dark400,
  neutral500: palette.neutral_dark500,
  neutral600: palette.neutral_dark600,
  neutral700: palette.neutral_dark700,
  neutral800: palette.neutral_dark800,
  neutral900: palette.neutral_dark900,
  neutral1000: palette.neutral_dark1000,
  neutral1100: palette.neutral_dark1100,

  ...primary,
}

const color = {
  light,
  dark,
}

export type ColorKey = keyof typeof color.light
export type Color = Record<ColorKey, string>

export default color
