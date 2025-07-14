export async function GET(request) {
  return new Response(
    JSON.stringify({ message: "Hello from the App Router API!" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
