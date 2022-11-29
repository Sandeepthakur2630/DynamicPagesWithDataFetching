import React from "react";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/router";

const dashboard = () => {
  const { tokenState }: any = useAuth();
  const router = useRouter();
  useEffect(() => {
    const tokenCheak = localStorage.getItem("token");
    if (!tokenCheak) {
      router.push("/login");
    }
  });
  return (
    <div>
      <h1>This is the dashboard . User have to be logged in </h1>
    </div>
  );
};

export default dashboard;
