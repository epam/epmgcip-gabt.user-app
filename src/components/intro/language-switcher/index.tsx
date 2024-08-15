import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { localeLiterals } from "../../../constants/local-literals";

type Locale = "en" | "ru";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  useEffect(() => {
    setIsMounted(true);
    const locale = pathname.split("/")[1] as Locale;
    if (locale === "en" || locale === "ru") {
      setCurrentLocale(locale);
    }
  }, [pathname]);

  const switchLocale = (locale: Locale) => {
    if (isMounted) {
      const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
      router.push(newPathname);
      setCurrentLocale(locale);
    }
  };

  if (!isMounted) {
    return null;
  }

  const getLanguageName = (locale: Locale): string => {
    return localeLiterals.languages[locale];
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          {getLanguageName(currentLocale)} <span>▼</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        {currentLocale !== "en" && (
          <DropdownMenu.Item onSelect={() => switchLocale("en")}>
            {localeLiterals.dropdownItems.en}
          </DropdownMenu.Item>
        )}
        {currentLocale !== "ru" && (
          <DropdownMenu.Item onSelect={() => switchLocale("ru")}>
            {localeLiterals.dropdownItems.ru}
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LocaleSwitcher;
