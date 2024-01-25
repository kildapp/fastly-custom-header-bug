# Customer HTTP headers are absent in Fastly Next.js

 Custom HTTP headers, set by the `headers` key in `next.config.js` or using `NextResponse` API in `middleware.ts`, are absent in Fastly.


## How to reproduce

 Using Node version: 20.9.0

1. Clone this repo
2. Install dependencies: `npm install && npm install @fastly/next-compute-js@alpha`
3. Generate a compute project: `npx @fastly/next-compute-js init`
4. Run in dev mode: `npm run dev`
5. Open [Chrome DevTools](https://developer.chrome.com/docs/devtools/open) in [Google Chrome](https://www.google.com/chrome/) and click the [Network](https://developer.chrome.com/docs/devtools/network) tab
6. Go to http://localhost:3000
7. Click on the **localhost** entry in the Network Log table. You will notice that the custom headers, **X-Hello-From-Middleware** and **X-Hello-From-Next-Config**, are present in the 'Response Headers' section under the 'Headers' tab.
8. Run in production mode: `npm run build && npm run start`
9. Custom HTTP header's are still present
10. Run with Fastly: `npm run fastly-serve`
11. Go to http://localhost:7676 and notice that the custom HTTP headers are absent

## Why this is an issue
Implementing custom HTTP security headers helps protect against a range of common web application vulnerabilities and improves the overall security posture of a website or web application. It is an essential aspect of a defense-in-depth strategy for web security.