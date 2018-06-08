<template>
  <div class="show-item">
    <div class="single-good" v-if="typeOne">
      <router-link :to="{ path: '/goods/' + goods.id}">
        <img :src="goods.logo" class="good-icon" />
      </router-link>
      <div class="good-info">
        <div class="title">
          <label :class="['good-degree', 'degree-' + goods.degree]">{{ degreeLevel }}</label>
          <router-link :to="{ path: '/goods/' + goods.id}" class="main-title">{{ goods.title }}</router-link>
        </div>
        <p class="remarks">{{ goods.description }}</p>
        <p class="regular-price">零售价: ￥{{ goods.regular_price }}</p>
        <p class="member-price">会员价: ￥{{ goods.member_price }}</p>
        <router-link :to="{ path: '/goods/' + goods.id}" class="btn btn-primary btn-s-size">马上抢</router-link>
      </div>
    </div>
    <div class="multi-goods" v-else>
      <ul>
        <li v-for="(vo, i) in goods" :key="i" :title="vo.title">
          <router-link :to="{ path: 'goods/' + vo.id }">
            <img :src="vo.logo" />
            <p>{{ vo.title }}</p>
            <p class="regular-price">零售价: ￥{{ vo.regular_price }}</p>
            <p class="member-price">会员价: ￥{{ vo.member_price }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import _ from 'underscore'

export default {
  name: 'show-item',
  props: ['goods'],
  data () {
    return {
      typeOne: true
    }
  },
  created () {
    this.load()
  },
  computed: {
    degreeLevel: function () {
      const degreeObj = {recommend: '推荐', promo: '促销', special: '特卖', hot: '热卖'}
      return degreeObj[this.goods.degree]
    }
  },
  methods: {
    load () {
      if (_.isArray(this.goods)) {
        this.typeOne = false
      }
    }
  }
}

</script>
