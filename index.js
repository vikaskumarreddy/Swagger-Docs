window.onload = () => {
    const ui = SwaggerUIBundle({
        url: "http://localhost:9003/v2/api-docs",
        dom_id: '#swagger-ui',
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
    });

    // Wait for Swagger UI to load and then modify DOM
    setTimeout(() => {
        const topbar = document.querySelector('.swagger-ui .topbar-wrapper .link');
        if (topbar) {
            topbar.insertAdjacentHTML('beforeend', '<span style="color:white; font-size:18px; margin-left:10px;">SecureW2 API Portal</span>');
        }
    }, 500);
};
