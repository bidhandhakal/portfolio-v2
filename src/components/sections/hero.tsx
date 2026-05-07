import Image from "next/image";
import VerifiedBadge from "@/components/shared/verified-badge";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src="/photo.png"
        width={300}
        height={300}
        className="w-28 h-28 object-cover rounded-full ring-2 ring-gray-200 ring-offset-2"
        alt="Bidhan"
        loading="eager"
      />

      <div className="flex items-center">
        <h1 className="text-lg font-bold text-gray-900">Bidhaan</h1>

        <VerifiedBadge />
      </div>

      <p className="text-[14px] text-gray-500 mb-3">
        Building simple software, usually.
      </p>
    </div>
  );
}
