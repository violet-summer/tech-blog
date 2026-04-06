import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content:
		"欢迎访问 Violet 的技术博客（violet-summer/tech-blog）。文章与页面由 Astro 构建，托管于 GitHub Pages。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
