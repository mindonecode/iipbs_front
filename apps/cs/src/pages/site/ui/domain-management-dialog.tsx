"use client";

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
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  DialogFooter,
  DialogClose,
} from "@common/components";

export type Domain = {
  id: number;
  domainUrl: string;
  isRepresentative: boolean;
  isActive: "true" | "false";
};

type DomainManagementDialogProps = {
  triggerDisabled?: boolean;
  handleSave: (rows: Domain[]) => void;
};

function DomainManagementDialog({
  triggerDisabled,
  handleSave,
}: DomainManagementDialogProps) {
  const [rows, setRows] = useState<Domain[]>([]);
  const [rowSelection, setRowSelection] = useState<Domain["id"][]>([]);

  const onSave = () => {
    handleSave(rows);
  };

  const handleAddDomain = () => {
    const newDomain: Domain = {
      id: Date.now(),
      domainUrl: "",
      isRepresentative: rows.length === 0,
      isActive: "true",
    };
    setRows([...rows, newDomain]);
  };

  const handleDeleteDomain = () => {
    const filteredRows = rows.filter((row) => !rowSelection.includes(row.id));
    const hasRepresentative = filteredRows.some((row) => row.isRepresentative);

    let updatedRows = filteredRows;
    if (!hasRepresentative && filteredRows.length > 0) {
      updatedRows = filteredRows.map((row, index) =>
        index === 0 ? { ...row, isRepresentative: true } : row,
      );
    }

    setRows(updatedRows);
    setRowSelection([]);
  };

  const handleDomainUrlChange = (id: number, value: string) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, domainUrl: value } : row)),
    );
  };

  const handleRepresentativeChange = (id: number) => {
    setRows(
      rows.map((row) => ({
        ...row,
        isRepresentative: row.id === id,
      })),
    );
  };

  const handleActiveChange = (id: number, value: "true" | "false") => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, isActive: value } : row)),
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
        <Button disabled={triggerDisabled}>도메인 관리</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>도메인 관리</DialogTitle>
        </DialogHeader>
        <div className="mb-4 flex justify-end gap-2">
          <Button size="sm" color="white" onClick={handleAddDomain}>
            항목 추가
          </Button>
          <Button
            size="sm"
            color="red"
            onClick={handleDeleteDomain}
            disabled={rowSelection.length === 0}
          >
            항목 삭제
          </Button>
        </div>
        <div className="card card-border">
          <Table variant="secondary">
            <colgroup>
              <col width="8%" />
              <col width="12%" />
              <col width="40%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <TableHeader>
              <TableRow>
                <TableHead>NO</TableHead>
                <TableHead>선택</TableHead>
                <TableHead>도메인URL</TableHead>
                <TableHead>대표URL</TableHead>
                <TableHead>사용여부</TableHead>
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
                      value={row.domainUrl}
                      onChange={(e) =>
                        handleDomainUrlChange(row.id, e.target.value)
                      }
                      className="!text-[1.3rem]"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={row.isRepresentative}
                      onCheckedChange={() => handleRepresentativeChange(row.id)}
                      className="cursor-pointer"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Select
                      value={row.isActive}
                      onValueChange={(value: "true" | "false") =>
                        handleActiveChange(row.id, value)
                      }
                    >
                      <SelectTrigger className="mx-auto w-[100px]">
                        <SelectValue placeholder="선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">예</SelectItem>
                        <SelectItem value="false">아니오</SelectItem>
                      </SelectContent>
                    </Select>
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

export { DomainManagementDialog };
