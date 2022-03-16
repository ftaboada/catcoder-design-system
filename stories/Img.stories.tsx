import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Img, ImgProps } from '../src/atoms'

const meta: Meta = {
	title: 'Img',
	component: Img,
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
	},
	parameters: {
		controls: { expanded: true },
	},
}

export default meta

const Template: Story<ImgProps> = args => {
	return (
		<Img
			src='https://wallpapercave.com/wp/wp1993662.jpg'
			alt='Atack on Titan'
			size={{ width: 416, height: 216 }}
			{...args}
		/>
	)
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
