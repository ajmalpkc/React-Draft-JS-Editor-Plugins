import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import './mention.css';

export const mentionPlugin = createMentionPlugin();

export const { MentionSuggestions } = mentionPlugin;

export { defaultSuggestionsFilter };