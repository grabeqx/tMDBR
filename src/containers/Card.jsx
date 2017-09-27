import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import CONFIG from '../constants/config.js';
import FavoriteButton from '../components/FavoriteButton';

const styles = {
	media: {
		height: 510,
	},
};



function TmdbrCard(props) {;
	const classes = props.classes;
	const item = props.item;
	const overwiew = item.overview.slice(0, props.overviewMaxLength) + "...";
	return (
		<Card elevation={2}>
			<CardMedia
				className={classes.media}
				image={CONFIG.IMGSERV_S + item.poster_path}
				title="Contemplative Reptile"
			/>
			<CardContent>
				<Typography type="headline" component="h3">
				{item.title}
				</Typography>
				<Typography component="p">
				{overwiew}
				</Typography>
			</CardContent>
			<CardActions>
				<FavoriteButton movie={item} inFavorites={props.inFavorites}/>
				<Link to={`/details/${item.id}`}>
					<Button dense color="primary" className={classes.button}>
						More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

TmdbrCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TmdbrCard);