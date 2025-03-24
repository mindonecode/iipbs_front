import { useState } from "react";
import { useConfirm } from "@frontend-opensource/use-react-hooks";
import { type UseFormReturn } from "react-hook-form";
import { Button } from "@common/components";
import { Form } from "@/shared/ui/form";
import { ConfirmDialog } from "@/shared/ui/confirm-dialog";
import { MENU_TYPE, type MenuFormData } from "../model/menu-interface";
import { BaseMenuForm } from "./base-menu-form";
import { EmptyMenuForm } from "./empty-menu-form";
import { ContentMenuForm } from "./content-menu-form";

interface MenuFormProps {
  form: UseFormReturn<MenuFormData>;
  menuId?: number;
  handleSave: (data: MenuFormData) => Promise<void>;
  handleDelete?: () => Promise<void>;
}

export function MenuForm({
  form,
  menuId,
  handleSave,
  handleDelete,
}: MenuFormProps) {
  const isModifyMode = !!menuId;
  const { confirm } = useConfirm();
  const [onConfirm, setOnConfirm] = useState(false);

  const onSubmit = async (data: MenuFormData) => {
    const confirmMessage = isModifyMode
      ? "수정하시겠습니까?"
      : "저장하시겠습니까?";

    setOnConfirm(true);
    if (await confirm(confirmMessage)) {
      setOnConfirm(false);
      handleSave(data);
    }
    setOnConfirm(false);
  };

  const onDelete = async () => {
    setOnConfirm(true);
    if (await confirm("삭제하시겠습니까?")) {
      setOnConfirm(false);
      handleDelete?.();
    }
    setOnConfirm(false);
  };

  const menuType = form.watch("menuLnkgTypeCd");

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="card card-border">
            <div className="card-header">
              <h3 className="text-2xl font-medium text-label">
                메뉴 등록/수정
              </h3>
            </div>
            <div className="card">
              <BaseMenuForm form={form} menuId={menuId} />
              <div className="-mt-[0.1rem]">
                {renderMenuTypeComponent(menuType, form)}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 pb-12 pt-10">
            <Button size="lg" type="submit">
              저장
            </Button>
            {isModifyMode && (
              <Button size="lg" color="red" type="button" onClick={onDelete}>
                삭제
              </Button>
            )}
          </div>
        </form>
      </Form>
      <ConfirmDialog open={onConfirm} />
    </>
  );
}

function renderMenuTypeComponent(
  menuType: string,
  form: UseFormReturn<MenuFormData>,
) {
  switch (menuType) {
    case MENU_TYPE.EMPTY:
      return <EmptyMenuForm form={form} />;
    case MENU_TYPE.CONTENTS:
      return <ContentMenuForm form={form} />;
    default:
      return null;
  }
}
