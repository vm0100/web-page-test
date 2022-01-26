<template>
  <router-view></router-view>
</template>
<script>
import {
  getData,
  configField,
  resultField,
  newLotteryField,
  listField
} from '@/helper/index';
export default {
  name: 'App',

  created() {
    const data = getData(configField);
    if (data) {
      this.$store.commit('setConfig', Object.assign({}, data));
    }
    const result = getData(resultField);
    if (result) {
      this.$store.commit('setResult', result);
    }

    const newLottery = getData(newLotteryField);
    if (newLottery) {
      const config = this.config;
      newLottery.forEach(item => {
        this.$store.commit('setNewLottery', item);
        if (!config[item.key]) {
          this.$set(config, item.key, 0);
        }
      });
      this.$store.commit('setConfig', config);
    }

    const list = getData(listField);
    if (list) {
      this.$store.commit('setList', list);
    }

    const blacklist = getData('blacklist');
    if (blacklist) {
      this.$store.commit('setBlacklist', blacklist);
    }
  }
};
</script>
