export function extendCypressConfig(config) {
  return {
      ...config,
      // Your shared configuration options here
      projectId: "pqaz26",
      video: false,
      env: {
          baseUrl: process.env.CYPRESS_BASE_URL ?? 'http://localhost:8000',
          timeout: 10000,
          // Extend or override other configurations
      },
  }
}