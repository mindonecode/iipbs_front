import { useState } from "react";
import { cn } from "../../lib";
import { Button } from "../button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Input } from "../input";
import iconNames from "./data";

type IconFinderProps = {
  handleClick?: (icon: string) => void;
};

const IconFinder = ({ handleClick }: IconFinderProps) => {
  const [selectedIcon, setSelectedIcon] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filteredIconNames, setFilteredIconNames] = useState(iconNames);

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
    handleClick?.(icon);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredIconNames(iconNames.filter((icon) => icon.includes(value)));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="leading-none">
          <i className="diveicon di-search" />
          아이콘 찾기
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[65rem] max-w-[65rem] flex-col items-start overflow-y-auto">
        <div className="sticky top-0 z-10 w-full bg-background">
          <DialogHeader className="w-full">
            <DialogTitle className="-mt-6 flex items-center justify-between bg-background pt-6">
              아이콘 찾기
              <DialogClose asChild>
                <button className="flex size-6 items-center justify-center rounded-full">
                  <i className="diveicon di-x text-base text-muted-foreground" />
                </button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            className="mt-6 !text-[1.3rem] text-foreground"
            placeholder="아이콘 이름 검색"
          />
        </div>
        <div className="grid grid-cols-5 gap-6 text-[2.4rem]">
          {filteredIconNames.map((icon) => (
            <IconItem
              key={icon}
              icon={icon}
              selectedIcon={selectedIcon}
              handleClick={handleIconClick}
            />
          ))}
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
      <i className={`diveicon di-${icon} text-foreground`} />
      <span className="text-center text-[1.2rem] text-foreground">{icon}</span>
    </div>
  );
};

export { IconFinder };
