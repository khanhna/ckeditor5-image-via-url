/**
 * @module image-url-embed/imageViaUrlregistry
 */

/* globals console */

// import mediaPlaceholderIcon from '../theme/icons/media-placeholder.svg';
// import TooltipView from '@ckeditor/ckeditor5-ui/src/tooltip/tooltipview';
// import IconView from '@ckeditor/ckeditor5-ui/src/icon/iconview';
// import Template from '@ckeditor/ckeditor5-ui/src/template';
// import { attachLinkToDocumentation } from '@ckeditor/ckeditor5-utils/src/ckeditorerror';

// const mediaPlaceholderIconViewBox = '0 0 64 42';

/**
 * A bridge between the raw image content provider definitions and the editor view content.
 *
 * It helps translating image URLs to corresponding {@link module:engine/view/element~Element view elements}.
 *
 * Mostly used by the {@link module:media-embed/mediaembedediting~MediaEmbedEditing} plugin.
 */
export default class ImageViaUrlRegistry {
	/**
	 * Creates an instance of the {@link module:image-url-embed/imageViaUrlregistry~ImageViaUrlRegistry} class.
	 *
	 * @param {module:utils/locale~Locale} locale The localization services instance.
	 * @param {module:image-via-url-embed/imageviaurlembed~MediaEmbedConfig} config The configuration of the image embed feature.
	 */
	constructor( locale ) {
		/**
		 * The locale {@link module:utils/locale~Locale} instance.
		 *
		 * @member {module:utils/locale~Locale}
		 */
		this.locale = locale;
	}

	/**
	 * Checks whether the passed URL is representing a certain image type allowed in the editor.
	 *
	 * but will return true anyway, lolll
	 * @param {String} url The URL to be checked
	 * @returns {Boolean}
	 */
	hasImageUrl( url ) {
		return true;
	}

	/**
	 * Returns a `Image` instance for the given URL.
	 *
	 * @protected
	 * @param {String} url The URL of the image.
	 * @returns {module:image-via-url-embed/imageviaurlregistry~Media|null} The `Image` instance or `null` when there is none.
	 */
	_getMedia( url ) {
		if ( !url ) {
			return new ImageViaUrl( this.locale );
		}

		return null;
	}
}

/**
 * Represents image defined by the provider configuration.
 *
 * It can be rendered to the {@link module:engine/view/element~Element view element} and used in the editing or data pipeline.
 *
 * @private
 */
class ImageViaUrl {
	constructor( locale, url ) {
		/**
		 * The URL this Image instance represents.
		 *
		 * @member {String}
		 */
		this.url = this._getValidUrl( url.trim() );

		/**
		 * Shorthand for {@link module:utils/locale~Locale#t}.
		 *
		 * @see module:utils/locale~Locale#t
		 * @method
		 */
		this._t = locale.t;
	}

	/**
	 * Returns the full URL to the specified image.
	 *
	 * @param {String} url The URL of the image.
	 * @returns {String|null}
	 */
	_getValidUrl( url ) {
		if ( !url ) {
			return null;
		}

		if ( url.match( /^https?/ ) ) {
			return url;
		}

		return 'https://' + url;
	}
}
