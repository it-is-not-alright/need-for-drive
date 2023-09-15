import './lang-btn.scss';

import React, { useState } from 'react';

export default function LangBtn() {
  const [lang, setLang] = useState<string>('Eng');

  function handleOnClick(): void {
    if (lang === 'Eng') {
      setLang('Рус');
    } else {
      setLang('Eng');
    }
  }

  return (
    <button className="lang-btn" type="button" onClick={handleOnClick}>
      {lang}
    </button>
  );
}
