import { useConfirm } from "@frontend-opensource/use-react-hooks";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  Button,
  type ButtonProps,
} from "@common/components/ui";

type ConfirmDialogProps = {
  open: boolean;
  confirmButtonProps?: ButtonProps & { label?: string };
  cancelButtonProps?: ButtonProps & { label?: string };
};

function ConfirmDialog({
  open,
  confirmButtonProps,
  cancelButtonProps,
}: ConfirmDialogProps) {
  const { message, onConfirm, onCancel } = useConfirm();
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent aria-describedby={undefined}>
        <div className="py-10">
          <p className="text-center text-[1.4rem]">{message}</p>
        </div>
        <DialogFooter className="!justify-center">
          <DialogClose asChild>
            <Button onClick={onConfirm} {...confirmButtonProps}>
              {confirmButtonProps?.label ?? "확인"}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onCancel} color="white" {...cancelButtonProps}>
              {cancelButtonProps?.label ?? "취소"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { ConfirmDialog };
