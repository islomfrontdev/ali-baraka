import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);
  return <div>Loading</div>;
}
