import { type UseFormReturn } from "react-hook-form";
import { Table, TableBody } from "@common/components";
import type { MenuFormData } from "../model/menu-interface";
import { BaseBottomMenuForm } from "./base-bottom-menu-form";

export function OutsideMenuForm({
  form,
}: {
  form: UseFormReturn<MenuFormData>;
}) {
  return (
    <Table variant="secondary">
      <colgroup>
        <col width="20%" />
        <col width="80%" />
      </colgroup>
      <TableBody>
        <BaseBottomMenuForm form={form} />
      </TableBody>
    </Table>
  );
}
