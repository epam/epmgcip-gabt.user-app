import { useRouter, usePathname } from "next/navigation";
import { FC, RefObject, useEffect, useRef, useState } from "react";
import { localeLiterals } from "@/src/constants/local-literals";
import arrowIcon from "@/public/arrow.svg";
import { Locale } from "@/src/constants/locales";

interface LocaleSwitcherProps {
  isMobile?: boolean;
  localeRef?: RefObject<HTMLDivElement>;
}

const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ isMobile, localeRef }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>(Locale.UZ);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]);

  if (!isMounted) return null;

  const buttonClass = (locale: Locale) =>
    `cursor-pointer p-2 ${currentLocale === locale ? "" : ""}`;

  return (
    <div ref={localeRef}>
      {isMobile ? (
        <div>
          <div className="flex flex justify-between px-10 p-4 border-b border-gray-300">
            {Object.values(Locale).map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  switchLocale(locale);
                }}
                className={`block p-2 ${
                  currentLocale === locale
                    ? "font-bold text-dark-red underline"
                    : ""
                }`}
              >
                {localeLiterals.mobileMenuItems[locale]}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={toggleDropdownVisibility}
            className={`flex items-center gap-2 ${buttonClass(currentLocale)}`}
          >
            {localeLiterals.languages[currentLocale]}
            <img src={arrowIcon.src} className="w-3 h-2" />
          </button>

          {isDropdownVisible && (
            <div
              ref={dropdownRef}
              className="hidden absolute mt-2 right-0 rounded border border-gray-300 p-5 bg-white-text md:block"
            >
              {Object.values(Locale).map(
                (locale) =>
                  currentLocale !== locale && (
                    <button
                      key={locale}
                      onClick={() => {
                        switchLocale(locale);
                        toggleDropdownVisibility();
                      }}
                      className={`block outline-none ${buttonClass(locale)}`}
                    >
                      {localeLiterals.dropdownItems[locale]}
                    </button>
                  )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
