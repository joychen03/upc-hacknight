"use client";

import { Blog } from "@/types/blog";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    // fetch("api/blogs")
    //   .then((res) => res.json())
    //   .then((content : Blog[]) => setData(content));

    const testBlogs: Blog[] = [];

    testBlogs.push({
      author: "LEONARDO DA VINCI",
      date: "XVI",
      image: "",
      shortDesc:
        "La Mona Lisa, o El retrato de Lisa Gherardini, aún siguen surgiendo teorías sobre la identidad –y sobre la enigmática sonrisa– de la retratada por el gran artista renacentista a comienzos del siglo XVI.",
      title: "LA GIOCONDA",
    });
    /*
    testBlogs.push({
      author: "PABLO PICASSO",
      date: "1937",
      image: "",
      shortDesc:
        "Todo un alegato contra la guerra pintado por el artista en 1937 al conocer los bombardeos de la aviación alemana sobre el pueblo vasco que le da nombre. Tras muchas periplos está expuesto en el museo Reina Sofía de Madrid desde 1981. Sin duda uno de los cuadros más famosos de Pablo Picasso.",
      title: "EL GUERNICA",
    });
    */
    setData(testBlogs);
  }, []);

  return (
    <div>
      This is blog page
      {data.map((blog, index) => {
        return (
          <div
            key={index}
            style={{
              padding: "20px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24",
            }}
          >
            This is the blog page
            {data.map((blog, index) => (
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
            ))}
          </div>
        );
      })}
    </div>
  );
}
