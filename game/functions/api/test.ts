export async function onRequest(context: any) {
  return new Response(JSON.stringify({
    message: "Hello from Cloudflare Pages Functions!",
    time: new Date().toISOString()
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
