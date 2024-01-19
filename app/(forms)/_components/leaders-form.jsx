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
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const formSchema = z.object({
  name: z.string({ message: "This field is required." }).min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z
    .string({ message: "This field is required." })
    .email({ message: "Please enter a valid email address." }),
  age: z.string({ message: "This field is required." }).regex(/^[0-9]+$/, {
    message: "Enter a valid age",
  }),
  phone: z.string({ message: "This field is required." }).regex(/^[0-9]+$/, {
    message: "Enter a valid phone number",
  }),
  area: z.string({ message: "This field is required." }).min(2, {
    message: "Area must be at least 2 characters.",
  }),
});

export function LeadersForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
      phone: "",
      area: "",
    },
  });

  async function onSubmit(values) {
    try {
      setIsLoading(true);
      const data = {
        name: values.name,
        email: values.email,
        age: parseInt(values.age),
        phoneNumber: values.phone,
        Area: values.area,
      };
      const res = await axios.post("/api/add-leader", data);
      toast.success("Líder agregado exitosamente¡");
    } catch (err) {
      toast.error("Something went wrong!");
      console.log(err, "LEADER_FORM_ERROR");
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  Este es el nombre para mostrar de las líderes.{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Edad</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  Esta es la edad de las líderes.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Esta es la dirección de correo electrónico de las líderes.{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de teléfono</FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Este es el número de teléfono de las líderes.{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Área</FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Esta es el área de los líderes donde votan.{" "}
              </FormDescription>
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
