export const getBorder = (
	borderColor: string,
	variant?: 'bottom' | 'top' | 'no-border'
) => {
	return variant && variant === 'no-border'
		? 'none'
		: `solid 1px ${borderColor}`
}
export const getShadow = (
	boxShadow: string,
	variant?: 'bottom' | 'top' | 'no-border'
) => {
	return variant && variant === 'top'
		? `0px 16px 12px -6px ${boxShadow} ;`
		: 'none'
}

export const getHover = (hoverEffect: boolean = false, boxShadow: string) => {
	return hoverEffect
		? `transform: translateY(-6px);
        box-shadow: 0px 16px 12px -6px ${boxShadow};`
		: 'none'
}
