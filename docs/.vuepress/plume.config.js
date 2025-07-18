import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '',
  docsRepo: 'https://github.com/Lyrlark',
  docsDir: 'docs',
  appearance: 'true',
  profile: {
    avatar: 'avatar.jpg',
    name: 'rand777',
    description: '',
    circle: true,
    location: '浙江杭州',
    organization: 'PGuide Studio',
  },
  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/Lyrlark' },
  ],
  footer:{
    message: '🥼 <a target="_blank" href="https://theme-plume.vuejs.press/">vuepress-theme-plume</a> & 🔭 rand777'
  },
})
