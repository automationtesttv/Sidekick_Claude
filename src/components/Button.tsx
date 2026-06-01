import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "ghost" | "secondary";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-body font-medium transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-[0_1px_2px_rgba(15,17,21,0.06),0_8px_20px_-6px_rgba(79,70,229,0.35)] hover:shadow-[0_1px_2px_rgba(15,17,21,0.06),0_12px_28px_-6px_rgba(79,70,229,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    secondary:
      "bg-text text-bg hover:bg-text/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2",
    ghost:
      "border border-border-strong text-text hover:border-text hover:bg-bg-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
