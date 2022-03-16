import styled from 'styled-components'
import { CardProps } from '.'
import { getBorder, getShadow, getHover } from './utils'

export const CardDiv = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }: CardProps) =>
		flexDirection || 'column'};
	justify-content: space-between;
	flex-wrap: wrap;
	border-radius: 4px;
	border-inline: ${({ variant, theme }: CardProps) =>
		getBorder(theme.colors.cardBorder, variant)};
	border-top: ${({ variant, theme }: CardProps) =>
		getBorder(theme.colors.cardBorder, variant)};
	border-bottom: ${({ variant, theme }: CardProps) =>
		getBorder(theme.colors.cardBorder, variant)};
	min-width: 256px;
	width: ${({ size }: CardProps) =>
		size?.width ? `${size.width}px` : 'fit-content'};
	min-height: 256px;
	height: ${({ size }: CardProps) =>
		size?.height ? `${size.height}px` : 'auto'};
	padding: 0px;
	margin: 0px;
	box-sizing: content-box;
	box-shadow: ${({ variant, theme }: CardProps) =>
		getShadow(theme.colors.boxShadow, variant)};
	transition: all 200ms;
	transition-timing-function: ease-in-out;
	&:hover {
		${({ hoverEffect, theme }: CardProps) =>
			getHover(hoverEffect, theme.colors.boxShadow)}
	}
`
