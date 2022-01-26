<template>
  <div class="container">
    <el-row type="flex">
      <el-col>
        <el-input
          type="textarea"
          :rows="20"
          placeholder="请输入姓名，一个名字一行"
          v-model="blacklist"
        >
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" style="margin-top:20px;">
      <el-col>
        <el-button type="primary" @click="save()">保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {},
  data() {
    return {
      blacklist: this.$store.state.blacklist.join('\r\n')
    };
  },
  methods: {
    save() {
      this.$store.commit(
        'setBlacklist',
        this.blacklist
          .split(/[\s\n]/)
          .filter(v => v && v !== '')
          .map(v => v.trim())
      );
    }
  }
};
</script>
<style>
.container {
  padding: 20px;
}
</style>
