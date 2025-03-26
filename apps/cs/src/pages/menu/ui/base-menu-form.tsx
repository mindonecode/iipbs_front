import { type UseFormReturn } from "react-hook-form";
import {
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@common/components";
import {
  FormItem,
  FormControl,
  FormField,
  FormMessage,
} from "@/shared/ui/form";
import { MENU_TYPE, type MenuFormData } from "../model/menu-interface";

interface BaseMenuFormProps {
  form: UseFormReturn<MenuFormData>;
  menuId?: number;
}

export function BaseMenuForm({ form, menuId }: BaseMenuFormProps) {
  return (
    <Table variant="secondary">
      <colgroup>
        <col width="20%" />
        <col width="80%" />
      </colgroup>
      <TableBody>
        <TableRow>
          <TableHead>메뉴ID</TableHead>
          <TableCell className="border">
            <div className="h-[3.2rem] w-[21.5rem] cursor-not-allowed rounded-md border border-input bg-form px-3 py-2 text-[1.3rem] opacity-50">
              {menuId}
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>메뉴명</TableHead>
          <TableCell className="border">
            <FormField
              control={form.control}
              name="menuKornNm"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="!text-[1.3rem]"
                      placeholder="메뉴명을 입력하십시오."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>메뉴 영문명</TableHead>
          <TableCell className="border">
            <FormField
              control={form.control}
              name="menuEngNm"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ""}
                      className="!text-[1.3rem]"
                      placeholder="메뉴 영문명을 입력하십시오."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>메뉴 유형</TableHead>
          <TableCell className="border">
            <FormField
              control={form.control}
              name="menuLnkgTypeCd"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-4">
                        {Object.entries(MENU_TYPE).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={value}
                              id={`menuType${key}`}
                            />
                            <Label htmlFor={`menuType${key}`}>
                              {key === "EMPTY" && "빈메뉴"}
                              {key === "CONTENTS" && "콘텐츠"}
                              {key === "BOARD" && "게시판"}
                              {key === "INSIDE" && "내부링크"}
                              {key === "OUTSIDE" && "외부링크"}
                              {key === "BOTTOM" && "하단메뉴"}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
