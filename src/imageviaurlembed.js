import ImageViaUrlEmbedEditing from './imageviaurlembedediting';
import ImageViaUrlEmbedUI from './imageviaurlembedui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

//import '../theme/mediaembed.css';

export default class ImageViaUrlEmbed extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ImageViaUrlEmbedEditing, ImageViaUrlEmbedUI, Widget ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageViaUrlEmbed';
	}
}