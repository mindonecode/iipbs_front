import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@common/components";
import { ENDPOINT } from "@/shared/config/api";
import { CodeApi } from "../api/code-service";

type CodeSelectProps = {
  upCd: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

function CodeSelect({ upCd, defaultValue, ...props }: CodeSelectProps) {
  const { data: code } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.CODE, upCd],
    queryFn: () => CodeApi.getCode(upCd),
    enabled: !!upCd,
  });

  const defaultValueText =
    code?.find((item) => item.lwpoCd === defaultValue)?.lwpoCdNm ?? "선택";

  return (
    <Select {...props}>
      <SelectTrigger className="w-[12rem]">
        <SelectValue placeholder={defaultValueText} />
      </SelectTrigger>
      <SelectContent>
        {code?.map((item) => (
          <SelectItem key={item.lwpoCd} value={item.lwpoCd}>
            {item.lwpoCdNm}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { CodeSelect };
