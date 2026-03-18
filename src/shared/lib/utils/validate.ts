import { REGEX } from "../regex/regex";

export const validateValue = (val: string, rules: any): string | null => {
  if (REGEX.HAS_HTML_TAGS.test(val)) return 'input.XSSSCript';
  
  if (rules.isEmpty && !val.trim()) return 'input.isEmpty';
  if (rules.isEmail && !REGEX.EMAIL.test(val)) return 'input.invalidMail';
  if (rules.onlyNumbers && !REGEX.ONLY_NUMBERS.test(val)) return 'input.onlyNumbers';
  
  return null;
};