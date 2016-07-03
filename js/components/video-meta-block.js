import React from 'react';
import ReactDOM from 'react-dom';
import { block } from 'bem-class';

export default class VideoMetaBlock extends React.Component {

	render() {

		let metaBlock = block('video-meta');
		let metaHeader = metaBlock.element('header');
		let metaSub = metaBlock.element('sub-header');

		return(
			<div className={metaBlock}>
				<h1 className={metaHeader}>Titleeeeeeeeeeeeeee</h1>
				<h2 className={metaSub}>Subtitle</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ipsum et dolor elementum, in scelerisque nunc sollicitudin. Curabitur mollis tortor in massa fermentum, vitae eleifend metus ultrices. Etiam id congue sapien. Ut dictum sem ut neque finibus commodo. Donec ac feugiat nisi. Suspendisse sed fringilla.</p>
			</div>
		)
	}
}