import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { localeLiterals } from "@/src/constants/local-literals";
import arrowIcon from "@/public/arrow.svg";
import { Locale } from "@/src/constants/locales";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>(Locale.UZ);

  useEffect(() => {
    setIsMounted(true);
    const savedLocale = localStorage.getItem("preferredLocale") as Locale;
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    } else {
      const locale = pathname.split("/")[1] as Locale;
      if (Object.values(Locale).includes(locale)) {
        setCurrentLocale(locale);
      } else {
        setCurrentLocale(Locale.UZ);
      }
    }
  }, [pathname]);

  const switchLocale = (locale: Locale) => {
    if (isMounted) {
      const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
      router.push(newPathname);
      setCurrentLocale(locale);
      localStorage.setItem("preferredLocale", locale);
    }
  };

  if (!isMounted) return null;

  const getLanguageName = (locale: Locale): string => {
    return localeLiterals.languages[locale];
  };

  const buttonStyle = (locale: Locale) => ({
    textDecoration: currentLocale === locale ? "none" : "none",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: "8px",
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2"
          style={buttonStyle(currentLocale)}
        >
          {getLanguageName(currentLocale)}{" "}
          <img src={arrowIcon.src} style={{ width: "12px", height: "10px" }} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        style={{
          marginTop: "10px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ddd",
          padding: "20px",
        }}
      >
        {currentLocale !== Locale.UZ && (
          <DropdownMenu.Item
            onSelect={() => switchLocale(Locale.UZ)}
            style={{
              ...buttonStyle(Locale.UZ),
              border: "none",
              background: "none",
              outline: "none",
              padding: "8px",
            }}
          >
            {localeLiterals.dropdownItems[Locale.UZ]}
          </DropdownMenu.Item>
        )}
        {currentLocale !== Locale.EN && (
          <DropdownMenu.Item
            onSelect={() => switchLocale(Locale.EN)}
            style={{
              ...buttonStyle(Locale.EN),
              border: "none",
              background: "none",
              outline: "none",
              padding: "8px",
            }}
          >
            {localeLiterals.dropdownItems[Locale.EN]}
          </DropdownMenu.Item>
        )}
        {currentLocale !== Locale.RU && (
          <DropdownMenu.Item
            onSelect={() => switchLocale(Locale.RU)}
            style={{
              ...buttonStyle(Locale.RU),
              border: "none",
              background: "none",
              outline: "none",
              padding: "8px",
            }}
          >
            {localeLiterals.dropdownItems[Locale.RU]}
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LocaleSwitcher;
