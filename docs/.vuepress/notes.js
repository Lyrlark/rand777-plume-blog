import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

// TODO: 配置路由规则及永久链接

const noteMemo = defineNoteConfig({
        dir: 'memo',
        link: '/memo/',
        sidebar: 'auto',
    },
)

const noteMore = defineNoteConfig({
        dir: 'more',
        link: '/more/',
    },
)

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [noteMemo, noteMore],
})
