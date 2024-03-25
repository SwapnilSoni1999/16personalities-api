import React from "react"
import { cn } from "tailwind-cn"

interface ZigZagProps extends React.SVGProps<SVGSVGElement> {
  pathProps?: React.SVGProps<SVGPathElement>
}

const ZigZag = (props: ZigZagProps) => {
  const { pathProps, className: svgClassName, ...defaultSvgProps } = props
  const { className: pathClassName, ...defaultPathProps } = pathProps ?? {}
  return (
    <svg
      {...defaultSvgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 60"
      preserveAspectRatio="none"
      className={cn("w-full bg-16pBlue fill-white", svgClassName)}
    >
      <path
        {...defaultPathProps}
        d="m0 20 420 40L800 0l750 60 370-45V0H0z"
        className={cn("drop-shadow-lg", pathClassName)}
      ></path>
    </svg>
  )
}

export default ZigZag
