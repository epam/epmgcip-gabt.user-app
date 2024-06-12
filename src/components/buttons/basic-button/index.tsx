import { Button } from "@radix-ui/themes";

import type { Props } from "./types";

export const BasicButton = ({ text, outBoxClassnames, classnames }: Props) => {
  return (
    <div className={`${outBoxClassnames} p-1 cursor-pointer`}>
      <Button
        className={`block p-0 h-full w-full justify-normal text-center border border-solid rounded-none cursor-pointer font-normal ${classnames}`}
      >
        {text}
      </Button>
    </div>
  );
};
