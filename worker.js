addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const response = await fetch(request);
    const newResponse = new Response(response.body, response);
  
    const nonce = generateNonce();
  
    const csp = newResponse.headers.get("Content-Security-Policy");
    if (csp) {
      const updatedCsp = csp.replace(
        "script-src 'self'",
        `script-src 'self' 'nonce-${nonce}'`
      );
      newResponse.headers.set("Content-Security-Policy", updatedCsp);
    }
  
    const body = await response.text();
    const modifiedBody = addNonceToInlineScript(body, nonce);
  
    return new Response(modifiedBody, {
      status: response.status,
      statusText: response.statusText,
      headers: newResponse.headers,
    });
  }
  
  function generateNonce() {
    let nonce = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
      nonce += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return nonce;
  }
  
  function addNonceToInlineScript(body, nonce) {
    return body.replace(/<script>(\(function\(\){.*}\)\(\);)<\/script>/, `<script nonce="${nonce}">$1</script>`);
  }
  