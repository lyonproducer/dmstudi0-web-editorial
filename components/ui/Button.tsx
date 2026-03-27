import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/shared/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-transparent hover:text-primary border border-primary shadow-luxury-lg hover:shadow-cta/10",
        outline: "border border-primary/20 bg-transparent text-primary hover:border-cta hover:text-cta",
        ghost: "hover:bg-primary/5 text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white text-primary hover:bg-transparent hover:text-white border border-white shadow-luxury-lg hover:border-cta",
      },
      size: {
        default: "px-10 py-5",
        sm: "px-6 py-3",
        lg: "px-14 py-7",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
