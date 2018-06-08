<template lang="html">
  <div class="us-index">
    <header :class="{ 'header-home': isHome}">
      <div class="header-module">
        <template v-if="header_left.isShow">
          <div class="icon" @click="response(header_left.click)">
            <i :class="['iconfont', header_left.icon]"></i>
          </div>
        </template>
        <span class="title">{{ title }}</span>
        <template v-if="header_right.isShow">
          <div class="icon" @click="response(header_right.click)">
            <i :class="['iconfont', header_right.icon]"></i>
          </div>
        </template>
      </div>
      <div class="navigation" v-if="isHome">
        <ul>
          <li v-for="(vo, i) in navigation_list" :key="i" :class="{ hover: i === 0 }">
            <router-link :to="'/home/' + vo.id">
              {{ vo.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <section :class="['content', {'content-home': isHome}]">
      <router-view></router-view>
    </section>
    <footer>
      <ul>
        <li v-for="(item, index) in nav_list" :class="{hover: item.isActive}" :key="index" @click="link(item.link)">
          <i :class="['iconfont',item.logo]"></i>
          <div class="title">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>

import { toggle } from '@/assets/mixin/toggle'

export default {
  name: 'index',
  data () {
    const icon = 'icon-'
    return {
      active: true,
      isHome: true,
      HomeNum: 0,
      header_left: {
        isShow: true,
        icon: icon + 'kefu',
        click: 'service'
      },
      header_right: {
        isShow: true,
        icon: icon + 'tubiaolunkuo-',
        click: 'setting'
      },
      title: '首页',
      nav_list: [
        {logo: icon + 'home', title: '首页', link: '/home', id: 'home', isActive: true},
        {logo: icon + 'faxian', title: '发现', link: '/find', id: 'find', isActive: false},
        {logo: icon + 'shangdian', title: '店铺', link: '/store', id: 'store', isActive: false},
        {logo: icon + 'gouwuchexiantiao', title: '购物车', link: '/cart', id: 'cart', isActive: false},
        {logo: icon + 'wode', title: '我的', link: '/my/5', id: '/my', isActive: false}
      ],
      navigation_list: [
        {title: '为你推荐', id: 0},
        {title: '服饰箱包', id: 1},
        {title: '母婴玩具', id: 2},
        {title: '家电数码', id: 3},
        {title: '家居日用', id: 4},
        {title: '食品饮料', id: 5},
        {title: '蔬果生鲜', id: 6},
        {title: '美妆洗护', id: 7},
        {title: '成为店长', id: 8}
      ]
    }
  },
  created () {
    this.$router.push('/home/0')
  },
  updated () {
    this.nav_toggle()
    this.home_toggle()
  },
  mixins: [toggle]
}
</script>
