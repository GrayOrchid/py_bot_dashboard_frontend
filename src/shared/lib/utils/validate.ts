import { REGEX } from "../regex/regex";

export const validateValue = (val: string, rules: any): string | null => {
  if (REGEX.HAS_HTML_TAGS.test(val)) return 'HTML запрещен';
  
  if (rules.isEmpty && !val.trim()) return 'Поле не может быть пустым';
  if (rules.isEmail && !REGEX.EMAIL.test(val)) return 'Неверный email';
  if (rules.onlyNumbers && !REGEX.ONLY_NUMBERS.test(val)) return 'Только цифры';
  
  return null;
};