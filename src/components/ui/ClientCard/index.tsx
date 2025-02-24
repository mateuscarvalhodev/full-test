import { TClientCards } from "@/types/TClientCard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";

export default function ClientCard({ name, priceSalary, priceEnterprise }: TClientCards) {
  return (

    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Salário: R${priceSalary}</CardDescription>
        <CardDescription>Salário: R${priceEnterprise}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className='flex items-center justify-between px-4 py-2'>
        <button className='text-2xl font-bold'></button>
        <p>Card Footer</p>
      </CardFooter>
    </Card>

  )
}
