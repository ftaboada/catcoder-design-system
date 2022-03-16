export interface FlexOptions {
	flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
	flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
	alignContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'stretch'
}
