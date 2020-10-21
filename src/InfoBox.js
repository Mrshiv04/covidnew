import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({ title, cases, isRed, active, total, ...props }) {
	return (
		<Card
			onClick={props.onClick}
			className={`infoBox ${active && 'infoBox--selected'} `}
		>
			<CardContent>
				<Typography color='textSecondary' className='infoBox-title'>
					{title}
				</Typography>
				<h2 className={'infoBox_cases'}>{cases}</h2>
				<Typography color='textSecondary' className='infoBox_total'>
					{total} Total
				</Typography>
			</CardContent>
		</Card>
	);
}

export default InfoBox;
