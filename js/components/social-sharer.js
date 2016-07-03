import React from 'react';
import ReactDOM from 'react-dom';
import { block } from 'bem-class';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');

export default class SocialSharer extends React.Component {

	render() {

		let social = block('social-sharer');
		let title = social.element('title');
		let icons = social.element('icons');
		let link = social.element('link');

		let url = window.location.href

		return (
			<div className={social}>
				<p className={title}>Share</p>
				<div className={icons}>
					<FacebookShareButton url={url}>
						<FacebookIcon size={32}/>
					</FacebookShareButton>
					<GooglePlusShareButton url={url}>
						<GooglePlusIcon size={32}/>
					</GooglePlusShareButton>
					<LinkedinShareButton url={url} title="Title">
						<LinkedinIcon size={32}/>
					</LinkedinShareButton>
					<TwitterShareButton url={url} title="Title">
						<TwitterIcon size={32}/>
					</TwitterShareButton>
				</div>
			</div>
		)
	}
}