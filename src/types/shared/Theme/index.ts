export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
// theme interface
export interface ThemeConfig {
  components: {
    Button: {
      colorPrimary: string;
      colorPrimaryHover: string;
      fontWeight: number;
      primaryColor: string;
      defaultBorderColor: string;
      defaultColor: string;
    };
    Typography: {
      colorText: string;
      colorError: string;
      fontSizeHeading1: string;
      fontSizeHeading2: string;
      fontSizeHeading3: string;
      fontSizeHeading4: string;
      fontSizeHeading5: string;
      lineHeightHeading1: string;
      lineHeightHeading2: string;
      lineHeightHeading3: string;
      lineHeightHeading4: string;
      lineHeightHeading5: string;
      fontWeightStrong: number;
    };
    Modal: {
      contentBg: string;
      footerBg: string;
      headerBg: string;
      titleColor: string;
      colorIcon: string;
      colorText: string;
      titleFontSize: string;
      titleLineHeight: 0.7;
      fontSize: string;
      borderRadiusLG: string;
      fontWeightStrong: string;
    };
    Tabs: {
      itemSelectedColor: string;
      itemColor: string;
      inkBarColor: string;
      itemHoverColor: string;
      lineHeight: string;
    };
    Dropdown: {
      borderRadiusLG: string;
      boxShadowSecondary: string;
      colorText: string;
      fontSize: string;
      lineHeight: string;
      paddingXXS: string;
    };
    Card: {
      colorBorderSecondary: string;
      borderRadiusLG: string;
    };
    Select: {
      borderRadius: string;
      colorText: string;
      colorPrimaryHover: string;
    };
    Input: {
      colorPrimaryHover: string;
      colorText: string;
      borderRadius: string;
      controlHeight: string;
      lineHeight: string;
    };
    Table: {
      borderColor: string;
      filterDropdownBg: string;
      filterDropdownMenuBg: string;
      fixedHeaderSortActiveBg: string;
      headerColor: string;
      rowExpandedBg: string;
      rowHoverBg: string;
      rowSelectedHoverBg: string;
      colorIcon: string;
      colorIconHover: string;
      colorText: string;
    };
    Pagination: {
      colorPrimary: string;
      itemActiveBg: string;
      colorText: string;
      paddingSM: string;
      borderRadius: string;
      lineType: string;
      itemSize: string;
      fontWeightStrong: string;
      colorPrimaryHover: string;
      wireframe: false;
    };
    Switch: {
      colorPrimary: string;
      colorPrimaryHover: string;
      colorBorder: string;
      colorWhite: string;
      borderRadiusSM: string;
    };
    Checkbox: {
      colorPrimary: string;
      colorPrimaryHover: string;
      colorBorder: string;
      colorWhite: string;
      borderRadiusSM: string;
    };
    Drawer: {
      colorBgElevated: string;
      colorIcon: string;
      colorSplit: string;
      colorText: string;
      fontSizeLG: string;
      fontWeightStrong: string;
      lineHeightLG: string;
    };

    // ... Add more component configurations here
  };
  // ... Add more theme configurations here
}
