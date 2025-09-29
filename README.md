# orders-mfe-poc (Angular Elements MFE)

## Overview
`orders-mfe-poc` is an Angular application packaged as a Web Component (Angular Elements). It can be embedded into any host (Angular, React, plain HTML) by loading its JS bundle and placing the custom element on the page.

## What Was Added
- Angular Elements setup that registers a custom element (e.g. `<orders-mfe-root>`).
- Simplified build/serve using standard Angular builders (no federation during Elements mode).
- Updated `index.html` to demonstrate the Web Component standalone.

## How It Works
1. The app bootstraps and registers a custom element via Angular Elements.
2. The host page loads the JS bundle (from local dev or S3) with `<script type="module">` if ESM.
3. The host then uses `<orders-mfe-root></orders-mfe-root>` anywhere in its DOM.

## Run Locally
- `cd /Users/jitendersharma/Desktop/projects/orders-mfe-poc`
- `ng serve --port 4210`
- Open `http://localhost:4210` to see the component in isolation.

## Build for Production
- `ng build --configuration production`
- The dist folder will contain JS assets (e.g. `main-*.js`).

## Deploy to S3 (Example)
- Upload the contents of `dist/` to an S3 bucket (public-read for testing).
- Example public URL used by shell:
  - `https://microfetest.s3.eu-north-1.amazonaws.com/orders-mfe/main-<hash>.js`
- Ensure correct `Content-Type` headers (e.g., `application/javascript`) and CORS allow public GET.

## Consume in a Host (Angular Shell Example)
```html
<!-- Loaded by the host at runtime -->
<script type="module" src="https://<bucket>.s3.<region>.amazonaws.com/orders-mfe/main-<hash>.js"></script>

<!-- Place the element where you want to render the MFE -->
<orders-mfe-root></orders-mfe-root>
```

## Troubleshooting
- If the browser can’t resolve Angular imports, ensure you’re not using federation config here (Elements build does not rely on `remoteEntry.json`).
- If the script fails to load from S3:
  - Verify the object key and region are correct.
  - Check `Content-Type` and CORS.
- If nothing renders, confirm the custom element name matches the one registered in code.

## Notes
- This MFE is framework-agnostic at the integration point thanks to Web Components.
- Version skew is tolerated since dependencies are bundled with the MFE.
