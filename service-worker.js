'use strict';
const APP_VERSION='1.1.0';
const CACHE_NAME=`spit-v${APP_VERSION}`;
const APP_SHELL=['./','./index.html','./offline.html','./favicon.png?v=1.1.0','./icon-180.png?v=1.1.0','./icon-192.png?v=1.1.0','./icon-512.png?v=1.1.0'];
const NEVER_CACHE=new Set(['service-worker.js','manifest.webmanifest','version.json']);
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;const name=url.pathname.split('/').pop();if(NEVER_CACHE.has(name)){event.respondWith(fetch(new Request(req,{cache:'no-store'})));return}if(req.mode==='navigate'){event.respondWith((async()=>{try{const response=await fetch(new Request(req,{cache:'no-store'}));const cache=await caches.open(CACHE_NAME);cache.put('./index.html',response.clone());return response}catch{return(await caches.match('./index.html'))||(await caches.match('./offline.html'))}})());return}event.respondWith((async()=>{const cached=await caches.match(req);if(cached)return cached;try{const response=await fetch(req);if(response&&response.ok){const cache=await caches.open(CACHE_NAME);cache.put(req,response.clone())}return response}catch{return new Response('',{status:504,statusText:'Offline'})}})())});
