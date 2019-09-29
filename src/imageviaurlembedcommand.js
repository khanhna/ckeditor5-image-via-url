/**
 * @module image-via-url-embed/imageviaurlembedcommand
 */

import Command from '@ckeditor/ckeditor5-core/src/command';

/**
 * The insert image via url command.
 *
 * The command is registered by the {@link module:image-via-url-embed/imageviaurlembedediting~MediaEmbedEditing} as `'imageViaUrlEmbed'`.
 *
 * To insert image at the current selection, execute the command and specify the URL:
 *
 *		editor.execute( 'imageViaUrlEmbed', 'http://url.to.the/image' );
 *
 * @extends module:core/command~Command
 */
export default class ImageViaUrlEmbedCommand extends Command {
	/**
	 * @inheritDoc
	 */
	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const schema = model.schema;
		const position = selection.getFirstPosition();

		let parent = position.parent;

		if ( parent != parent.root ) {
			parent = parent.parent;
		}

		this.isEnabled = schema.checkChild( parent, 'image' );
	}

	/**
	 * Executes the command:
	 *
	 * 
	 * * inserts the new image into the editor and puts the selection around it.
	 *
	 * @fires execute
	 * @param {String} url The URL of the image.
	 */
	execute( url ) {
		this.editor.model.change( writer => {
			const imageElement = writer.createElement( 'image', {
				src: url
			} );

			// Insert the image in the current selection location.
			this.editor.model.insertContent( imageElement, this.editor.model.document.selection );
		} );
	}
}

