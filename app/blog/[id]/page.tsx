type BlogPageProps = {
  params: {
    id: string;
  };
};

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <div>
      This is blog page, with id: <span className="font-bold">{params.id}</span>
      <p>Please develop it</p>
    </div>
  );
}
