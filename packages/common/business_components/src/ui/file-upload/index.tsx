"use client";
import { CloudUpload, Paperclip } from "lucide-react";
import React from "react";
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "./lib/file_upload";
const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
export const FileUpload = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { files: File[]|null, setFiles: (files: File[]|null) => void , fileTypes: string|undefined}
>(({ ...props }) => {
    return (
        <FileUploader
            value={props.files}
            onValueChange={props.setFiles}
            dropzoneOptions={dropZoneConfig}
            acceptName={props?.fileTypes}
            className="relative bg-background rounded-lg p-2"
        >
            <FileInput
            id="fileInput"
            className="outline-dashed outline-1 outline-slate-500"
            >
            <div className="flex items-center justify-center flex-col p-8 w-full ">
                <CloudUpload className='text-gray-500 w-10 h-10' />
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
                &nbsp; or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                {!props?.fileTypes?"SVG, PNG, JPG, GIF":props?.fileTypes}
                </p>
            </div>
            </FileInput>
            <FileUploaderContent>
            {props.files &&
                props.files.length > 0 &&
                props.files.map((file:File, i:number) => (
                <FileUploaderItem key={i} index={i}>
                    <Paperclip className="h-4 w-4 stroke-current" />
                    <span>{file.name}</span>
                </FileUploaderItem>
                ))}
            </FileUploaderContent>
        </FileUploader>
    )
})