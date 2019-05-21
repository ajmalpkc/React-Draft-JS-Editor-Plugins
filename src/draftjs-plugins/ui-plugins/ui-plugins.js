import { composeDecorators } from 'draft-js-plugins-editor';
import createAlignmentPlugin from 'draft-js-alignment-plugin';

import createFocusPlugin from 'draft-js-focus-plugin';

import createResizeablePlugin from 'draft-js-resizeable-plugin';

import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import './ui-plugins.css';

export const focusPlugin = createFocusPlugin();
export const resizeablePlugin = createResizeablePlugin();
export const blockDndPlugin = createBlockDndPlugin();
export const alignmentPlugin = createAlignmentPlugin();
export const { AlignmentTool } = alignmentPlugin;

export const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);