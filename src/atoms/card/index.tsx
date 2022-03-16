import React, { FC, HTMLAttributes } from 'react'
import { MainTheme } from 'styled-components'
import { Size } from '../../types'
import { CardDiv } from './style'

export const Card: FC<CardProps> = props => {
	const { children } = props
	return <CardDiv {...props}>{children}</CardDiv>
}

export interface CardProps extends HTMLAttributes<HTMLDivElement>, MainTheme {
	variant?: 'bottom' | 'top' | 'no-border'
	flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
	hoverEffect?: boolean
	size?: Size
}
