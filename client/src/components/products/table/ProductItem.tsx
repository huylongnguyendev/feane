import { Checkbox } from "@/components/ui/checkbox"
import { TableCell, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Hamburger } from 'lucide-react';

export default function ProductItem() {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">
          <Checkbox />
        </TableCell>
        <TableCell>
          <Link href={"/"}
            className="inline-flex items-center size-full"
          >
            Hamburger
          </Link>
        </TableCell>
        <TableCell className="text-center">10</TableCell>
        <TableCell className="text-center">52.000</TableCell>
        <TableCell className="text-right">520.000</TableCell>
      </TableRow>
    </>
  )
}
