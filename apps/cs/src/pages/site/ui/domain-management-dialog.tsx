import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useConfirm } from "@frontend-opensource/use-react-hooks";
import { useForm, useFieldArray } from "react-hook-form";
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
import { ENDPOINT } from "@/shared/config";
import { DomainApi } from "../api/domain-service";
import {
  domainFormSchema,
  type Domain,
  type DomainFormData,
} from "../model/domain-interface";
import { ConfirmDialog } from "@/shared/ui/confirm-dialog";
import { useAlertStore } from "@/shared/lib/use-alert-store";

type DomainManagementDialogProps = {
  siteId: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  handleSaveDomain?: (rows: Domain[]) => void;
};

function DomainManagementDialog({
  siteId,
  handleSaveDomain,
  ...props
}: DomainManagementDialogProps) {
  const { confirm } = useConfirm();
  const { setMessage: alert } = useAlertStore((state) => state);

  const { data: domainList } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.DOMAINS, props.open],
    queryFn: () => DomainApi.getDomainList({ siteId }),
    select: (data) => {
      const domains = data.content.map((item) => ({
        ...item,
        mode: "U",
      }));

      initialForm();
      return domains;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: (body: Domain[]) => DomainApi.saveDomainList(body),
  });

  const form = useForm<DomainFormData>({
    resolver: zodResolver(domainFormSchema),
    values: {
      domains: domainList ?? [],
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: "domains",
  });

  const [onConfirm, setOnConfirm] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const initialForm = () => {
    form.reset();
    setSelectedRows([]);
  };

  const onSubmit = async (data: DomainFormData) => {
    setOnConfirm(true);
    if (await confirm("저장하시겠습니까?")) {
      setOnConfirm(false);
      await mutateAsync(data.domains);
      handleSaveDomain?.(data.domains);
      alert("저장되었습니다.");
    }
    setOnConfirm(false);
  };

  const handleAddDomain = () => {
    append({
      siteDmnNo: null,
      siteId,
      dmnAddr: "",
      useYn: "Y",
      rprsDmnYn: "N",
      mode: "C",
    });
  };

  const handleSelectAll = () => {
    if (selectedRows.length === fields.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(fields.map((_, index) => index));
    }
  };

  const handleSelectRow = (i: number) => {
    setSelectedRows((prev) =>
      prev.includes(i) ? prev.filter((j) => j !== i) : [...prev, i],
    );
  };

  const handleDeleteDomain = async () => {
    if (selectedRows.length === 0) return;

    const sortedIndices = [...selectedRows].sort((a, b) => b - a);
    sortedIndices.forEach((i) => {
      const field = fields[i];
      if (field?.siteDmnNo) {
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

  const handleChangeRprsDmnYn = (i: number) => {
    fields.forEach((_, j) => {
      if (j === i) return;
      form.setValue(`domains.${j}.rprsDmnYn`, "N");
    });
  };

  const isAllSelected =
    fields.length > 0 && selectedRows.length === fields.length;

  return (
    <>
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button>도메인 관리</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[60rem]" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>도메인 관리</DialogTitle>
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
                <Button type="button" size="sm" onClick={handleAddDomain}>
                  항목 추가
                </Button>
                <Button
                  type="button"
                  size="sm"
                  color="red"
                  onClick={handleDeleteDomain}
                  disabled={selectedRows.length === 0}
                >
                  항목 삭제
                </Button>
              </div>
              <div className="card card-border max-h-[28.5rem] overflow-auto">
                <Table variant="secondary">
                  <colgroup>
                    <col width="10%" />
                    <col width="auto" />
                    <col width="15%" />
                    <col width="25%" />
                  </colgroup>
                  <TableHeader className="sticky -top-[0.6rem]">
                    <TableRow>
                      <TableHead className="!px-0">
                        <Checkbox
                          checked={isAllSelected}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>도메인 주소</TableHead>
                      <TableHead>대표 URL</TableHead>
                      <TableHead>사용여부</TableHead>
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
                              name={`domains.${i}.dmnAddr`}
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
                              name={`domains.${i}.rprsDmnYn`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value === "Y"}
                                      onCheckedChange={(checked) => {
                                        field.onChange(checked ? "Y" : "N");
                                        handleChangeRprsDmnYn(i);
                                      }}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <FormField
                              control={form.control}
                              name={`domains.${i}.useYn`}
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
                                          id={`useY-${i}`}
                                        />
                                        <label htmlFor={`useY-${i}`}>예</label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                          value="N"
                                          id={`useN-${i}`}
                                        />
                                        <label htmlFor={`useN-${i}`}>
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
      <ConfirmDialog open={onConfirm} />
    </>
  );
}

export { DomainManagementDialog };
