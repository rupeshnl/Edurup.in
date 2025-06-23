"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={true}
      toastOptions={{ style: { fontSize: "15px" } }}
    />
  );
};
