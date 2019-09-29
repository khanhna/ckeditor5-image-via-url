/**
 * @module image-url-embed/imageViaUrlembedediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import ImageViaUrlEmbedCommand from './imageviaurlembedcommand';
import ImageViaUrlRegistry from './imageviaurlregistry';

/**
 * The image via url embed editing feature.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageViaUrlEmbedEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageViaUrlEmbedEditing';
	}

	/**
	 * @inheritDoc
	 */
	constructor( editor ) {
		super( editor );

		/**
		 * The image via url registry managing the image via url providers in the editor.
		 *
		 * @member {module:image-via-url-embed/ImageViaUrlRegistry~ImageViaUrlRegistry} #registry
		 */
		this.registry = new ImageViaUrlRegistry( editor.locale );
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const schema = editor.model.schema;
		const t = editor.t;
		const registry = this.registry;

		editor.commands.add( 'imageViaUrlEmbed', new ImageViaUrlEmbedCommand( editor ) );

		// Configure the schema.
		schema.register( 'imageViaUrl', {
			isObject: true,
			isBlock: true,
			allowWhere: '$block',
			allowAttributes: [ 'url' ]
		} );
	}
}
