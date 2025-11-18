import Image from "next/image";

interface LogoProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export function Logo({ src, alt = "Logo", size = 24, className }: LogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
