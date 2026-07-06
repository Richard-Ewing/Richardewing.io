export async function GET() {
    return new Response("Gone", { status: 410, statusText: "Gone" });
}
