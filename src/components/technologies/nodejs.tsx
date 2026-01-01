import { ComponentProps } from "react"

export function NodeJsIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M12,2L4,6.5v9L12,20l8-4.5v-9L12,2z M12,4.5l6,3.4v6.2l-6,3.4l-6-3.4V7.9L12,4.5z" fill="#339933"/>
       <path d="M11,10h2v4h-2V10z M11,15h2v2h-2V15z" fill="#339933"/>
    </svg>
  )
}
