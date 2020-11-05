import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon className="swipeButtons__repeat"/>
            </IconButton>
            <IconButton>
                <CloseIcon className="swipeButtons__left"/>
            </IconButton>
            <IconButton>
                <StarRateIcon className="swipeButtons__star"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="swipeButtons__right"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon className="swipeButtons__lighting"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
