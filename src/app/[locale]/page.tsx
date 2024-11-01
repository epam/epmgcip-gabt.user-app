"use client";

import { NextEvents } from "@/src/components/next-events";
import { LatestNews } from "@/src/components/latest-news";
import { ContactsInfo } from "@/src/components/contactsInfo";
import { Intro } from "@/src/components/intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <NextEvents />
      <LatestNews />
      <ContactsInfo />
    </main>
  );
}
