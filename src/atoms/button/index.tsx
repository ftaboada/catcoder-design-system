import React, { FC, HTMLAttributes, MouseEvent } from 'react'
import { MainTheme } from 'styled-components'
import { Size } from '../../types'
import { StyledButton } from './style'

export const Button: FC<ButtonProps> = props => {
	const { children, onClick } = props
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		onClick && onClick(event)
	}
	return (
		<StyledButton onClick={handleClick} {...props}>
			{children}
		</StyledButton>
	)
}

export interface ButtonProps
	extends HTMLAttributes<HTMLButtonElement>,
		MainTheme {
	variant?: 'default' | 'outlined' | 'filled'
	size?: Size
}
