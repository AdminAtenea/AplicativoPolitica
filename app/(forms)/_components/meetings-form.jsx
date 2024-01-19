"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DateTimePicker } from "@/components/ui/date-time-picker/date-time-picker";
import { toast } from "sonner";
import axios from "axios";

const formSchema = z.object({
  place: z.string({ message: "This field is required." }).min(2, {
    message: "The place must be at least 2 characters.",
  }),
  leader: z.string({ message: "This field is required." }),
  time: z.any(),
});

export function MeetingsForm({ leaders }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    try {
      setIsLoading(true);

      const { year, month, day, hour, minute } = values.time;
      const date = new Date(Date.UTC(year, month - 1, day, hour, minute));

      const data = {
        place: values.place,
        leaderId: values.leader,
        date,
      };

      const res = await axios.post("/api/add-meeting", data);

      toast.success("Reunión creada.");
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="place"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lugar</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="" {...field} />
                </FormControl>
                <FormDescription>Este es el lugar de encuentro.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="leader"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Líder</FormLabel>
                <Select onValueChange={field.onChange} disabled={isLoading}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue {...field} placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {leaders?.map((leader) => (
                      <SelectItem key={leader.id} value={leader.id}>
                        {leader.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                Este es el líder que organiza la reunión.                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tiempo</FormLabel>
              <FormControl>
                <DateTimePicker
                  disabled={isLoading}
                  {...field}
                  granularity={"minute"}
                />
              </FormControl>
              <FormDescription>
              Este es el momento de la reunión.              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
        Entregar
        </Button>
      </form>
    </Form>
  );
}
