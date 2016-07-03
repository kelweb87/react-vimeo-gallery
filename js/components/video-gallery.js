import React from 'react';
import ReactDOM from 'react-dom';
import { block } from 'bem-class';
import { videos } from '../../data/interviews';
import GalleryItem from './gallery-item';
import 'whatwg-fetch';

export default class VideoGallery extends React.Component {

	constructor () {
		super();
		this.state = {
			activeGroup: 0,
			activeGroupLimit: 0
		}
	}

	componentDidMount () {

		if (this.refs.gallery && this.refs.wrapper) {
			this.setState({
				activeGroupLimit: this.refs.gallery.scrollWidth / this.refs.wrapper.offsetWidth
			});
		}

		let resizeTimer;

		window.addEventListener('resize', () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				this.setState({
					activeGroupLimit: this.refs.gallery.scrollWidth / this.refs.wrapper.offsetWidth
				});
			}, 500)
		})

	}

	moveLeft = () => {
		if (this.state.activeGroup !== 0) {
			this.setState({
				activeGroup: this.state.activeGroup - 1
			})
		}
	};

	moveRight = () => {
		if (this.state.activeGroup <= this.state.activeGroupLimit - 2) {
			this.setState({
				activeGroup: this.state.activeGroup + 1
			})
		}
	};

	getStyle () {

		let style = {};

		if (this.refs.gallery && this.refs.wrapper) {
			let translateX = (this.refs.wrapper.offsetWidth * this.state.activeGroup);
			style.transform = `translateX(-${translateX}px)`;
		}

		return style;

	}

	renderItems () {
		return (
			videos.map((video, key) => {
				return (
					<GalleryItem image={video.image} title={video.title} summary={video.summary} vimeoID={video.vimeoID} length={video.length} onClick={this.props.onClick} order={key + 1}/>
				);
			})
		);
	};

	render() {

		let carousel = block('carousel');
		let gallery = carousel.element('gallery');
		let arrow = carousel.element('arrow');

		return (
			<div className="gallery-wrapper">
				<span className={`${arrow} left`}><img onClick={this.moveLeft} src="images/circle-left.svg" /></span>
				<div className={carousel} ref="wrapper">
					<div className={gallery} style={this.getStyle()} ref="gallery">
						{this.renderItems()}
					</div>
				</div>
				<span className={`${arrow} right`}><img onClick={this.moveRight} src="images/circle-right.svg" /></span>
			</div>
		)
	};
}