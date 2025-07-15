import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border-2 border-border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
        variant: {
            default:
            "bg-main text-main-foreground shadow-shadow",
            secondary:
            "bg-secondary-background text-foreground",
            destructive:
            "bg-red-500 text-white",
            outline: "text-foreground",
        },
        },
        defaultVariants: {
        variant: "default",
        },
    }
)

export interface BadgeProps
extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants } 