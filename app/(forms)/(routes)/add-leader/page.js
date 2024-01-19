import { LeadersForm } from "@/app/(forms)/_components/leaders-form";
import React from "react";

const AddLeader = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="w-full my-4 py-8 px-6 bg-slate-900 rounded-sm text-center">
        <h1 className="text-2xl font-semibold text-white">Agregar lider</h1>
      </div>
      <LeadersForm />
    </div>
  );
};

export default AddLeader;
