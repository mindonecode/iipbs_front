import { useState } from "react";
import { Button } from "../button";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";
import { cn } from "../../lib";
import iconNames from "./data";

type IconFinderProps = {
  handleClick: (icon: string) => void;
};

const IconFinder = ({ handleClick }: IconFinderProps) => {
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
    handleClick(icon);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="leading-none">
          <i className="diveicon di-search" />
          아이콘 찾기
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[65rem] max-w-[65rem] overflow-y-auto p-12">
        <div className="py-4">
          <div className="grid grid-cols-5 gap-6 text-[2.4rem]">
            {iconNames.map((icon) => (
              <IconItem
                key={icon}
                icon={icon}
                selectedIcon={selectedIcon}
                handleClick={handleIconClick}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const IconItem = ({
  icon,
  selectedIcon,
  handleClick,
}: {
  icon: string;
  selectedIcon: string;
  handleClick: (icon: string) => void;
}) => {
  return (
    <div
      className={cn(
        "relative flex cursor-pointer flex-col items-center gap-2 rounded-md p-4",
        selectedIcon === icon && "bg-accent",
      )}
      onClick={() => handleClick(icon)}
    >
      <i
        className={cn(
          "diveicon di-check absolute left-4 top-4 text-[1rem] text-primary",
          selectedIcon !== icon && "hidden",
        )}
      />
      <i className={`diveicon di-${icon}`} />
      <span className="text-center text-[1.2rem]">{icon}</span>
    </div>
  );
};

export { IconFinder };
