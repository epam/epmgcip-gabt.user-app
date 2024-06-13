"use client";

import {useTranslations} from "use-intl";

export default function Home() {

  const t = useTranslations("Index");
  return (
    <main>
      <p>uz-gabt-webapp  {t('title')}</p>
    </main>
  );
}
