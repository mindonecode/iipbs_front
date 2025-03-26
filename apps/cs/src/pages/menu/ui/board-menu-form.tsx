import { type UseFormReturn } from "react-hook-form";
import {
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
import type { MenuFormData } from "../model/menu-interface";
import { BaseBottomMenuForm } from "./base-bottom-menu-form";

export function BoardMenuForm({ form }: { form: UseFormReturn<MenuFormData> }) {
  return (
    <Table variant="secondary">
      <colgroup>
        <col width="20%" />
        <col width="80%" />
      </colgroup>
      <TableBody>
        <TableRow>
          <TableHead>게시판</TableHead>
          <TableCell className="border">
            <div className="h-[3.2rem] w-[21.5rem] cursor-not-allowed rounded-md border border-input bg-form px-3 py-2 text-[1.3rem] opacity-50">
              {form.watch("menuLnkgSn")}
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>연결 형태</TableHead>
          <TableCell className="border">
            <FormField
              control={form.control}
              name="evlUseYn"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      value={field.value ?? ""}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self" id="self" />
                          <Label htmlFor="self">현재창</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="blank" id="blank" />
                          <Label htmlFor="blank">새창</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>메뉴 평가 사용 여부</TableHead>
          <TableCell className="border">
            <FormField
              control={form.control}
              name="evlUseYn"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      value={field.value ?? ""}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Y" id="evlUseY" />
                          <Label htmlFor="evlUseY">사용</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="N" id="evlUseN" />
                          <Label htmlFor="evlUseN">사용안함</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
        </TableRow>

        <BaseBottomMenuForm form={form} />

        <TableRow>
          <TableHead>QR코드</TableHead>
          <TableCell className="border">
            <FormField
              control={form.control}
              name="qrcd"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      value={field.value ?? ""}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Y" id="qrcdY" />
                          <Label htmlFor="qrcdY">사용</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="N" id="qrcdN" />
                          <Label htmlFor="qrcdN">사용안함</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>담당자</TableHead>
          <TableCell className="border">
            <div className="h-[3.2rem] w-[21.5rem] cursor-not-allowed rounded-md border border-input bg-form px-3 py-2 text-[1.3rem] opacity-50">
              {form.watch("menuLnkgSn")}
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
