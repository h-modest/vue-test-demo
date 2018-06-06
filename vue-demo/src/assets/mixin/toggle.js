import _ from 'underscore'

export const toggle = {
  methods: {
    home_toggle () {
      const erg = this.$route.path.split('/')
      const isHome = erg[1] === 'home'
      this.isHome = isHome

      if (isHome && this.HomeNum !== erg[2]) {
        let navList = this.navigation_list
        const navNum = parseInt(erg[2])
        const hoverNav = navList.splice(navNum, 1)[0]

        navList = _.sortBy(navList, (vo) => {
          return vo.id
        })

        navList.unshift(hoverNav)
        this.navigation_list = navList
        this.HomeNum = erg[2]
      }
    },
    nav_toggle () {
      let erg = this.$route.path.split('/')
      _.map(this.nav_list, (vo, i) => {
        if (vo.id === erg[1]) {
          this.nav_list[i].isActive = true
        } else {
          this.nav_list[i].isActive = false
        }
      })
    },
    contact () {
      console.log(this.$route.query.id)
    },
    link (link) {
      this.$router.push({ path: link })
    },
    response (key) {
      if (key === false) return false

      // 响应按钮
      switch (key) {
        case 'service':
        case 'setting':
          const link = '/' + key
          this.$router.push({ path: link })
          break
        default:
      }
    },
    jumpTo (url) {
      this.$router.push({path: url})
    }
  }
}
