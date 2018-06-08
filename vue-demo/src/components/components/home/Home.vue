<template>
  <div class="us-home">
    <wc-swiper ref="swiper">
       <wc-slide v-for="(slide, key) in slides" :key="key">
         <img :src="slide" />
       </wc-slide>
    </wc-swiper>
    <div class="good-icon-list">
      <ul>
        <li v-for="(vo, i) in good_icon_list" :key="i" @click="jump(vo.id)">
          <img :src="vo.logo" class="good-icon" />
          <div class="title">{{ vo.title }}</div>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="show-list">
      <show-item :goods="daily_good"></show-item>
    </div>
  </div>
</template>

<script>

import showItem from '@/components/assembly/showItem'

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
      slides: [require('@/assets/images/index-adv.png'), require('@/assets/images/index-adv.png'), require('@/assets/images/index-adv.png')],
      daily_good: {logo: require('@/assets/images/nav-icon/index-1.png'), title: '微软雅黑二十一号标题黑二十一号标题', id: 5, label: '特卖', degree: 'special', description: '微软雅黑二十一号标题黑二十一号标题', regular_price: 50, member_price: 30}
    }
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
    showItem
  }
}

</script>
