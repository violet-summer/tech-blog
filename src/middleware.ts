import type { MiddlewareHandler } from "astro";

/** 仅开发：避免在 http://localhost:4321/ 打开站点（未带 base），导致资源按错误根路径请求 */
export const onRequest: MiddlewareHandler = async (context, next) => {
	const base = import.meta.env.BASE_URL;
	if (
		import.meta.env.DEV &&
		base &&
		base !== "/" &&
		context.url.pathname === "/"
	) {
		return context.redirect(base.endsWith("/") ? base : `${base}/`);
	}
	return next();
};
