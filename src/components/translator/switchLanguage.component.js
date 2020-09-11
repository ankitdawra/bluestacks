import React from 'react';
import { useTranslation } from 'react-i18next';

import '../../styles/switch-language.scss';

function SwitchLanguage() {
  const { t, i18n } = useTranslation();
  const selectLang = event => {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div className="switch-language">
      <label htmlFor="language-options">{t('SELECT_LANGUAGE')}</label>
      <select
        name="language-options"
        onChange={selectLang}>
        <option value="en">{t('ENGLISH')}</option>
        <option value="sp">{t('SPANISH')}</option>
      </select>
    </div>
  )
}

export default SwitchLanguage;