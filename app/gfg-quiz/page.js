"use client";

// redirect to https://practice.geeksforgeeks.org/contest/shortlisting-round-by-ieee-muj
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GFGQuizPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://practice.geeksforgeeks.org/contest/shortlisting-round-by-ieee-muj");
  }, [router]);

  return (
    <>Loading...</>
  )
}
