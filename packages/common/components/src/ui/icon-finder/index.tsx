import { Button } from "../button";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";
import iconNames from "./data";

const IconFinder = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>아이콘 찾기</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[65rem] max-w-[65rem] overflow-y-auto p-12">
        <div className="py-4">
          <div className="grid grid-cols-5 gap-10 text-[2.4rem]">
            {iconNames.map((icon) => (
              <IconItem key={icon} icon={icon} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const IconItem = ({ icon }: { icon: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <i className={`diveicon di-${icon}`} />
      <span className="text-center text-[1.2rem]">{icon}</span>
    </div>
  );
};

export { IconFinder };
