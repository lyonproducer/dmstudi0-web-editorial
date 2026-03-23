import React from "react";
import Link from "next/link";
import { cn } from "@/app/shared/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  href?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  size = "md",
  href, 
  children, 
  className = "", 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center uppercase font-medium tracking-[0.2em] transition-all duration-500 ease-in-out cursor-pointer focus-visible:ring-2 focus-visible:ring-cta focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-cta hover:text-white",
    secondary: "bg-secondary text-background hover:bg-primary",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-background",
    ghost: "bg-transparent text-primary hover:text-cta",
    link: "bg-transparent text-primary underline underline-offset-4 hover:text-cta p-0"
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-8 py-4 text-xs",
    lg: "px-10 py-5 text-sm",
    xl: "px-12 py-6 text-base"
  };

  const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
