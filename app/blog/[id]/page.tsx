"use client";
import { BlogDetail } from "@/types/blog-detail";
import { FileX } from "lucide-react";
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

    // fetch("api/blog/" + params.id)
    //   .then((res) => res.json())
    //   .then((parsedData) => setData(parsedData));

    const mockBlogDetail: BlogDetail = {
      author: "Karl Marx",
      date: "12 of september of 2024",
      image:
        "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg",
      longDesc:
        "Va néixer a Trèveris (Renània-Palatinat) en una família jueva acomodada. Va abandonar els estudis de dret, que havia començat a Bonn, i cursà estudis de filosofia, especialment del món clàssic, a Berlín. El 1841 es va doctorar a la Universitat de Jena amb una tesi sobre la filosofia de la natura d'Epicur. El seu pare va morir el 1838. Comença la seva activitat filosòfica amb una crítica a les tesis sobre l'alienació religiosa de Feuerbach. El 1843, viatja a París on funda la revista Els annals francoalemanys.",
      shortDesc:
        "Karl Heinrich Marx, més conegut com a Karl Marx [ˌkʰaʁl ˌɦa͡ɪ̯nrɪç ˈmaʁks] (Trèveris, 5 de maig de 1818-Londres, 14 de març de 1883), va ser un filòsof, economista polític, sociòleg i revolucionari alemany. ",
      title: "My diary",
    };

    setData(mockBlogDetail);
  }, []);
  return (
    <div>
      This is blog page, with id: <span className="font-bold">{params.id}</span>
      <a href=""></a>
      <div>
        <h1 className="text-[70px] flex justify-center">
          <b>
            <u>{data?.title}</u>
          </b>
        </h1>
        <br />
        <div className="flex justify-end mr-4">
          <h2>
            <b>By: </b>
            {data?.author}
          </h2>
        </div>
        <div className="flex justify-end mr-4">
          <h2>
            <b>Data: </b>
            {data?.date}
          </h2>
        </div>
        <div className="flex item-start">
          <img src={data?.image} alt="My image" width={800} height={1000} />
          <div className="bg-gray-100 p-4 rounded-lg shadow-md m1-4">
            <h2>{data?.shortDesc}</h2>
          </div>
        </div>
        <br />
        <div className="flex justify-end mr-40">
          <h3>{data?.longDesc}</h3>
        </div>
      </div>
    </div>
  );
}
