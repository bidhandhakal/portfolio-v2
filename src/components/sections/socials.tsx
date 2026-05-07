import SocialButton from "@/components/shared/social-button";
import { socials } from "@/data/socials";

export default function Socials() {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {socials.map((item) => (
        <SocialButton
          key={item.label}
          href={item.href}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  );
}
