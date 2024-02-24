"use client";
import { BlogDetail } from "@/types/blog-detail";
import { useEffect, useState } from "react";

type BlogPageProps = {
  params: {
    id: string;
  };
};

export default function BlogPage({ params }: BlogPageProps) {
  const [data, setData] = useState<BlogDetail>();

  useEffect(() => {
    //Fetch
    fetch("/api/blog/" + params.id)
      .then((res) => res.json())
      .then((parsedData) => setData(parsedData));
  }, []);
  return (
    <div className="flex bg-[url('https://i.pinimg.com/736x/3e/d6/d9/3ed6d95412808a27cf7a1b851df65070.jpg')]">
      <div className="p-10">
        <h1 className="text-[70px] flex justify-center font-mono">
          <b>
            <u>{data?.title}</u>
          </b>
        </h1>
        <br />
        <div className="flex justify-end mr-10">
          <h2>
            <b>By: </b>
            {data?.author}
          </h2>
        </div>
        <div className="flex justify-end mr-10">
          <h2>
            <b>Data: </b>
            {data?.date}
          </h2>
        </div>
        <div className="flex item-start space-x-32">
          <img src={data?.image} alt="My image" width={800} height={1000} />
          <div className="bg-yellow-200 w-[500px]  flex-none ml-10">
            <h2>{data?.shortDesc}</h2>
          </div>
        </div>
        <br />
        <div className="flex justify-end mr-40 bg-gray-100 p-4 rounded-lg shadow-md m-5">
          <h3>{data?.longDesc}</h3>
        </div>
      </div>
    </div>
  );
}
