<template>
    <div class="icons">
        <div class="icon" v-for="iconModel in iconModelList" :key="iconModel.id">
            <img class="icon-img" :src="iconModel.iconImg" alt="">
            <span class="icon-lab">{{iconModel.iconName}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconModelList: [{
        id: '1',
        iconName: '景点门票',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '2',
        iconName: '一日游',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        id: '3',
        iconName: '玩遍周边',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        id: '4',
        iconName: '西安千古情',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        id: '5',
        iconName: '长恨歌',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        id: '6',
        iconName: '动植物园',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        id: '7',
        iconName: '泡温泉',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        id: '8',
        iconName: '兵马俑',
        iconImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }]
    }
  }
}
</script>

<style lang="stylus">
    .icons
        display flex
        flex-wrap wrap
        .icon
            display flex
            flex-wrap wrap
            justify-content center
            align-items center
            width 25%
            height 100px
            /** border-bottom 1px solid blue */
            /** border-right  1px solid black */
            .icon-img
                width 60px
                height 60px
                margin-bottom -15px
            .icon-lab
                font-size 14px
                color #c3c3c3
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
</style>
