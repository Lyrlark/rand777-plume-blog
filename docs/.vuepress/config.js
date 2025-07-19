import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    autoFrontmatter: {
        permalink: true, // 是否生成永久链接
        createTime: true, // 是否生成创建时间
        title: true, // 是否生成标题
    },
    base: '/',
    lang: 'zh-CN',
    title: 'rand777',
    description: 'rand777\' blog.',

    bundler: viteBundler(),

    theme: plumeTheme({

        outline: 'deep', // 启用深度侧边栏
        /**
         * markdown 配置
         */
        markdown: {
            imageSize: true, // 图片优化 'local（本地图片）' | 'all（所有图片）'
            demo: true, // 启用新的代码演示功能
            markmap: true, // 启用 Markmap 图表嵌入语法
            codeTree: true, // 启用代码树
            plot: true, // 隐秘文本
            audioReader: true, // 启用音频阅读器
            mermaid: true, // 启用 Mermaid 图表
        },

        /**
         * 代码高亮
         * https://theme-plume.vuejs.press/config/plugins/code-highlight/
         * */
        // [lang] title="xxxx"  https://theme-plume.vuejs.press/guide/code/features/
        codeHighlighter: {
            themes: {light: 'github-light-high-contrast', dark: 'houston'},
            notationDiff: true,
            notationErrorLevel: true,
            notationFocus: true, // 启用代码块聚焦 https://theme-plume.vuejs.press/guide/code/features/#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E8%81%9A%E7%84%A6
            notationHighlight: true,
            notationWordHighlight: true, // 词高亮 https://theme-plume.vuejs.press/guide/code/features/#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD-%E8%AF%8D%E9%AB%98%E4%BA%AE
            highlightLines: true, // 启用行高亮 https://theme-plume.vuejs.press/guide/code/features/#%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E5%AE%9E%E7%8E%B0%E8%A1%8C%E9%AB%98%E4%BA%AE
            collapsedLines: true,  // 全局启用 代码折叠 https://theme-plume.vuejs.press/guide/code/features/#%E6%8A%98%E5%8F%A0%E4%BB%A3%E7%A0%81%E5%9D%97
            lineNumbers: true,  // 启用行号 https://theme-plume.vuejs.press/guide/code/features/#%E4%BB%A3%E7%A0%81%E8%A1%8C%E5%8F%B7
        },
        // 添加您的部署域名
        hostname: 'https://blog.rand777.space',
        plugins: {},
    }),
})
