import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledTitle = styled.h1`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: LeagueSpartanBlack;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 40px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledH1 = styled.h1`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: LeagueSpartanExtraBold;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 36px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledH2 = styled.h2`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: LeagueSpartanExtraBold;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 30px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledH3 = styled.h3`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: LeagueSpartanExtraBold;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 28px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledH4 = styled.h4`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: LeagueSpartanExtraBold;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 24px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledH5 = styled.h5`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: SpartanMBExtraBold;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 18px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledH6 = styled.h6`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: SpartanMBExtraBold;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 15px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledP = styled.p`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: SpartanMBRegular;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 15px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledSubtext = styled.p`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: SpartanMBRegular;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 11px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;

export const StyledSubheader = styled.p`
	color: ${(props) => (props.color ? props.color : colors.darkGrey)};
	font-family: LeagueSpartanLight;
	font-style: normal;
	${(props) =>
		props.fontWeight
			? `font-weight: ${props.fontWeight};`
			: `font-weight: normal;`}
	${(props) =>
		props.fontSize ? `font-size: ${props.fontSize}px;` : `font-size: 16px;`}
  ${(props) =>
		props.lineHeight
			? `line-height: ${props.lineHeight}px;`
			: `line-height: 140%;`}
  ${(props) => (props.padding ? `padding: ${props.padding};` : ``)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  letter-spacing: 15%;
	${(props) => (props.opacity ? `opacity: ${props.opacity};` : ``)}
`;
