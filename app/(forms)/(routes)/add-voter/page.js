import { getLeaders } from "@/actions/get-leaders";
import { VotersForm } from "@/app/(forms)/_components/voter-form";
import React from "react";

const AddVoter = async () => {
  const leaders = await getLeaders({
    id: true,
    name: true,
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="w-full my-4 py-8 px-6 bg-slate-900 rounded-sm text-center">
        <h1 className="text-2xl font-semibold text-white">Agregar votante</h1>
      </div>
      <VotersForm leaders={leaders} />
    </div>
  );
};

export default AddVoter;
