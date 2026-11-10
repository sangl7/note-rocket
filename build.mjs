// Wraps note-rocket.html (the page body that gets published) into index.html,
// a complete document you can open straight from this folder.
import { readFileSync, writeFileSync } from 'node:fs';
const here = new URL('.', import.meta.url);
const body = readFileSync(new URL('note-rocket.html', here), 'utf8');
const head = '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
  '<style>:root{padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}' +
  'body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>\n';
writeFileSync(new URL('index.html', here), head + body + '\n</body></html>\n');
console.log('index.html written');
