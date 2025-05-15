let urlLocal = 'https://api-staging.securew2.com/v1/docs/enrollment'; // default
const bearerToken = '19k8nvgjlu1k5brfugftfdt94j'; // Replace with your actual token

function loadSwaggerUI() {
  SwaggerUIBundle({
    url: urlLocal,
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout",
    requestInterceptor: (req) => {
      req.headers['Authorization'] = `Bearer ${bearerToken}`;
      return req;
    }
  });
}

function handleApiChange(value) {
  switch (value) {
    case 'enrollment':
      urlLocal = 'https://api-staging.securew2.com/v1/docs/enrollment';
      break;
    case 'certificate':
      urlLocal = 'http://localhost:8006/v1/organizations/12345/certificates/v1/docs/certificate';
      break;
    case 'device':
      urlLocal = 'https://api-staging.securew2.com/v1/devices/v2/api-docs';
      break;
    case 'user':
      urlLocal = 'http://localhost:8025/v1/organizations/12345/users/v1/docs/user';
      break;
  }
  loadSwaggerUI(); // reload with new path and token
}

window.onload = loadSwaggerUI;
