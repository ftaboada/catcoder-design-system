import React, { FC, HTMLAttributes } from 'react'
import { MainTheme } from 'styled-components'
import { FlexOptions, Size } from '../../types'
import { StyledFlexContainer } from './style'

export const FlexContainer: FC<FlexContainerProps> = props => {
	const { children, flexOptions } = props
	return (
		<StyledFlexContainer {...props} {...flexOptions}>
			{children}
		</StyledFlexContainer>
	)
}

export interface FlexContainerProps
	extends HTMLAttributes<HTMLDivElement>,
		MainTheme {
	flexOptions?: FlexOptions
	size?: Size
	padding?: string
	margin?: string
}
