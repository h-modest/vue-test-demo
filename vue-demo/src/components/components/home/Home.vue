<template>
  <div class="us-home">
    <wc-swiper>
       <wc-slide v-for="(slide, key) in slides" :key="key">
         <img :src="slide" />
       </wc-slide>
    </wc-swiper>
    <div class="good-icon-list">
      <ul>
        <li v-for="(vo, i) in good_icon_list" :key="i" @click="jump(vo.id)">
          <div class="circle-icon">
            <i :class="['icon iconfont', vo.logo]"></i>
            <div class="title">{{ vo.title }}</div>
          </div>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    const icon = 'icon-'
    return {
      good_icon_list: [
        {logo: icon + 'msnui-pc', title: '家电数码', id: 0},
        {logo: icon + 'jiaju', title: '家居日用', id: 1},
        {logo: icon + 'huiliuqushipin', title: '食品饮料', id: 2},
        {logo: icon + 'ertongmuying', title: '母婴玩具', id: 3},
        {logo: icon + 'shengxianshuiguo', title: '蔬菜生鲜', id: 4},
        {logo: icon + 'fuzhuangshichang', title: '服装箱包', id: 5},
        {logo: icon + 'meizhuangleimu', title: '美妆洗护', id: 6},
        {logo: icon + 'youhuijuan', title: '领劵', id: 7},
        {logo: icon + 'gouwudaishi', title: '选品', id: 8},
        {logo: icon + 'msnui-store', title: '成为店长', id: 9}
      ],
      slides: [require('@/assets/images/index-adv.png'), require('@/assets/images/index-adv.png'), require('@/assets/images/index-adv.png')]
    }
  },
  methods: {
    jump (id) {
      this.$router.push({ path: '/store/goods/', query: {id: id} })
    }
  }
}

</script>

<style lang="scss">
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .us-home {
    .wc-slide {
      img {
        width: 100%;
      }
    }
    .good-icon-list {
      background: #fff;
      li {
        float: left;
        width: 20vw;
        height: 4.5rem;
        @extend .flex-center;
        flex-direction: column;
        font-size: .8em;
        .circle-icon {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: #fea509;
          color: #fff;
          @extend .flex-center;
          flex-direction: column;
          cursor: pointer;
          .icon {
            font-size: 1.6em;
          }
          .title {
            font-size: .9em;
          }
        }
      }
    }
  }
</style>
