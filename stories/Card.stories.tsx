import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Card, CardProps, FlexContainer, Img } from '../src/atoms'

const meta: Meta = {
	title: 'Card',
	component: Card,
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

const Template: Story<CardProps> = args => {
	console.log(args)
	return (
		<Card {...args}>
			<Img
				src='https://wallpapercave.com/wp/wp1993662.jpg'
				alt='Atack on Titan'
				size={{ height: 186 }}
			/>
			<FlexContainer>
				<p>Atack on titan</p>
			</FlexContainer>
			<FlexContainer
				size={{ height: 64 }}
				flexOptions={{ alignItems: 'center', justifyContent: 'flex-end' }}
			>
				<Button variant='filled' size={{ width: 80 }}>
					Play
				</Button>
			</FlexContainer>
		</Card>
	)
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = { size: { width: 320, height: 376 } }
