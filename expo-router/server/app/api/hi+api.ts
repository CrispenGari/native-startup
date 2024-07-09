export function GET(request: Request) {
  return Response.json({ hello: "world", method: request.method });
}

export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ data: body }, { status: 200, statusText: "OK" });
}
