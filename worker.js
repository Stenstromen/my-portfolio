addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Fetch the original response
  let response = await fetch(request)

  // Clone the response so we can modify the headers
  let newResponse = new Response(response.body, response)

  // Generate a random nonce
  let nonce = Math.random().toString(36).substring(2, 15)

  // Get the existing CSP header
  let csp = newResponse.headers.get('Content-Security-Policy')

  // Add the nonce to the script-src directive
  csp = csp.replace("script-src 'self'", `script-src 'self' 'nonce-${nonce}'`)

  // Set the modified CSP header
  newResponse.headers.set('Content-Security-Policy', csp)

  // Get the body text
  let bodyText = await newResponse.text()

  // Replace the script tag with the same tag plus the nonce
  bodyText = bodyText.replace(
    `<script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-835MSCWR7N");
    </script>`,
    `<script nonce="${nonce}">
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-835MSCWR7N");
    </script>`
  )

  // Return the modified response
  return new Response(bodyText, {
    headers: newResponse.headers
  })
}