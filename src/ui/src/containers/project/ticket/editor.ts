import { config } from './../../../../config';
import * as ReactQuill from 'react-quill';

const ImageUpload = require('quill-image-upload').ImageUpload;
const ImageDrop = require('quill-image-drop-module').ImageDrop;

ReactQuill.Quill.register('modules/imageUpload', ImageUpload);
ReactQuill.Quill.register('modules/imageDrop', ImageDrop);
// tslint:disable-next-line
ReactQuill.Quill.register('modules/imageResize', require('quill-image-resize-module-react').default);

export const modules = {
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
		['link', 'image'],
		['clean'],
	],
	imageDrop: true,
	imageResize: {
		parchment: ReactQuill.Quill.import('parchment'),
		handleStyles: {
			backgroundColor: '#FFF',
			borderRadius: 5,
		}
	},
	imageUpload: {
		url: `https://api.imgbb.com/1/upload?key=${config.uploaderKey}`,
		method: 'POST',
		name: 'image',
		callbackOK: (serverResponse: any, next: any) => {
			next(serverResponse.data.display_url);
		},
	},
}
