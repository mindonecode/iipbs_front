import "./radio-group.css";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    variant?: "radio" | "button";
    color?: "primary" | "secondary";
    shape?: "square" | "rounded";
  }
>(
  (
    { variant = "radio", color = "primary", shape = "square", ...props },
    ref,
  ) => {
    return (
      <RadioGroupPrimitive.Root
        {...props}
        ref={ref}
        data-variant={variant}
        data-color={color}
        data-shape={shape}
      />
    );
  },
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ ...props }, ref) => {
  return <RadioGroupPrimitive.Item ref={ref} {...props} />;
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
