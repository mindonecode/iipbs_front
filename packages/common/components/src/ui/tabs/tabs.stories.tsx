import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Elements/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/tabs)
- [API Reference](https://www.radix-ui.com/primitives/docs/components/tabs#api-reference)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Make changes to your account here. Click save when you're done.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Change your password here. After saving, you'll be logged out.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]" variant="underline">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Make changes to your account here. Click save when you're done.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Change your password here. After saving, you'll be logged out.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Outline: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]" variant="outline">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Make changes to your account here. Click save when you're done.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Change your password here. After saving, you'll be logged out.</p>
      </TabsContent>
    </Tabs>
  ),
};
