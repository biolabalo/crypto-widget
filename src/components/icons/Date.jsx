import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.667 2.667h-1.334V2A.667.667 0 1 0 10 2v.667H6V2a.667.667 0 0 0-1.333 0v.667H3.333a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm.666 10a.667.667 0 0 1-.666.666H3.333a.667.667 0 0 1-.666-.666V8h10.666v4.667Zm0-6H2.667v-2A.667.667 0 0 1 3.333 4h1.334v.667a.667.667 0 1 0 1.333 0V4h4v.667a.666.666 0 1 0 1.333 0V4h1.334a.667.667 0 0 1 .666.667v2Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
