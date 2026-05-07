import { IconType } from "react-icons";

interface SocialButtonProps {
  href: string;
  icon: IconType;
  label: string;
}

export default function SocialButton({
  href,
  icon: Icon,
  label,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
    >
      <span className="text-[14px]">
        <Icon />
      </span>

      {label}
    </a>
  );
}
