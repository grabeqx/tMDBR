import React from 'react';
import FavoriteIcon from 'material-ui-icons/Favorite';
import IconButton from 'material-ui/IconButton';

export const FavoriteButton = (props) => {
	return (
		<div>
			{props.inFavorites == (-1) ?
			<IconButton aria-label="Add to favorites" color="primary" onClick={() => props.addToFavorites(props.item)}>
				<FavoriteIcon />
			</IconButton>
				:
			<IconButton aria-label="Add to favorites" color="accent" onClick={() => props.removeFromFavorites(props.item.id)}>
				<FavoriteIcon />
			</IconButton>
			}
		</div>
	)
}