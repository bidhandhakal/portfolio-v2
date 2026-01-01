import { ComponentProps } from "react"

export function ReactIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 21.6c-2.8 0-5.1-4.2-5.1-9.6s2.3-9.6 5.1-9.6s5.1 4.2 5.1 9.6s-2.3 9.6-5.1 9.6z" opacity=".2"/>
      <path d="M12 21.6c-5.4 0-9.6-3-9.6-6.9c0-3.3 3-6.1 7.2-6.8c.8-.1 1.6-.2 2.4-.2s1.6 0 2.4.2c4.2.7 7.2 3.5 7.2 6.8c0 3.9-4.2 6.9-9.6 6.9z" opacity=".2"/>
      <path d="M12 21.6c-3.7 0-6.8-4.3-6.8-9.6s3.1-9.6 6.8-9.6s6.8 4.3 6.8 9.6s-3.1 9.6-6.8 9.6z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  )
}
