globalThis.__nitro_main__ = import.meta.url;
import { b as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": '"115-ZrxxyJEDP0wRoy4fvSLycByEodI"',
    "mtime": "2026-11-04T19:38:43.720Z",
    "size": 277,
    "path": "../public/favicon.svg"
  },
  "/og-image.png": {
    "type": "image/png",
    "etag": '"74b1-PdDjE6Wbw6kPWFdsryMOPlcKmD8"',
    "mtime": "2026-11-04T19:38:43.721Z",
    "size": 29873,
    "path": "../public/og-image.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"17-pXlLwYglpJDm3HFTug9IPwDR2Vs"',
    "mtime": "2026-11-04T19:38:43.721Z",
    "size": 23,
    "path": "../public/robots.txt"
  },
  "/CV_Nayra_Zanini.pdf": {
    "type": "application/pdf",
    "etag": '"4185e-z2MkABg+70C4YTVAql7zrAuqxWc"',
    "mtime": "2026-11-04T19:38:43.717Z",
    "size": 268382,
    "path": "../public/CV_Nayra_Zanini.pdf"
  },
  "/assets/artigos.index-Rsqw2btU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"774-cIm1tf7Rh78ww+BblyM9p5OwqBc"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 1908,
    "path": "../public/assets/artigos.index-Rsqw2btU.js"
  },
  "/assets/artigos._slug-BqKhgG8t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"992-TcnHk9ih05NAijPJGsar+IWwGTw"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 2450,
    "path": "../public/assets/artigos._slug-BqKhgG8t.js"
  },
  "/assets/contato-DfMa71m5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a28-WAJQxSFOzWXdaGA4JF3Zk4/qRZ4"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 2600,
    "path": "../public/assets/contato-DfMa71m5.js"
  },
  "/assets/artigos._slug-Dy2RrBWC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ee-r7U8ozmd9RJt2sYzpeUVFgypdSw"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 750,
    "path": "../public/assets/artigos._slug-Dy2RrBWC.js"
  },
  "/assets/experiencia-Do10jMrJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"109e-QDbwlPH/axJoP54q3825iC1tMsw"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 4254,
    "path": "../public/assets/experiencia-Do10jMrJ.js"
  },
  "/assets/demo.meu-espaco-CQyjDR-9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d157-IohjOQCXeSufwXomCILNhX8fazo"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 184663,
    "path": "../public/assets/demo.meu-espaco-CQyjDR-9.js"
  },
  "/assets/index-DgJeDDn5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"45f6-+DK8la3zSZi9qP7yNhXvy+uzVo0"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 17910,
    "path": "../public/assets/index-DgJeDDn5.js"
  },
  "/assets/meu-espaco-D3ld_Ecl.jpg": {
    "type": "image/jpeg",
    "etag": '"27907-OdLTLQnXfyEPn79CgpSmjD7buNU"',
    "mtime": "2026-11-04T22:51:32.789Z",
    "size": 162055,
    "path": "../public/assets/meu-espaco-D3ld_Ecl.jpg"
  },
  "/assets/projetos-DoI92qej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-Q8+Sr32K45QGLwn4mKwVU/7Rs4c"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 95,
    "path": "../public/assets/projetos-DoI92qej.js"
  },
  "/assets/projetos.financas-pessoais-Djka0YPM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-Q8+Sr32K45QGLwn4mKwVU/7Rs4c"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 95,
    "path": "../public/assets/projetos.financas-pessoais-Djka0YPM.js"
  },
  "/assets/projetos.financas-pessoais.index-C52TN0VR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f9d-QpqkpVURVPkNNB7jYyaMUOrkzoQ"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 8093,
    "path": "../public/assets/projetos.financas-pessoais.index-C52TN0VR.js"
  },
  "/assets/index-D3LGcr6r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f1a0-juoI2yPCIEzctq6fSxIgC99JMtU"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 389536,
    "path": "../public/assets/index-D3LGcr6r.js"
  },
  "/assets/projetos.meu-espaco-BRiRpJo1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5be-Fj+jggOi3we/rUNrXRrouPNBG2U"',
    "mtime": "2026-11-04T22:51:32.793Z",
    "size": 1470,
    "path": "../public/assets/projetos.meu-espaco-BRiRpJo1.js"
  },
  "/assets/projetos.financas-pessoais.app-CWq7_tAB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"385e5-xWG+0ZgfDydA3Goanna2CcXmtzY"',
    "mtime": "2026-11-04T22:51:32.793Z",
    "size": 230885,
    "path": "../public/assets/projetos.financas-pessoais.app-CWq7_tAB.js"
  },
  "/assets/projetos._slug-Bz5FjSXs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2c6-GbfmbAFez51iE8mbEs9cqPbfpFA"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 710,
    "path": "../public/assets/projetos._slug-Bz5FjSXs.js"
  },
  "/assets/projetos._slug-L4u8iJIa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4084-rjTxHn+trMsJXIWR8JNM4q864Pw"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 16516,
    "path": "../public/assets/projetos._slug-L4u8iJIa.js"
  },
  "/assets/tslib.es6-CmEaCU22.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"43a-E3Kfr2k4mlZ2+rfA/RFmdMbjgcQ"',
    "mtime": "2026-11-04T22:51:32.793Z",
    "size": 1082,
    "path": "../public/assets/tslib.es6-CmEaCU22.js"
  },
  "/assets/SiteLayout-BKSRxN9g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ddd-YxC2Zfoyi2ssN0ZF5hOL05XpnNs"',
    "mtime": "2026-11-04T22:51:32.793Z",
    "size": 3549,
    "path": "../public/assets/SiteLayout-BKSRxN9g.js"
  },
  "/assets/sobre-BEkfVLCp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1288-5r4KYRFaMzZ1gT40KCAQx3g29aE"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 4744,
    "path": "../public/assets/sobre-BEkfVLCp.js"
  },
  "/assets/projetos.index-D-v-Pygf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d8f-UsFcnVKpGNjiaAYJY/vlDuo0Pno"',
    "mtime": "2026-11-04T22:51:32.792Z",
    "size": 3471,
    "path": "../public/assets/projetos.index-D-v-Pygf.js"
  },
  "/assets/styles-Dwe2UrWk.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"17046-8hMtT/446WNPRRSZN8HgCckz81M"',
    "mtime": "2026-11-04T22:51:32.791Z",
    "size": 94278,
    "path": "../public/assets/styles-Dwe2UrWk.css"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _ZSxQkf = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_xPizIG = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_xPizIG };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_ZSxQkf)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
