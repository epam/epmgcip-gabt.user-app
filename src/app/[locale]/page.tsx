"use client";

import {useTranslations} from "use-intl";

export default function Home() {

  const t = useTranslations("Index");
  return (
    <main>
      <p>{t('title')}</p>
      <p>{t('description')}</p>
    </main>
  );
}
