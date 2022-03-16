import styled from 'styled-components'
import { ImgProps } from '.'
import { getBorderRadius, getImgWitdh } from './utils'

export const StyledImg = styled.img`
	border-radius: ${({ variant = 'squared' }: ImgProps) =>
		getBorderRadius(variant)};
	width: ${({ variant = 'squared', size }: ImgProps) =>
		getImgWitdh(variant, size)};
	min-height: 50px;
	height: ${({ size = { height: 124 } }: ImgProps) => `${size.height}px`};
	object-fit: cover;
	border: ${({ theme, variant = 'squared' }: ImgProps) =>
		variant === 'squared' ? 'none' : `solid 1px ${theme.colors.cardBorder}`};
	margin: 0px;
	padding: 0px;
`
