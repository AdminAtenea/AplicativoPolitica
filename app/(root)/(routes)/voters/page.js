import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { ListItems } from "../../_components/list-items";
import { getVoters } from "@/actions/get-voters";

export default async function Voters() {
  const voters = await getVoters();
  return (
    <>
      <div className="flex items-center justify-end">
        <Link href="/add-voter" className={buttonVariants()}>
        Agregar votante
          <PlusCircle size={20} className="ml-2" />
        </Link>
      </div>
      <Card className="lg:w-1/2">
        <CardHeader>
          <CardTitle>Votantes</CardTitle>
          <CardDescription>
          Un total de {voters?.length || 0} votantes registrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ListItems items={voters} />
        </CardContent>
      </Card>
    </>
  );
}
