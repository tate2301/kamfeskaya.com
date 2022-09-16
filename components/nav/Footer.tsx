// @ts-nocheck

import { Container } from 'components/Container';
import Link from 'next/link';

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <div className="w-screen py-12 m-0 mt-12 bg-transparent">
      <div className="container max-w-5xl px-4 py-4 mx-auto ">
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Case Studies</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">ReblurDAO</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Tatenda Chinyamakobvu. All
                rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </div>
    </div>
  );
}
