"use client";

import { NextEvents } from "@/src/components/next-events";
import { ContactsInfo } from "@/src/components/contactsInfo";
import { Intro } from "@/src/components/intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <NextEvents />
      <ContactsInfo />
    </main>
  );
}
