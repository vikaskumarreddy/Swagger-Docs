let urlLocal = 'https://api-staging.securew2.com/v1/docs/enrollment'; // default
let bearerToken = 'YOUR_BEARER_TOKEN_HERE'; // Set your token here or dynamically

function loadSwaggerUI() {
  SwaggerUIBundle({
    url: urlLocal,
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout",
    requestInterceptor: function (req) {
      req.headers['Authorization'] = `Bearer ${bearerToken}`;
      return req;
    }
  });
}

function handleApiChange(value) {
  switch (value) {
    case 'enrollment':
      urlLocal = 'http://localhost:9003/v1/docs/enrollment';
      break;
    case 'certificate':
      urlLocal = 'http://localhost:8006/v1/organizations/12345/certificates/v1/docs/certificate';
      break;
    case 'device':
      urlLocal = 'http://localhost:8075/v1/organizations/12345/devices/v1/docs/device';
      break;
    case 'user':
      urlLocal = 'http://localhost:8025/v1/organizations/12345/users/v1/docs/user';
      break;
  }
  loadSwaggerUI(); // reload with new path
}

window.onload = loadSwaggerUI;
