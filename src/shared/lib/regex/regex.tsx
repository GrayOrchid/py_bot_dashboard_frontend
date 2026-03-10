export const REGEX = {
  IS_EMPTY: /^\s*$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  HAS_HTML_TAGS: /<[^>]*>?/g,
  HAS_LETTERS: /[a-zA-Zа-яА-ЯёЁ]/,
  ONLY_NUMBERS: /^\d+$/
};