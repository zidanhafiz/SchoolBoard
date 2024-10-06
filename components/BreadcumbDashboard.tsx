"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { capitalize } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

const BreadcumbDashboard = () => {
  const [names, setNames] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const filteredPath = pathname.split("/").filter((name) => name !== "");
    setNames(filteredPath);
  }, [pathname]);

  if (names.length === 0) return <Skeleton className="my-4 w-80 h-5" />;

  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {names.map(
          (name, index) =>
            index < names.length - 1 && (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={`/${name}`}>
                    {capitalize(name)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ),
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{capitalize(names[names.length - 1])}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcumbDashboard;
