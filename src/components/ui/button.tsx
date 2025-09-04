import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-poppins font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-main text-white hover:bg-main/90 hover:shadow-md hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-main bg-transparent text-main hover:bg-main hover:text-white hover:shadow-md hover:-translate-y-0.5",
        secondary:
          "bg-gray-100 text-main hover:bg-gray-200 hover:shadow-md hover:-translate-y-0.5",
        ghost: "text-main hover:bg-gray-50 hover:shadow-sm",
        link: "text-main underline-offset-4 hover:underline",
        // Primary CTA button using accent color
        cta: "bg-accent text-main hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 font-semibold",
        // Korean variant with appropriate styling
        korean:
          "bg-main text-white hover:bg-main/90 hover:shadow-md hover:-translate-y-0.5 font-noto-sans-kr",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
