import React from 'react';
import ReactDOM from 'react-dom';
import { block } from 'bem-class';

export default class GalleryItem extends React.Component {

	onClick = () => {
		this.props.onClick(this.props.vimeoID);
	}

	render() {

		let item = block('gallery-item');
		let image = item.element('image');
		let overlay = item.element('overlay')
		let title = item.element('title');
		let summary = item.element('summary');
		let time = item.element('time');
		let link = item.element('link');
		
		return (
			<div className={item}>
				<div className={image}>
					<span className={overlay} onClick={this.onClick}>
						<img src="images/play.png" />
					</span>
					<img src={this.props.image} />
				</div>
				<div className={summary} dangerouslySetInnerHTML={{ __html: this.props.summary }}></div>
				<span className={time}>{this.props.length}</span>
				<span className={link} onClick={this.onClick}>
					Click to watch
				</span>
			</div>
		)
	}
}