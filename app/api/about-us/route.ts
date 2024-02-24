import mockAboutUs from "@/mock/about-us";

export async function GET() {
  return Response.json(mockAboutUs);
}
