import mockBlogs from "@/mock/blog-repo";

export async function GET() {
  return Response.json(mockBlogs);
}
