<template>
  <div>
    <ve-map
      class="echarts-map"
      :data="chartData"
      height="65vh"
      width="75vw"
      :extend="chartExtend"
    ></ve-map>
    <el-row :gutter="20" class="mgb20 top100">
      <el-col :span="6">
        <el-card>
          <div class="grid-content">
            <div class="grid-cont-center">
              <div class="grid-num grid-num1">{{ usersCount }}</div>
              <div class="grid-num1">用户总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="grid-content">
            <div class="grid-cont-center">
              <div class="grid-num grid-num2">{{ songCount }}</div>
              <div class="grid-num2">歌曲总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="grid-content">
            <div class="grid-cont-center">
              <div class="grid-num grid-num3">{{ singerCount }}</div>
              <div class="grid-num3">歌手数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="grid-content">
            <div class="grid-cont-center">
              <div class="grid-num grid-num4">{{ songListCount }}</div>
              <div class="grid-num4">歌单数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="20" class="mgb20 top100">
      <el-col :span="12">
        <h3 class="mgb20">用户性别比例</h3>
        <div style="background-color:white">
          <ve-pie :data="usersSex" :theme="options"></ve-pie>
        </div>
      </el-col>
      <el-col :span="12">
        <h3 class="mgb20">歌曲类型分布</h3>
        <div style="background-color:white">
          <ve-histogram :data="songStyle"></ve-histogram>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mgb20 top100">
      <el-col :span="12">
        <h3 class="mgb20">歌手性别比例</h3>
        <div style="background-color:white">
          <ve-pie :data="singerSex"></ve-pie>
        </div>
      </el-col>
      <el-col :span="12">
        <h3 class="mgb20">歌手国籍分布</h3>
        <div style="background-color:white">
          <ve-histogram :data="country" :theme="options1"></ve-histogram>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
import {
  getAllUsers,
  allSong,
  getAllSinger,
  getAllSongList
} from '../api/index'
export default {
  data() {
    return {
      chartData: {
        columns: ['name', '用户数'],
        rows: [
          { name: '海南', 用户数: 0 },
          { name: '广东', 用户数: 0 },
          { name: '广西', 用户数: 0 },
          { name: '福建', 用户数: 0 },
          { name: '湖南', 用户数: 0 },
          { name: '湖北', 用户数: 0 },
          { name: '湖北', 用户数: 0 },
          { name: '安徽', 用户数: 0 },
          { name: '北京', 用户数: 0 },
          { name: '天津', 用户数: 0 },
          { name: '河南', 用户数: 0 },
          { name: '河北', 用户数: 0 },
          { name: '辽宁', 用户数: 0 },
          { name: '江西', 用户数: 0 },
          { name: '浙江', 用户数: 0 },
          { name: '山东', 用户数: 0 },
          { name: '黑龙江', 用户数: 0 },
          { name: '西藏', 用户数: 0 },
          { name: '四川', 用户数: 0 },
          { name: '重庆', 用户数: 0 },
          { name: '上海', 用户数: 0 },
          { name: '江苏', 用户数: 0 },
          { name: '贵州', 用户数: 0 },
          { name: '云南', 用户数: 0 },
          { name: '台湾', 用户数: 0 },
          { name: '山西', 用户数: 0 },
          { name: '陕西', 用户数: 0 },
          { name: '青海', 用户数: 0 },
          { name: '甘肃', 用户数: 0 },
          { name: '吉林', 用户数: 0 },
          { name: '陕西', 用户数: 0 },
          { name: '内蒙古', 用户数: 0 },
          { name: '新疆', 用户数: 0 },
          { name: '宁夏', 用户数: 0 },
          { name: '澳门', 用户数: 0 },
          { name: '香港', 用户数: 0 },
          { name: '南海诸岛', 用户数: 0 }
        ]
      },
      // chartSettings: {
      //   position: 'china',
      //   metrics: ['用户数'],
      //   itemStyle: {
      //     normal: {
      //       borderColor: '#72F2FF',
      //       areaColor: '#7F8FA3',
      //       borderWidth: 2,
      //       shadowBlur: 1
      //     },
      //     emphasis: {
      //       borderColor: '#72F2FF',
      //       areaColor: '#19355A',
      //       borderWidth: 1,
      //       shadowBlur: 1
      //     }
      //   },
      //   label: {
      //     normal: {
      //       show: true,
      //       formatter: function(params) {
      //         if (params.value) {
      //           return params.name + ' ' + params.value // 地图上展示文字 + 数值
      //         } else {
      //           return ''
      //         }
      //       },
      //       color: '#fff',
      //       backgroundColor: 'rgba(0, 15, 42, 0.3)',
      //       fontSize: 12,
      //       align: 'right',
      //       verticalAlign: 'top',
      //       lineHeight: 12,
      //       padding: 4,
      //       borderRadius: 4
      //     },
      //     emphasis: {
      //       show: true,
      //       formatter: function(params) {
      //         console.log(params)
      //         if (params.value) {
      //           return params.name + ' ' + params.value // 地图上展示文字 + 数值
      //         } else {
      //           return ''
      //         }
      //       },
      //       color: '#44F0FF'
      //     }
      //   },
      //   zoom: 1,
      //   selectData: true,
      //   scaleLimit: {
      //     min: 1,
      //     max: 2
      //   },
      //   roam: true
      // },
      chartExtend: {
        legend: {
          show: false
        },
        visualMap: [
          {
            type: 'continuous',
            left: 'left',
            top: 'bottom',
            calculable: true,
            text: ['高', '低'],
            inRange: {
              color: ['#87cefa', '#004C6D', '#29355A']
            },
            textStyle: {
              color: '#fff'
            }
          }
        ]
      },
      // ------------------------------------------------------------
      usersCount: 0, // 用户总数
      songCount: 0, // 歌曲总数
      singerCount: 0, // 歌手数量
      songListCount: 0, // 歌单数量
      users: [] // 所有用户
      // usersSex: {
      //   // 按性别分类的用户数
      //   columns: ['性别', '总数'],
      //   rows: [
      //     { 性别: '男', 总数: 0 },
      //     { 性别: '女', 总数: 0 }
      //   ]
      // },
      // options: {
      //   color: ['#87cefa', '#ffc0cb']
      // },
      // options1: {
      //   color: ['yellow']
      // },
      // songStyle: {
      //   // 按歌单风格分类
      //   columns: ['风格', '总数'],
      //   rows: [
      //     { 风格: '华语', 总数: 0 },
      //     { 风格: '粤语', 总数: 0 },
      //     { 风格: '欧美', 总数: 0 },
      //     { 风格: '日韩', 总数: 0 },
      //     { 风格: 'BGM', 总数: 0 },
      //     { 风格: '轻音乐', 总数: 0 },
      //     { 风格: '乐器', 总数: 0 }
      //   ]
      // },
      // singerSex: {
      //   // 按性别分类的歌手数
      //   columns: ['性别', '总数'],
      //   rows: [
      //     { 性别: '女', 总数: 0 },
      //     { 性别: '男', 总数: 0 },
      //     { 性别: '组合', 总数: 0 },
      //     { 性别: '不明', 总数: 0 }
      //   ]
      // },
      // country: {
      //   columns: ['国籍', '总数'],
      //   rows: [
      //     { 国籍: '中国', 总数: 0 },
      //     { 国籍: '韩国', 总数: 0 },
      //     { 国籍: '日本', 总数: 0 },
      //     { 国籍: '美国', 总数: 0 },
      //     { 国籍: '新加坡', 总数: 0 },
      //     { 国籍: '意大利', 总数: 0 },
      //     { 国籍: '马来西亚', 总数: 0 },
      //     { 国籍: '西班牙', 总数: 0 }
      //   ]
      // }
    }
  },
  created() {
  },
  mounted() {
    this.getSong()
    this.getSinger()
    this.getSongList()
    this.getUsers()
  },
  methods: {
    getUsers() {
      // 用户总数
      getAllUsers().then(res => {
        this.users = res
        this.usersCount = res.length
        for (let item of res) {
          this.getByLocation(item.location)
        }
        // this.usersSex.rows[0]['总数'] = this.setSex(1, this.users)
        // this.usersSex.rows[1]['总数'] = this.setSex(0, this.users)
      })
    },
    // setSex(sex, val) {
    //   // 根据性别获取用户数
    //   let count = 0
    //   for (let item of val) {
    //     if (sex === item.sex) {
    //       count++
    //     }
    //   }
    //   return count
    // },
    getSong() {
      // 歌曲总数
      allSong().then(res => {
        this.songCount = res.length
      })
    },
    getSinger() {
      // 歌手数量
      getAllSinger().then(res => {
        this.singerCount = res.length
        // this.singerSex.rows[0]['总数'] = this.setSex(0, res)
        // this.singerSex.rows[1]['总数'] = this.setSex(1, res)
        // this.singerSex.rows[2]['总数'] = this.setSex(2, res)
        // this.singerSex.rows[3]['总数'] = this.setSex(3, res)
        // for (let item of res) {
        //   this.getByCountry(item.location)
        // }
      })
    },

    getSongList() {
      // 歌单数量
      getAllSongList().then(res => {
        this.songListCount = res.length
        // for (let item of res) {
        //   this.getByStyle(item.style)
        // }
      })
    },
    // getByStyle(style) {
    //   // 根据歌单风格获取数量
    //   for (let item of this.songStyle.rows) {
    //     if (style.includes(item['风格'])) {
    //       item['总数']++
    //     }
    //   }
    // },
    getByLocation(location) {
      for (let item of this.chartData.rows) {
        if (location.includes(item.name)) {
          item['用户数']++
        }
      }
    }
    // getByCountry(location) {
    //   // 根据国籍获取数量
    //   for (let item of this.country.rows) {
    //     if (location.includes(item['国籍'])) {
    //       item['总数']++
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>
.top100 {
  top: 80px;
}
.grid-content {
  display: flex;
  align-items: center;
  height: 50px;
}

.grid-cont-center {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: darkgray;
}
.el-card {
  background-color: rgb(216, 253, 240);
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}
.echarts-map {
  left: 50%;
  transform: translateX(-50%);
}
.grid-num1 {
  color: rgb(23, 216, 23);
}
.grid-num2 {
  color: rgb(0, 128, 0);
}
.grid-num3 {
  color: rgb(142, 216, 23);
}
.grid-num4 {
  color: rgb(23, 216, 152);
}
</style>
