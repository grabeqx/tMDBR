import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TmdbrCard from './TmdbrCard';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: 1100
	}
});

function CardGrid(props) {
	const classes = props.classes;
	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				{props.items.map((item) => (
					<Grid key={item.id} item xs={4}>
						<TmdbrCard item={item} overviewMaxLength="90" imgServ={props.imgServ}/>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

CardGrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGrid);