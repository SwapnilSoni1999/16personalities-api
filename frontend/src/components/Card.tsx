import React, { forwardRef } from "react"
import { cn } from "tailwind-cn"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "purple" | "blue" | "green"
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, color = "purple", ...defaultProps } = props

  const colorsClass: Record<typeof color, string> = {
    purple: "border-16pPurple",
    blue: "border-16pBlue",
    green: "border-16pGreen",
  }

  return (
    <div
      ref={ref}
      {...defaultProps}
      className={cn(
        "bg-white shadow-lg rounded-lg p-6 border-t-[5px]",
        colorsClass[color],
        className
      )}
    ></div>
  )
})

export default Card
