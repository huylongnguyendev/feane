import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ProductItem from "./ProductItem"


export default function ProductTable() {
  return (
    <>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead className="w-md">Tên sản phẩm</TableHead>
              <TableHead className="text-center">Số lượng</TableHead>
              <TableHead className="text-center">Giá</TableHead>
              <TableHead className="text-right">Tổng cộng</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Tổng cộng</TableCell>
              <TableCell className='text-right'>$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  )
}
