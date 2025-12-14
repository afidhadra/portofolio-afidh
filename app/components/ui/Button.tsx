import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function Button({ variant = 'primary', children, href, className }: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all duration-300";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-blue-500/25",
    outline: "border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 hover:shadow-lg"
  };

  return (
    <Link href={href} className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </Link>
  );
}