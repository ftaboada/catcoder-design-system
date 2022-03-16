import styled from 'styled-components'
import { FlexContainerProps } from '.'
import { FlexOptions } from '../../types'

export const StyledFlexContainer = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection = 'row' }: FlexContainerStyle) =>
		flexDirection};
	flex-wrap: ${({ flexWrap = 'wrap' }: FlexContainerStyle) => flexWrap};
	justify-content: ${({ justifyContent = 'flex-start' }: FlexContainerStyle) =>
		justifyContent};
	align-items: ${({ alignItems = 'flex-start' }: FlexContainerStyle) =>
		alignItems};
	align-content: ${({ alignContent }: FlexContainerStyle) => alignContent};
	width: ${({ size }: FlexContainerStyle) =>
		size?.width ? `${size.width}px` : '100%'};
	height: ${({ size }: FlexContainerStyle) =>
		size?.height ? `${size.height}px` : 'auto'};
	min-height: 35px;
	padding: ${({ padding = '0px 12px' }: FlexContainerStyle) => padding};
	margin: ${({ margin = '0px' }: FlexContainerStyle) => margin};
	box-sizing: border-box;
`
interface FlexContainerStyle extends FlexContainerProps, FlexOptions {}
