import 'styled-components'

declare module 'styled-components' {
	export interface MainTheme {
		theme: {
			colors: {
				cardBorder: string
				boxShadow: string
				buttonBorder: string
				buttonHover: string
				buttonHoverDark: string
				buttonFilled: string
				buttonActive: string
			}
			fonts: {
				fontFamily: string
			}
		}
	}
}
