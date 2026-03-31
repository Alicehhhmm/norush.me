import type { Layouts } from './layouts';

/**
 * FrontMatter 基础参数
 * 包含通用页面元数据，允许通过字符串索引扩展任意字段
 * @deprecated 未来应避免在此接口中扩展额外字段
 */
export type LegacyFrontMatter = {
  /** 页面布局类型 */
  layout?: Layouts;
  /** 页面标题 */
  title?: string;
  /** 国际化标签数据 */
  labels?: Record<string, string>;
  /** 作者列表（逗号分隔字符串） */
  authors?: string;
} & Record<string, unknown>;

/**
 * 博客文章专用 FrontMatter 接口（待废弃）
 * 继承基础 FrontMatter 并添加博客相关字段
 */
export type LegacyBlogFrontMatter = {
  /** 文章作者（必填） */
  author: string;
  /** 发布日期（ISO 格式字符串） */
  date: string;
} & LegacyFrontMatter;

/**
 * 下载页面专用 FrontMatter 接口（待废弃）
 * 包含下载资源信息和附加元数据
 */
export type LegacyDownloadsFrontMatter = {
  /** 下载资源列表（键值对形式） */
  downloads: Record<string, string>;
  /** 附加信息（如版本说明等） */
  additional: Record<string, string>;
} & LegacyFrontMatter;
