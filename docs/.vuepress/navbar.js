import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/', icon: 'material-symbols:home'},
    {
        text: '博客',
        link: '/blog/',
        icon: 'material-symbols:article-outline',
        activeMatch: '^(/blog/|/article/)',
    },
    {text: 'Projects', link: '/more/projects/', icon: 'el:opensource'},
    {
        text: '笔记',
        items: [
            {text: '每日英语', link: '/memo/everyday-english/', icon: 'icon-park-outline:english'},

        ],
        icon: 'ic:outline-note-alt',
        activeMatch: '^/notes/',
    },
    {
        text: '更多',
        items: [
            // {text: '关于博客', link: '/more/about-blog/', icon: 'material-symbols:person-outline'}, TODO: 需要更新下博客页结构
            {text: '友情链接', link: '/more/friends/', icon: 'fluent:people-16-filled'},

            {text: '网址导航', link: '/more/sites-collect/', icon: 'logos:sitepoint'},
        ],
        icon: 'mingcute:more-3-fill',
        activeMatch: '^/more/',
    },
])
