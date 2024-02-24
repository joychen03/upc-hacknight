"use client";

import { Blog } from "@/types/blog";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((content: Blog[]) => setData(content));
  }, []);

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-3 m-5 bg-gradient-to-r from-slate-500 to-black">
      {data.map((blog) => {
        return (
          <div
            key={blog.id}
            className="p-5 m-2 border rounded-md bg-gradient-to-b from-sky-300 to-white"
          >
            <p className="font-bold text-1xl">{blog.title}</p>
            <p>
              <img src={blog.image} alt="" />
            </p>
            <div className="italic">{blog.shortDesc}</div>
            <div className="text-center">{blog.author}</div>
            <div className="text-end">{blog.date}</div>
            {/* {data.map((blog, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "lightblue",
                  marginBottom: "20px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {blog.title}
                </div>
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/mona-lisa-also-called-la-gioconda-or-la-joconde-c1503-1506-news-photo-1652350725.jpg?resize=980:*"
                  alt={blog.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <div style={{ fontSize: "14px" }}>{blog.shortDesc}</div>
                <div style={{ marginTop: "10px", fontStyle: "italic" }}>
                  {blog.author}
                </div>
                <div
                  style={{ marginTop: "5px", fontSize: "12px", color: "gray" }}
                >
                  {blog.date}
                </div>
              </div>
            ))} */}
          </div>
        );
      })}
    </div>
  );
}
