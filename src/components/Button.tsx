import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25",
    outline:
      "border border-white/10 text-white hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
