import Image from "next/image";
import Link from "next/link";

import { History_Data } from "@/src/constants/history-page-mock";
import facebook from "@/public/faceIconBlack.svg";
import teleg from "@/public/telegIconBlack.svg";
import insta from "@/public/instaIconBlack.svg";
import { footerLiterals } from "@/src/constants/footer-literals";

const ICON_SIZE: number = 28;

const History = () => {
  const {
    heading,
    descriptionText1,
    descriptionText2,
    descriptionText3,
    descriptionText4,
    avatar,
  } = History_Data;
  return (
    <div className="flex justify-center md:py-20">
      <div className="w-full lg:w-[890px] sm:w-[400px] ">
        <Image src={avatar} alt="Theater image" layout="responsive" />
        <h1 className="text-4xl mt-16">{heading}</h1>
        <p className="mt-8">{descriptionText1}</p>
        <p className="mt-8">{descriptionText2}</p>
        <p className="mt-8">{descriptionText3}</p>
        <p className="mt-8">{descriptionText4}</p>

        <div className="flex gap-4 mt-8">
          <p>Share:</p>
          <Link href={footerLiterals.instagramUrl} target="_blank">
            <div className="">
              <Image
                src={facebook}
                alt="Facebook"
                width={ICON_SIZE}
                height={ICON_SIZE}
                className=""
              />
            </div>
          </Link>
          <Link href={footerLiterals.instagramUrl} target="_blank">
            <div className="">
              <Image
                src={teleg}
                alt="Telegram"
                width={ICON_SIZE}
                height={ICON_SIZE}
                className=""
              />
            </div>
          </Link>
          <Link href={footerLiterals.instagramUrl} target="_blank">
            <div className="">
              <Image
                src={insta}
                alt="Instagram"
                width={ICON_SIZE}
                height={ICON_SIZE}
                className=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
