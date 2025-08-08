// app/renter/[slug]/layout.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IoChevronBackOutline } from "react-icons/io5";


export default function RenterSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // e.g. /renter/tropic-villa/payment
  const segments = pathname.split("/").filter(Boolean); // ["renter", "tropic-villa", "payment"]

  return (
    <div className="max-w-7xl mx-auto mt-10 md:px-10 px-4 py-6 space-y-6">
        <div className="text flex items-center gap-2">

        <Link href="/renter" className="hover:underline text-gray-600 flex items-center gap-1">
        <IoChevronBackOutline/>
          Back •
        </Link>
      <Breadcrumb>
        <BreadcrumbList>
          {/* Renter link */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/renter">Renter</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {/* Slug (details page) */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/renter/${segments[1]}`}>
                {decodeURIComponent(segments[1])}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
        </div>

      <div className="mt-4">{children}</div>
    </div>
  );
}
