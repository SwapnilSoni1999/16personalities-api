import React from "react"
import { cn } from "tailwind-cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "purple" | "blue" | "green"
}

const Button = (props: ButtonProps) => {
  const { className, color = "purple", ...defaultProps } = props

  const colorsClass: Record<typeof color, string> = {
    purple: "bg-16pPurple hover:bg-16pPurple-dark",
    blue: "bg-16pBlue hover:bg-16pBlue-dark",
    green: "bg-16pGreen hover:bg-16pGreen-dark",
  }
  return (
    <button
      {...defaultProps}
      className={cn(
        "px-7 py-3 text-white font-medium rounded-full",
        "transition-all duration-300 ease-in-out",
        colorsClass[color],
        className
      )}
    />
  )
}

export default Button
