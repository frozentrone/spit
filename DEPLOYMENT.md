# SPIT 1.3.0

New PWA lifecycle controls:
- Install button remains hidden unless the browser emits beforeinstallprompt; it is hidden in standalone mode and immediately after appinstalled.
- Refresh button reloads the installed PWA without needing browser chrome.
- Check updates explicitly calls ServiceWorkerRegistration.update().
- App launch silently checks for updates.
- When a new service worker reaches waiting/installed state, SPIT displays Update & restart / Later.
- Update & restart sends SKIP_WAITING; controllerchange then reloads once into the new release.
- Existing breakage data and impact calculations are preserved locally before/after reloads.
