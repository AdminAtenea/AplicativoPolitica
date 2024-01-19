import { getLeaders } from "@/actions/get-leaders";
import { MeetingsForm } from "@/app/(forms)/_components/meetings-form";
import React from "react";

const AddMeeting = async () => {
  const leaders = await getLeaders({
    id: true,
    name: true,
  });
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="w-full my-4 py-8 px-6 bg-slate-900 rounded-sm text-center">
        <h1 className="text-2xl font-semibold text-white">Agregar Reunión</h1>
      </div>
      <MeetingsForm leaders={leaders} />
    </div>
  );
};

export default AddMeeting;
