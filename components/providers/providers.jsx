import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const Providers = ({ children }) => {
  return (
    <ClerkProvider>
      <Toaster position="top-right" />
      {children}
    </ClerkProvider>
  );
};

export default Providers;
