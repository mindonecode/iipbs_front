import "./slider.css";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../../lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div>
    <SliderPrimitive.Root
      ref={ref}
      className={cn("slider-root", className)}
      {...props}
    >
      <SliderPrimitive.Track className="slider-track">
        <SliderPrimitive.Range className="slider-range" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="slider-thumb">
        <span className="slider-thumb-label">
          {props.value?.[0] ?? props.min ?? 0}
        </span>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
    <div className="slider-bottom">
      <span className="slider-bottom-label">{props.min ?? 0}</span>
      <span className="slider-bottom-label">{props.max ?? 100}</span>
    </div>
  </div>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
