"use client";

import { ContactsInfo } from "@/src/components/contactsInfo";
import { Intro } from "@/src/components/intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <ContactsInfo />
    </main>
  );
}
