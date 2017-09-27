import React from 'react';
import FavoriteIcon from 'material-ui-icons/Favorite';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/actions.js';

class FavoriteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    addToFavorites() {
        this.props.addToFavorites(this.props.movie);
    }

    removeFromFavorites() {
        this.props.removeFromFavorites(this.props.movie.id);
    }

    render() {
        return (
            <div>
                {this.props.inFavorites == (-1) ?
                <IconButton aria-label="Add to favorites" color="primary" onClick={this.addToFavorites.bind(this)}>
                    <FavoriteIcon />
                </IconButton>
                    :
                <IconButton aria-label="Add to favorites" color="accent" onClick={this.removeFromFavorites.bind(this)}>
                    <FavoriteIcon />
                </IconButton>
                }
            </div>
        )
    }
}

export default connect(
    null, 
    { addToFavorites, removeFromFavorites }
)(FavoriteButton);
