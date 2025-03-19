import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  Button,
} from "@common/components/ui";
import { useAlertStore } from "../lib/use-alert-store";

function AlertDialog() {
  const { alertMessage, setAlertMessage } = useAlertStore((state) => state);
  return (
    <Dialog open={!!alertMessage} onOpenChange={() => setAlertMessage("")}>
      <DialogContent aria-describedby={undefined}>
        <div className="py-10">
          <p className="text-center text-[1.4rem]">{alertMessage}</p>
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
