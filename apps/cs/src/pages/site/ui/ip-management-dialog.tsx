import { useState } from "react";
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
  Checkbox,
  DialogFooter,
  DialogClose,
} from "@common/components";

type IP = {
  id: number;
  ipAddress: string;
  allowed: boolean;
};

type IPManagementDialogProps = {
  triggerDisabled?: boolean;
};

function IPManagementDialog({ triggerDisabled }: IPManagementDialogProps) {
  const [rows, setRows] = useState<IP[]>([]);
  const [rowSelection, setRowSelection] = useState<IP["id"][]>([]);

  const onSave = () => {};

  const handleAddIP = () => {
    const newIP: IP = {
      id: Date.now(),
      ipAddress: "",
      allowed: true,
    };
    setRows([...rows, newIP]);
  };

  const handleDeleteIP = () => {
    const filteredRows = rows.filter((row) => !rowSelection.includes(row.id));
    setRows(filteredRows);
    setRowSelection([]);
  };

  const handleIPAddressChange = (id: number, value: string) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, ipAddress: value } : row)),
    );
  };

  const handleAllowedChange = (id: number, value: boolean) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, allowed: value } : row)),
    );
  };

  const toggleRowSelection = (id: number) => {
    setRowSelection((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={triggerDisabled}>IP 관리</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[60rem]">
        <DialogHeader>
          <DialogTitle>IP 관리</DialogTitle>
        </DialogHeader>
        <div className="mb-4 flex justify-end gap-2">
          <Button size="sm" color="green">
            엑셀 업로드
          </Button>
          <Button size="sm" color="white" onClick={handleAddIP}>
            항목 추가
          </Button>
          <Button
            size="sm"
            color="red"
            onClick={handleDeleteIP}
            disabled={rowSelection.length === 0}
          >
            항목 삭제
          </Button>
        </div>
        <div className="card card-border">
          <Table variant="secondary">
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="55%" />
              <col width="25%" />
            </colgroup>
            <TableHeader>
              <TableRow>
                <TableHead>NO</TableHead>
                <TableHead>선택</TableHead>
                <TableHead>IP 주소</TableHead>
                <TableHead>허용여부</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{idx + 1}</TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={rowSelection.includes(row.id)}
                      onCheckedChange={() => toggleRowSelection(row.id)}
                      className="cursor-pointer"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Input
                      value={row.ipAddress}
                      onChange={(e) =>
                        handleIPAddressChange(row.id, e.target.value)
                      }
                      className="!text-[1.3rem]"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <RadioGroup
                      value={row.allowed ? "true" : "false"}
                      onValueChange={(value) =>
                        handleAllowedChange(row.id, value === "true")
                      }
                      className="flex justify-center"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id={`allow-${row.id}`} />
                        <label htmlFor={`allow-${row.id}`}>예</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id={`deny-${row.id}`} />
                        <label htmlFor={`deny-${row.id}`}>아니오</label>
                      </div>
                    </RadioGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter className="!justify-center">
          <DialogClose asChild>
            <Button size="lg" onClick={onSave}>
              저장
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button size="lg" color="white">
              취소
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { IPManagementDialog };
