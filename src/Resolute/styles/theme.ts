const pallette = {
  white: '#fff',
  greyBackground: '#F8FAFC',
  grey50: '#FAFBFC',
  grey70: '#DAE1E7',
  grey100: '#CACBCC',
  grey200: '#A7B7C7',
  grey300: '#82909E',
  grey400: '#60666C',
  grey500: '#5C6E78',
  black: '#000',

  saturatedGrey100: '#ECF5F8',

  blue200: '#EEF0F3',
  blue400: '#2cbaf2',
  blue500: '#149ED4',
  blue600: '#0E7CA7'
};

const theme = {
  header: pallette.blue500,
  logo: pallette.white,

  searchBg: pallette.saturatedGrey100,
  searchBgFocus: pallette.white,
  searchBorder: pallette.blue600,

  sidebarBg: pallette.greyBackground,
  sidebarBorder: pallette.blue200,
  sidebarTxt: pallette.grey400,
  sidebarSelectedBorder: pallette.blue500,
  sidebarSelectedBg: pallette.white,
  sidebarHoverBorder: pallette.blue400,
  sidebarHoverBg: pallette.white
};

export default theme;
export type ITheme = typeof theme;
