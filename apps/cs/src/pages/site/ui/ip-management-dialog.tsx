import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useConfirm } from "@frontend-opensource/use-react-hooks";
import { useForm, useFieldArray, type FieldArrayWithId } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
  RadioGroup,
  RadioGroupItem,
  DialogFooter,
  DialogClose,
  Checkbox,
} from "@common/components";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { ENDPOINT, SITE_ID } from "@/shared/config";
import { IpApi } from "../api/ip-service";
import { ipFormSchema, type IP, type IPFormData } from "../model/ip-interface";
import { ConfirmDialog } from "@/shared/ui/confirm-dialog";
import { useAlertStore } from "@/shared/lib/use-alert-store";

type IPManagementDialogProps = {
  triggerDisabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function IPManagementDialog({
  triggerDisabled,
  ...props
}: IPManagementDialogProps) {
  const { confirm } = useConfirm();
  const { setMessage: alert } = useAlertStore((state) => state);

  useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.IPS, props.open],
    queryFn: () => IpApi.getIpList(),
    select: (data) => {
      const ips = data.content.map((item) => ({
        ...item,
        mode: "U",
      }));
      replace(ips);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: (body: IP[]) => IpApi.saveIpList(body),
  });

  const form = useForm<IPFormData>({
    resolver: zodResolver(ipFormSchema),
  });
  const { fields, append, remove, update, replace } = useFieldArray({
    control: form.control,
    name: "ips",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const onSubmit = async (data: IPFormData) => {
    setIsOpen(true);
    if (await confirm("저장하시겠습니까?")) {
      setIsOpen(false);
      await mutateAsync(data.ips);
      alert("저장되었습니다.");
    }
  };

  const handleAddIP = () => {
    append({
      mngNo: null,
      siteId: SITE_ID,
      ipAddr: "",
      prmYn: "Y",
      mode: "C",
    });
  };

  const handleSelectRow = (i: number) => {
    setSelectedRows((prev) =>
      prev.includes(i) ? prev.filter((j) => j !== i) : [...prev, i],
    );
  };

  const handleDeleteIP = () => {
    selectedRows.forEach((i) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...field } = fields[i] as FieldArrayWithId<IPFormData>;
      if (field.mngNo) {
        update(i, {
          ...field,
          mode: "D",
        });
      } else {
        remove(i);
      }
    });
    setSelectedRows([]);
  };

  return (
    <>
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button disabled={triggerDisabled}>IP 관리</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[60rem]" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>IP 관리</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit(onSubmit)(e);
              }}
            >
              <div className="mb-4 flex justify-end gap-2">
                <Button type="button" size="sm" onClick={handleAddIP}>
                  항목 추가
                </Button>
                <Button
                  type="button"
                  size="sm"
                  color="red"
                  onClick={handleDeleteIP}
                  disabled={selectedRows.length === 0}
                >
                  항목 삭제
                </Button>
              </div>
              <div className="card card-border max-h-[28.5rem] overflow-auto">
                <Table variant="secondary">
                  <colgroup>
                    <col width="10%" />
                    <col width="65%" />
                    <col width="25%" />
                  </colgroup>
                  <TableHeader className="sticky -top-[0.6rem]">
                    <TableRow>
                      <TableHead>선택</TableHead>
                      <TableHead>IP 주소</TableHead>
                      <TableHead>허용여부</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fields.map((field, i) => {
                      if (field.mode === "D") return null;
                      return (
                        <TableRow key={field.id}>
                          <TableCell align="center" className="!px-0">
                            <Checkbox
                              checked={selectedRows.includes(i)}
                              onCheckedChange={() => handleSelectRow(i)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <FormField
                              control={form.control}
                              name={`ips.${i}.ipAddr`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      className="!text-[1.3rem]"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-left" />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <FormField
                              control={form.control}
                              name={`ips.${i}.prmYn`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      value={field.value}
                                      onValueChange={field.onChange}
                                      className="flex justify-center"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                          value="Y"
                                          id={`prmY-${i}`}
                                        />
                                        <label htmlFor={`prmY-${i}`}>예</label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                          value="N"
                                          id={`prmN-${i}`}
                                        />
                                        <label htmlFor={`prmN-${i}`}>
                                          아니오
                                        </label>
                                      </div>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
              <DialogFooter className="!justify-center">
                <Button type="submit" size="lg">
                  저장
                </Button>
                <DialogClose asChild>
                  <Button type="button" size="lg" color="white">
                    취소
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <ConfirmDialog open={isOpen} />
    </>
  );
}

export { IPManagementDialog };
