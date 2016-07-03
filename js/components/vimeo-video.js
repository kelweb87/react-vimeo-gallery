import React from 'react';
import ReactDOM from 'react-dom';
import { block } from 'bem-class';

export default class VimeoVideo extends React.Component {

	constructor() {
		super();
	}

	render() {

		const videoSrc = `https://player.vimeo.com/video/${this.props.videoID}?title=0&portrait=0&badge=0&byline=0&color=D11241`

		return (
			<div className="video-wrapper">
				<iframe src={videoSrc} className="player" frameborder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
			</div>
		)
	}
}