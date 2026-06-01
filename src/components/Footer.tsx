import Link from "next/link";

const serviceLinks = [
  { label: "Sales Sidekick", href: "/#services" },
  { label: "Support Sidekick", href: "/#services" },
  { label: "Ops Sidekick", href: "/#services" },
  { label: "Knowledge Sidekick", href: "/#services" },
];

const companyLinks = [
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg pt-20 pb-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-body text-lg font-medium text-text tracking-tight"
            >
              Sidekick<span className="text-accent">◆</span>Solutions
            </Link>
            <p className="mt-5 text-[0.95rem] text-text-muted leading-[1.65] max-w-[230px]">
              Custom AI agents for teams that have better things to do.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-text-subtle uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-text-muted hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-text-subtle uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-text-muted hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-text-subtle uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@sidekicksolutions.io"
                  className="text-base text-text-muted hover:text-text transition-colors duration-200 break-all"
                >
                  contact@sidekicksolutions.io
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-text-muted hover:text-text transition-colors duration-200"
                >
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-xs text-text-subtle">
            © {new Date().getFullYear()} Sidekick Solutions. All rights
            reserved.
          </p>
          <p className="font-mono text-xs text-text-subtle">
            <span className="text-accent">◆</span> Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
