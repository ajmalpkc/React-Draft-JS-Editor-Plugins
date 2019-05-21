import React, { Component } from 'react';

import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';

import {
    HeadlineTwoButton,
    BlockquoteButton,
    CodeBlockButton,
    UnorderedListButton
} from 'draft-js-buttons';

import './side-toolbar.css';

export const sideToolbarPlugin = createSideToolbarPlugin();

const { SideToolbar } = sideToolbarPlugin;

export default class CustomSideToolbarEditor extends Component {

    render() {
        return (
            <SideToolbar>
                {
                    // may be use React.Fragment instead of div to improve perfomance after React 16
                    (externalProps) => (
                        <div>
                            <HeadlineTwoButton {...externalProps} />
                            <BlockquoteButton {...externalProps} />
                            <CodeBlockButton {...externalProps} />
                            <UnorderedListButton {...externalProps} />
                        </div>
                    )
                }
            </SideToolbar>
        );
    }
}