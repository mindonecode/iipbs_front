import { type UseFormReturn } from "react-hook-form";
import {
  IconFinder,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
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

export function BaseBottomMenuForm({
  form,
}: {
  form: UseFormReturn<MenuFormData>;
}) {
  const handleIconClick = (icon: string) => {
    form.setValue("iconNm", icon);
  };

  return (
    <>
      <TableRow>
        <TableHead>메뉴 서브명</TableHead>
        <TableCell className="border">
          <FormField
            control={form.control}
            name="menuSubKornNm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value ?? ""}
                    className="!text-[1.3rem]"
                    placeholder="메뉴 서브명을 입력하십시오."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead>메뉴 아이콘</TableHead>
        <TableCell className="border">
          <div className="flex gap-2">
            <div className="h-[3.2rem] w-[21.5rem] cursor-not-allowed rounded-md border border-input bg-form px-3 py-2 text-[1.3rem] opacity-50">
              {form.watch("iconNm")}
            </div>
            <IconFinder handleClick={handleIconClick} />
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead>출력 여부</TableHead>
        <TableCell className="border">
          <FormField
            control={form.control}
            name="otptYn"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup {...field} onValueChange={field.onChange}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Y" id="otptY" />
                        <Label htmlFor="otptY">출력</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="N" id="otptN" />
                        <Label htmlFor="otptN">출력안함</Label>
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
        <TableHead>사용 여부</TableHead>
        <TableCell className="border">
          <FormField
            control={form.control}
            name="useYn"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup {...field} onValueChange={field.onChange}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Y" id="useY" />
                        <Label htmlFor="useY">사용</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="N" id="useN" />
                        <Label htmlFor="useN">사용안함</Label>
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
    </>
  );
}
