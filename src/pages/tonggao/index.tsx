import {View, Text} from "@tarojs/components";
import {useLoad} from "@tarojs/taro";

const Tonggao = () => {
  useLoad(() => {
    console.log('Tonggao loaded!')
  })

  return (
    <View style={{padding: 10, height: '100vh', backgroundColor: 'rgb(246,246,246)'}}>
      <View style={{borderRadius: 10, backgroundColor: 'white', padding: 10, margin: '15px 0'}}>
        <View style={{
          fontSize: 22,
          margin: "10px 0px 2px",
          borderLeft: '5px blue solid',
          paddingLeft: 10,
          backgroundColor: 'rgb(250,250,250)'
        }}
        >
          <Text>气质连衣裙需要50人种草</Text>
        </View>
        <Text>招募</Text>
        <Text>100</Text>
        <View>
          <Text>平台</Text>
          <Text>：</Text>
          <Text>小红书</Text>
        </View>
        <View>
          <Text>笔记形式</Text>
          <Text>：</Text>
          <Text>图文</Text>
        </View>
        <View>
          <Text>截止时间</Text>
          <Text>：</Text>
          <Text>无</Text>
        </View>
        <View>
          <Text>粉丝要求</Text>
          <Text>：</Text>
          <Text>100+</Text>
        </View>
        <View>
          <Text>结算方式</Text>
          <Text>：</Text>
          <Text>基础+爆量奖励</Text>
        </View>
      </View>
      <View style={{borderRadius: 10, backgroundColor: 'white', padding: 10, margin: '15px 0'}}>
        <View style={{
          fontSize: 22,
          margin: "10px 0px 2px",
          borderLeft: '5px blue solid',
          paddingLeft: 10,
          backgroundColor: 'rgb(250,250,250)'
        }}
        >
          <Text>结算方式</Text>
        </View>
        <View>
          <View style={{fontSize: 20, padding: "10px 0 2px"}}><Text>
            基础价格：
          </Text></View>
          <Text>￥30 - ￥50</Text>
          <View>
            <Text style={{fontSize: 12, color: 'gray'}}>(拍摄图片质量OK，正常发出来，阅读1、2百也要付的价格)</Text>
          </View>
        </View>
        <View style={{fontSize: 20, padding: "10px 0 2px"}}><Text>播放量</Text></View>
        <View>
          <Text>{"< 1000:"}</Text>
          <Text>包邮费</Text>
        </View>
        <View>
          <Text>{"> 1000:"}</Text>
          <Text>￥30/1000阅读量</Text>
        </View>
        <View style={{fontSize: 20, padding: "10px 0 2px"}}><Text>举例</Text></View>
        <View>
          <Text>有一个作品20000播放量</Text>
        </View>
        <View>
          <Text>收益：(20000-1000)/1000*30 = ￥570</Text>
        </View>
      </View>
    </View>
  )
}

export default Tonggao
