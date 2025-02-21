import "./file-search.css";

import { Input } from "../input";
import { cn } from "../../lib/utils";
import { combineFileName, validFileType } from "./utils";

type FileSearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  files?: ReadonlyArray<File>;
};

export function FileSearch({
  id,
  className,
  files,
  ...props
}: FileSearchProps) {
  return (
    <div className={cn("file-search-container", className)}>
      <Input id={id} type="file" className="sr-only" {...props} />
      <div className="file-search-preview">
        {files?.filter(validFileType).map(combineFileName).join(", ")}
      </div>
      <label htmlFor={id} className="file-search-label">
        파일 선택
      </label>
    </div>
  );
}
