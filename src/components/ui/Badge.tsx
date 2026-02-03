import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
            "border-transparent bg-[#FFB6C1] text-white hover:bg-[#FFA0B0]": variant === 'default',
            "border-transparent bg-[#FFD700] text-black hover:bg-[#F0C800]": variant === 'secondary',
            "text-foreground border-input": variant === 'outline',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
