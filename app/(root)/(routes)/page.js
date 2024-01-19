import { getAllInfo } from "@/actions/get-all-info";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PersonStanding, Vote, Users } from "lucide-react";
import { ListItems } from "../_components/list-items";
import { getLeaders } from "@/actions/get-leaders";
import { getVoters } from "@/actions/get-voters";

export default async function Home() {
  const info = await getAllInfo() || [];
  const leaders = await getLeaders({
    name: true,
    email: true,
  });
  const voters = await getVoters();

  const cards = [
    {
      title: "Lideres",
      value: info[0] || 0,
      Icon: PersonStanding,
    },
    {
      title: "Votantes",
      value: info[1] || 0,
      Icon: Vote,
    },
    {
      title: "Reuniones",
      value: info[2] || 0,
      Icon: Users,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, value, Icon }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <Icon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">{value}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Lideres</CardTitle>
            <CardDescription>
              Un total de {leaders?.length || 0} lideres registrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ListItems items={leaders} />
          </CardContent>
        </Card>
        <Card>
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
      </div>
    </div>
  );
}
