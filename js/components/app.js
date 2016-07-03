import React from 'react';
import VimeoVideo from './vimeo-video';
import VideoMetaBlock from './video-meta-block';
import SocialSharer from './social-sharer';
import VideoGallery from './video-gallery';
import { videos } from '../../data/interviews';

export default class App extends React.Component {

	constructor () {
		super();
		this.state = {
			activeVideoID: '168027750'
		}
	}

	updateVideoID = (videoID) => {
		this.setState({
			activeVideoID: videoID
		})
	}

	render() {
		return (
			<div>
				<VimeoVideo videoID={this.state.activeVideoID} />
				<div className={"flex-div"}>
					<VideoMetaBlock />
					<SocialSharer />
				</div>
				<VideoGallery onClick={ this.updateVideoID } />
			</div>
		);
	}
}