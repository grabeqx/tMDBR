import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TmdbrCard from './TmdbrCard';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 30
	}
});

function CardGrid(props) {
	const classes = props.classes;
	const grid = parseInt(props.grid);
	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				{props.items.map((item) => (
					<Grid item xs={grid}>
						<TmdbrCard key={item.id} item={item} overviewMaxLength="90" imgServ={props.imgServ}/>
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