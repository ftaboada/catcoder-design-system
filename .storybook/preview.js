import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../ theme'

const themes = [mainTheme]
addDecorator(withThemesProvider(themes), ThemeProvider)

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
	// https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
	actions: { argTypesRegex: '^on.*' },
}
