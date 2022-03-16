import styled from 'styled-components'
import { ButtonProps } from '.'

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	font-family: ${({ theme }: ButtonProps) => theme.fonts.fontFamily};
	align-items: center;
	padding: 6px
		${({ size }: ButtonProps) =>
			size?.height ? `${size.height / 2}px` : '12px'};
	border-radius: ${({ size }: ButtonProps) =>
		size?.height ? `${size.height}px` : '44px'};
	min-width: 18px;
	width: ${({ size }: ButtonProps) =>
		size?.width ? `${size.width}px` : 'content-fit'};
	min-height: 18px;
	height: ${({ size }: ButtonProps) =>
		size?.height ? `${size.height}px` : 'auto'};
	background-color: ${({ variant, theme }: ButtonProps) =>
		variant === 'filled' ? theme.colors.buttonFilled : 'transparent'};
	outline: solid 1px
		${({ theme, variant = 'default' }: ButtonProps) =>
			variant === 'outlined' ? theme.colors.buttonBorder : 'none'};
	border: none;
	transition: all 300ms;
	transition-timing-function: ease-in-out;
	text-transform: uppercase;
	&:hover {
		background-color: ${({ theme, variant = 'default' }: ButtonProps) =>
			variant === 'filled'
				? theme.colors.buttonHoverDark
				: theme.colors.buttonHover};
		border: none;
		outline: ${({ variant, theme }: ButtonProps) =>
			variant === 'outlined'
				? `solid 1px ${theme.colors.buttonBorder}`
				: 'none'};
		cursor: pointer;
	}
	&:active {
		background-color: ${({ variant, theme }: ButtonProps) =>
			variant === 'filled'
				? theme.colors.buttonActive
				: theme.colors.buttonFilled};
		outline: ${({ variant, theme }: ButtonProps) =>
			variant === 'outlined'
				? `solid 1px ${theme.colors.buttonBorder}`
				: 'none'};
		border: none;
		color: ${({ variant }: ButtonProps) =>
			variant === 'filled' ? 'white' : 'black'};
	}
`
