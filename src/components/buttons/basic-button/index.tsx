import { Button } from "@radix-ui/themes";

import type { IProps } from "./types";

export const BasicButton: React.FC<IProps> = ({
  text,
  outBoxClassNames,
  classNames,
}) => {
  return (
    <div className={`${outBoxClassNames} p-1 cursor-pointer`}>
      <Button
        className={`block p-0 h-full w-full justify-normal text-center text-white border border-solid rounded-none cursor-pointer font-normal ${classNames}`}
      >
        {text}
      </Button>
    </div>
  );
};
