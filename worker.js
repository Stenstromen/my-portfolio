addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let response = await fetch(request);
  let newResponse = new Response(response.body, response);
  let nonce = Math.random().toString(36).substring(2, 15);
  let csp = newResponse.headers.get("Content-Security-Policy");
  csp = csp.replace("script-src 'self'", `script-src 'self' 'nonce-${nonce}'`);
  newResponse.headers.set("Content-Security-Policy", csp);
  return newResponse;
}
