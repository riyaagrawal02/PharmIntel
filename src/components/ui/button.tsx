import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50",

          variant === "default" &&
          "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]",

          variant === "outline" &&
          "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

          size === "default" && "h-10 px-5 text-sm",
          size === "sm" && "h-9 px-4 text-sm",
          size === "lg" && "h-12 px-8 text-base",

          className
        )}

        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
