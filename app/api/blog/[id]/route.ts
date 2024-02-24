import mockBlogsDetails from "@/mock/blog-detail-repo";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const mockDetail = mockBlogsDetails.find((blog) => blog.id === Number(params.id));

  if (!mockDetail) {
    return new Response(JSON.stringify({ message: "blog not found" }), { status: 404 });
  }

  return Response.json(mockDetail);
}
