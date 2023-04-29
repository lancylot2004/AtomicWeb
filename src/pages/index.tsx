import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/home");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>You will be redirected to the dashboard page in 5 seconds...</p>
    </div>
  );
}
