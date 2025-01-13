"use client";

import { DefaultLayout } from "@/components";
import { fetchDataFromFirestore } from "@/lib/firestore";

const HomePage: React.FunctionComponent = async () => {
  const data = await fetchDataFromFirestore("test");
  console.log("data", data);

  return (
    <DefaultLayout>
      <h1>Example Firestore Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </DefaultLayout>
  );
};

export default HomePage;
