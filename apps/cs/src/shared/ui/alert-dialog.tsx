import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  Button,
} from "@common/components/ui";
import { useAlertStore } from "../lib/use-alert-store";

function AlertDialog() {
  const { message, callback, setMessage } = useAlertStore((state) => state);
  const handleOpenChange = () => {
    setMessage("");
    callback?.();
  };
  return (
    <Dialog open={!!message} onOpenChange={handleOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <div className="py-10">
          <p className="text-center text-[1.4rem] text-foreground">{message}</p>
        </div>
        <DialogFooter className="!justify-center">
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { AlertDialog };
