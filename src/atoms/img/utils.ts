export const getBorderRadius = (
	variant: 'squared' | 'rounded' | 'circular'
): string => {
	switch (variant) {
		case 'squared':
			return '4px'
		case 'rounded':
			return '12px'
		case 'circular':
			return '50%'
	}
}
export const getImgWitdh = (
	variant: 'squared' | 'rounded' | 'circular',
	size?: { width?: number; height?: number }
) => {
	if (variant === 'circular')
		return `${size?.height ? `${size.height}px` : '124px'}`
	if (size?.width) return `${size.width}px`
	return '100%'
}
