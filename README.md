# Customer HTTP headers are absent in Fastly Next.js

Custom HTTP headers, set by the `headers` key in `next.config.js` or utilized by the `NextResponse` API in `middleware.ts`, are absent in Fastly.

## Steps to reproduce

Node version: 20.9.0

1. Clone this repo
2. Install dependencies: `npm install && npm install @fastly/next-compute-js@alpha`
3. Run in dev mode: `npm run dev`
4. Open [Chrome DevTools](https://developer.chrome.com/docs/devtools/open) in [Google Chrome](https://www.google.com/chrome/) and click the [Network](https://developer.chrome.com/docs/devtools/network) tab
5. Go to http://localhost:3000
6. Click on the **localhost** entry in the Network Log table. You will notice that the custom headers, **X-Hello-From-Middleware** and **X-Hello-From-Next-Config**, are present in the 'Response Headers' section under the 'Headers' tab.
7. Run in production mode: `npm run build && npm run start`
8. Custom HTTP header's are still present
9. Run with Fastly: `npm run fastly-serve`
10. Go to http://localhost:7676 and notice that the custom HTTP headers are absent

## Why this is an issue
Without custom headers, one cannot implement HTTP security headers to protect against a range of common web application vulnerabilities.