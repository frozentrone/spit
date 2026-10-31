# SPIT PWA 1.1.0

Repository: frozentrone/spit
Target: https://frozentrone.github.io/spit/

## Why version increased
The supplied application was version 1.0.1. This release adds full PWA packaging, install icons, offline app-shell caching, an offline fallback, a new SPIT logo, version metadata and cache lifecycle management. This is therefore a MINOR release: 1.1.0.

## Upload all files to the repository root
- index.html
- manifest.webmanifest
- service-worker.js
- version.json
- offline.html
- favicon.png
- icon-180.png
- icon-192.png
- icon-512.png

## Verification
1. Confirm the header/application loads at /spit/ and calculations still operate.
2. Confirm version references report 1.1.0.
3. Confirm the browser offers PWA installation and the generated SPIT icon is shown.
4. Load once online, disconnect the network, reload, and confirm the application still opens and calculations work.
5. Reconnect and confirm version.json, manifest.webmanifest and service-worker.js are fetched fresh rather than retained as stale runtime cache entries.
6. Confirm the active cache is spit-v1.1.0 and older application caches are removed on activation.
