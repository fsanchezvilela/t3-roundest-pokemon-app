import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.hello.useQuery({ text: "client" });
  console.log("data: ", data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-center items-center">
      <div className="text-2xl text-center">Which Pokémon is Rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex items-center justify-between max-w-2xl">
        <div className="w-16 h-16 bg-red-200" />
        <div className="p-8">VS</div>
        <div className="w-16 h-16 bg-red-200" />
      </div>
    </div>
  );
};

export default Home;
