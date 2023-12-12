import './style.scss';

import React, { useState } from 'react';

function LangButton() {
  const [lang, setLang] = useState<string>('Eng');

  function handleClick(): void {
    if (lang === 'Eng') {
      setLang('Рус');
    } else {
      setLang('Eng');
    }
  }

  return (
    <button className="lang-btn" type="button" onClick={handleClick}>
      {lang}
    </button>
  );
}

export default LangButton;
