import createEmojiPlugin from 'draft-js-emoji-plugin';
import './emoji.css'

export const emojiPlugin = createEmojiPlugin();

export const { EmojiSuggestions } = emojiPlugin;