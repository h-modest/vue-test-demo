<template>
  <div class="us-home">
    <swiper :loop="true" :aspect-ratio="aspect_ratio">
      <swiper-item v-for="(vo, index) in slides" :key="index">
        <img :src="vo.img" width="100%" />
      </swiper-item>
    </swiper>
    <div class="good-icon-list">
      <ul>
        <li v-for="(vo, i) in good_icon_list" :key="i" @click="jump(vo.id)">
          <img :src="vo.logo" class="good-icon" />
          <div class="title">{{ vo.title }}</div>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
    <section class="good-module">
      <index-title title="本周推荐"></index-title>
      <div class="show-list">
        <show-item :goods="daily_good"></show-item>
      </div>
    </section>
    <section class="good-module">
      <index-title title="热销商品"></index-title>
      <div class="good-list">
        <show-item :goods="goods_list"></show-item>
      </div>
    </section>
  </div>
</template>

<script>

import showItem from '@/components/assembly/ShowItem'
import indexTitle from '@/components/assembly/indexTitle'
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'home',
  data () {
    return {
      good_icon_list: [
        {logo: require('@/assets/images/nav-icon/index-1.png'), title: '家电数码', id: 0},
        {logo: require('@/assets/images/nav-icon/index-2.png'), title: '家居日用', id: 1},
        {logo: require('@/assets/images/nav-icon/index-3.png'), title: '食品饮料', id: 2},
        {logo: require('@/assets/images/nav-icon/index-4.png'), title: '母婴玩具', id: 3},
        {logo: require('@/assets/images/nav-icon/index-5.png'), title: '蔬菜生鲜', id: 4},
        {logo: require('@/assets/images/nav-icon/index-6.png'), title: '服装箱包', id: 5},
        {logo: require('@/assets/images/nav-icon/index-7.png'), title: '美妆洗护', id: 6},
        {logo: require('@/assets/images/nav-icon/index-8.png'), title: '领劵', id: 7},
        {logo: require('@/assets/images/nav-icon/index-9.png'), title: '选品', id: 8},
        {logo: require('@/assets/images/nav-icon/index-10.png'), title: '成为店长', id: 9}
      ],
      slides: [
        {
          url: 'javascript:',
          img: require('@/assets/images/index-adv.png'),
          title: '首页nav-1'
        },
        {
          url: 'javascript:',
          img: require('@/assets/images/index-adv.png'),
          title: '首页nav-2'
        },
        {
          url: 'javascript:',
          img: require('@/assets/images/index-adv.png'),
          title: '首页nav-3'
        }
      ],
      daily_good: {logo: require('@/assets/images/nav-icon/index-1.png'), title: '微软雅黑二十一号标题黑二十一号标题', id: 5, label: '特卖', degree: 'special', description: '微软雅黑二十一号标题黑二十一号标题', regular_price: 50, member_price: 30},
      goods_list: [
        {
          id: 5,
          title: '上架商品1,2,3',
          logo: require('@/assets/images/nav-icon/index-1.png'),
          regular_price: 15,
          member_price: 10
        },
        {
          id: 6,
          title: '上架商品1,2,3',
          logo: require('@/assets/images/nav-icon/index-2.png'),
          regular_price: 15,
          member_price: 10
        },
        {
          id: 7,
          title: '上架商品1,2,3',
          logo: require('@/assets/images/nav-icon/index-3.png'),
          regular_price: 15,
          member_price: 10
        }
      ],
      aspect_ratio: 0.5
    }
  },
  created () {
    console.log(1)
  },
  mounted () {
    window.onresize = () => {
      console.log(this.$refs.swiper)
    }
  },
  methods: {
    jump (id) {
      this.$router.push({ path: '/store/goods', query: {id: id} })
    }
  },
  components: {
    showItem,
    indexTitle,
    Swiper,
    SwiperItem
  }
}

</script>
