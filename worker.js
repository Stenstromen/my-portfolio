addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  let response = await fetch(request);
  const contentType = response.headers.get('Content-Type') || '';

  if (contentType.includes('text/html')) {
    let body = await response.text();
    const nonce = Math.random().toString(36).substring(2, 15);

    body = body.replace(
      /<script>([\s\S]*?)window.dataLayer[\s\S]*?<\/script>/,
      `<script nonce="${nonce}">window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag("js", new Date());\ngtag("config", "G-835MSCWR7N");</script>`
    );

    let csp = response.headers.get("Content-Security-Policy");
    if (csp) {
      csp = csp.replace("script-src 'self'", `script-src 'self' 'nonce-${nonce}'`);
    } else {
      csp = `script-src 'self' 'nonce-${nonce}'`;
    }

    let newResponse = new Response(body, {
      ...response,
      headers: {
        ...response.headers,
        'Content-Security-Policy': csp,
        'Content-Type': 'text/html',
      },
    });

    return newResponse;
  }

  return response;
}