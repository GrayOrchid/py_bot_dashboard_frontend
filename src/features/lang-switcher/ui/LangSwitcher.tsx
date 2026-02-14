import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui';
import './langSwitcher.scss'

 const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { value: 'ru', label: 'Русский', icon: '🇷🇺' },
    { value: 'en', label: 'English', icon: '🇺🇸' },
  ];

  const handleChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='lang-switcher'>
      <Select
        options={languages}
        value={i18n.language}
        onChange={handleChange}
      />
    </div>
  );
};

export default LangSwitcher