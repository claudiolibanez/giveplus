import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

type TextProps = {
  variant?:
    | 'pageTitle'
    | 'subTitle'
    | 'itemCaption'
    | 'itemTitle'
    | 'darkButton'
    | 'caption';
  gutterBottom?: boolean;
};

export const Text = styled.Text<TextProps>`
  font-family: ${({ variant, theme }) => {
    switch (variant) {
      case 'pageTitle':
        return theme.fonts.regular;
      case 'subTitle':
        return theme.fonts.regular;
      case 'itemCaption':
        return theme.fonts.regular;
      case 'itemTitle':
        return theme.fonts.bold;
      case 'darkButton':
        return theme.fonts.regular;
      case 'caption':
        return theme.fonts.regular;
      default:
        return theme.fonts.regular;
    }
  }};

  font-size: ${({ variant }) => {
    switch (variant) {
      case 'pageTitle':
        return RFPercentage(3.3);
      case 'subTitle':
        return RFPercentage(2);
      case 'itemCaption':
        return RFValue(13);
      case 'itemTitle':
        return RFValue(15);
      case 'darkButton':
        return RFPercentage(2.2);
      case 'caption':
        return RFValue(12);
      default:
        return RFPercentage(2.2);
    }
  }}px;

  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'subTitle':
        return theme.colors.secondary;
      case 'itemCaption':
        return theme.colors.text;
      case 'itemTitle':
        return theme.colors.primary;
      case 'darkButton':
        return theme.colors.light;
      case 'caption':
        return theme.colors.light;
      default:
        return theme.colors.text;
    }
  }};

  margin-bottom: ${({ gutterBottom }) =>
    gutterBottom ? RFPercentage(1.1) : 0}px;
`;
