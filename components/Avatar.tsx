import Image from "next/image";

interface AvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 64,
};

export default function Avatar({ src, name, size = "md", className = "" }: AvatarProps) {
  const sizePx = sizeMap[size];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (src) {
    return (
      <div className={`relative rounded-full overflow-hidden flex-shrink-0 ${className}`} style={{ width: sizePx, height: sizePx }}>
        <Image
          src={src}
          alt={name}
          width={sizePx}
          height={sizePx}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`rounded-full bg-[#3A5AFE] text-white flex items-center justify-center font-semibold flex-shrink-0 ${className}`}
      style={{ width: sizePx, height: sizePx, fontSize: sizePx * 0.4 }}
    >
      {initials}
    </div>
  );
}
