import { FC, RefObject, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";

import { localeLiterals } from "@/src/constants/local-literals";
import arrowIcon from "@/public/arrow.svg";
import { Locale } from "@/src/constants/locales";

interface ILocaleSwitcherProps {
  isMobile?: boolean;
  localeRef?: RefObject<HTMLDivElement>;
}

const LocaleSwitcher: FC<ILocaleSwitcherProps> = ({ isMobile, localeRef }) => {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>(Locale.UZ);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const savedLocale: Locale | null = localStorage.getItem(
      "preferredLocale"
    ) as Locale;
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    } else {
      const locale: Locale = pathname.split("/")[1] as Locale;
      if (Object.values(Locale).includes(locale)) {
        setCurrentLocale(locale);
      } else {
        setCurrentLocale(Locale.UZ);
      }
    }
  }, [pathname]);

  const switchLocale = (locale: Locale): void => {
    if (isMounted) {
      const newPathname: string = pathname.replace(
        `/${currentLocale}`,
        `/${locale}`
      );
      router.push(newPathname);
      setCurrentLocale(locale);
      localStorage.setItem("preferredLocale", locale);
    }
  };

  const toggleDropdownVisibility = (): void => {
    setIsDropdownVisible((prev: boolean) => !prev);
  };

  const handleClickOutside = (event: MouseEvent): void => {
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

  if (!isMounted) {
    return null;
  }

  const buttonClass = (locale: Locale): string =>
    `cursor-pointer p-2 ${currentLocale === locale ? "font-bold text-dark-red underline" : ""}`;

  return (
    <div ref={localeRef}>
      {isMobile ? (
        <div>
          <div className="flex justify-between px-10 p-4 border-b border-gray-300">
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
            <Image
              src={arrowIcon.src}
              alt="Arrow icon"
              width={12}
              height={8}
              className="w-3 h-2"
            />
          </button>

          {isDropdownVisible && (
            <div
              ref={dropdownRef}
              className="absolute hidden mt-2 right-0 rounded border border-gray-300 p-5 bg-white-text md:block"
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
