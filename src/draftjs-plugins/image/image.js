import createImagePlugin from 'draft-js-image-plugin'

import createDragNDropUploadPlugin from '@mikeljames/draft-js-drag-n-drop-upload-plugin';
import './image.css';

import mockUpload from './mockUpload';

import { decorator } from '../index';

export const imagePlugin = createImagePlugin({ decorator });

export const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: mockUpload,
  addImage: imagePlugin.addImage,
});