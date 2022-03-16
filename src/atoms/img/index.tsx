import React, { FC, ImgHTMLAttributes } from 'react'
import { MainTheme } from 'styled-components'
import { Size } from '../../types'
import { StyledImg } from './style'

export const Img: FC<ImgProps> = props => {
	return <StyledImg {...props} />
}

export interface ImgProps
	extends ImgHTMLAttributes<HTMLImageElement>,
		MainTheme {
	variant?: 'squared' | 'rounded' | 'circular'
	size?: Size
}
