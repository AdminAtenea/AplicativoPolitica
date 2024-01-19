import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

const MeetingTable = ({ meetings }) => {
  if (!meetings) {
    return;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium">Lugar</TableHead>
          <TableHead className="font-medium">Lider</TableHead>
          <TableHead className="font-medium text-right">Fecha & Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {meetings.map((meeting) => (
          <TableRow key={meeting.id}>
            <TableCell>{meeting.place}</TableCell>
            <TableCell>{meeting.leader.name}</TableCell>
            <TableCell className="text-right">
              {format(new Date(meeting.date), "PPpp")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MeetingTable;
