import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./index";

const meta: Meta<typeof Dialog> = {
  title: "Elements/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[42.5rem]">
        <DialogHeader>
          <DialogTitle>다이얼로그 제목</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-xl">다이얼로그의 본문 내용이 여기에 들어갑니다.</p>
        </div>
        <DialogFooter>
          <Button type="submit">확인</Button>
          <DialogClose asChild>
            <Button color="white">취소</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
