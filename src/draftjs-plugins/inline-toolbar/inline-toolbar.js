import React, { Component } from 'react';

import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';

import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from 'draft-js-buttons';

import './inline-toolbar.css'

class HeadlinesPicker extends Component {
    componentDidMount() {
        setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    onWindowClick = () =>
        // Call `onOverrideContent` again with `undefined`
        // so the toolbar can show its regular content again.
        this.props.onOverrideContent(undefined);

    render() {
        const buttons = [HeadlineTwoButton, HeadlineThreeButton];
        return (
            <div>
                {buttons.map((Button, i) => // eslint-disable-next-line
                    <Button key={i} {...this.props} />
                )}
            </div>
        );
    }
}

class HeadlinesButton extends Component {
    // When using a click event inside overridden content, mouse down
    // events needs to be prevented so the focus stays in the editor
    // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
    onMouseDown = (event) => event.preventDefault()

    onClick = () =>
        // A button can call `onOverrideContent` to replace the content
        // of the toolbar. This can be useful for displaying sub
        // menus or requesting additional information from the user.
        this.props.onOverrideContent(HeadlinesPicker);

    render() {
        return (
            <div onMouseDown={this.onMouseDown} className="headlineButtonWrapper">
                <button onClick={this.onClick} className="headlineButton">
                    H
          </button>
            </div>
        );
    }
}


export const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;

export default class CustomInlineToolbarEditor extends Component {

    render() {
        return (
            <InlineToolbar>
                {
                    // may be use React.Fragment instead of div to improve perfomance after React 16
                    (externalProps) => (
                        <div>
                            <BoldButton {...externalProps} />
                            <ItalicButton {...externalProps} />
                            <UnderlineButton {...externalProps} />
                            <Separator {...externalProps} />
                            <HeadlinesButton {...externalProps} />
                            {/* <UnorderedListButton {...externalProps} /> */}
                            {/* <OrderedListButton {...externalProps} /> */}
                            <BlockquoteButton {...externalProps} />
                            <CodeBlockButton {...externalProps} />
                        </div>
                    )
                }
            </InlineToolbar>
        );
    }
}