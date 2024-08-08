import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { localeLiterals } from "../../../constants/local-literals";
// import { FaChevronDown } from "react-icons/fa";

type Locale = "en" | "ru" | "uz";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>("uz");

  useEffect(() => {
    setIsMounted(true);
    const savedLocale = localStorage.getItem("preferredLocale") as Locale;
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    } else {
      const locale = pathname.split("/")[1] as Locale;
      if (locale === "en" || locale === "ru" || locale === "uz") {
        setCurrentLocale(locale);
      } else {
        setCurrentLocale("uz");
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
        <button className="flex items-center gap-2" style={buttonStyle(currentLocale)}>
          {getLanguageName(currentLocale)}{" "}
          {/* <FaChevronDown style={{ fontSize: "12px" }} /> */}
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
        {currentLocale !== "uz" && (
          <DropdownMenu.Item
            onSelect={() => switchLocale("uz")}
            style={{
              ...buttonStyle("uz"),
              border: "none", 
              background: "none", 
              outline: "none", 
              padding: "8px", 
            }}
          >
            {localeLiterals.dropdownItems.uz}
          </DropdownMenu.Item>
        )}
        {currentLocale !== "en" && (
          <DropdownMenu.Item
            onSelect={() => switchLocale("en")}
            style={{
              ...buttonStyle("en"),
              border: "none", 
              background: "none", 
              outline: "none", 
              padding: "8px", 
            }}
          >
            {localeLiterals.dropdownItems.en}
          </DropdownMenu.Item>
        )}
        {currentLocale !== "ru" && (
          <DropdownMenu.Item
            onSelect={() => switchLocale("ru")}
            style={{
              ...buttonStyle("ru"),
              border: "none",
              background: "none", 
              outline: "none", 
              padding: "8px", 
            }}
          >
            {localeLiterals.dropdownItems.ru}
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LocaleSwitcher;
