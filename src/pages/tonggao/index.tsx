import {View, Text} from "@tarojs/components";
import {useLoad} from "@tarojs/taro";
import {Grid, Space} from "@nutui/nutui-react-taro";

function NoteWithData() {
  return <View style={{display: "flex", flexDirection: "row", margin: '10px 0'}}>
    <View style={{
      padding: 5,
      height: 100,
      width: 100,
    }}
    >
      <View style={{
        height: "100%",
        width: "100%",
        borderRadius: 10,
        background: "url(https://sns-webpic-qc.xhscdn.com/202410131909/ae0b3979bafb0b7874c8662a014254f6/1040g00830v3ogv9nlg5049hhjrirnov2p0q8930!nd_dft_wlteh_webp_3) no-repeat",
        backgroundSize: "cover"
      }}
      >
      </View>
    </View>
    <View>
      <View style={{padding: "0px 0"}}><Text style={{fontSize: 17}}>已经开始期待春天🌷🌻🌵💐🌈☀</Text>️</View>
      <View><Text style={{color: "gray"}}>收益：</Text><Text style={{fontSize: 15, color: "red"}}>¥</Text><Text
        style={{fontSize: 20, color: "red"}}
      >780</Text></View>
      <View style={{display: "flex", flexDirection: "row", gap: 10}}>
        <View style={{
          fontSize: 11,
          color: "rgb(241,151,111)",
          border: "0.5px rgb(241,151,111) solid",
          padding: "0px 4px",
          borderRadius: 3
        }}
        >
          <Text>阅读率:</Text>
          <Text>18%</Text>
        </View>
        <View style={{
          fontSize: 11,
          color: "rgb(241,151,111)",
          border: "0.5px rgb(241,151,111) solid",
          padding: "0px 4px",
          borderRadius: 3
        }}
        >
          <Text>点赞率:</Text>
          <Text>4%</Text>
        </View>
        <View style={{
          fontSize: 11,
          color: "rgb(241,151,111)",
          border: "0.5px rgb(241,151,111) solid",
          padding: "0px 4px",
          borderRadius: 3
        }}
        >
          <Text>收藏率:</Text>
          <Text>0.5%</Text>
        </View>
      </View>
      <View>
        <Space>
          <View style={{display: "flex", flexDirection: "column", padding: "2px 5px"}}>
            <Text style={{fontSize: 13, color: "gray"}}>曝光数</Text>
            <Text>93,232</Text>
          </View>

          <View style={{display: "flex", flexDirection: "column", padding: "2px 5px"}}>
            <Text style={{fontSize: 13, color: "gray"}}>阅读数</Text>
            <Text>9212</Text>
          </View>

          <View style={{display: "flex", flexDirection: "column", padding: "2px 5px"}}>
            <Text style={{fontSize: 13, color: "gray"}}>点赞数</Text>
            <Text>90</Text>
          </View>

          <View style={{display: "flex", flexDirection: "column", padding: "2px 5px"}}>
            <Text style={{fontSize: 13, color: "gray"}}>收藏数</Text>
            <Text>33</Text>
          </View>
        </Space>
      </View>
    </View>
  </View>;
}

const Tonggao = () => {
  useLoad(() => {
    console.log('Tonggao loaded!')
  })

  return (
    <View style={{padding: 10, backgroundColor: 'rgb(246,246,246)'}}>
      <View style={{borderRadius: 10, backgroundColor: 'white', padding: 10, margin: '15px 0'}}>
        <View style={{
          fontSize: 22,
          margin: "15px 0px",
          borderLeft: '3px rgb(107,143,225) solid',
          paddingLeft: 10,
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
          // margin: "10px 0px 2px",
          margin: "15px 0px",
          borderLeft: '3px rgb(107,143,225) solid',
          paddingLeft: 10,
        }}
        >
          <Text>计费方式</Text>
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
      <View style={{borderRadius: 10, backgroundColor: 'white', padding: 10, margin: '15px 0'}}>
        <View style={{
          fontSize: 22,
          margin: "15px 0px",
          borderLeft: '3px rgb(107,143,225) solid',
          paddingLeft: 10,
        }}
        >
          <Text>发文数据</Text>
        </View>
        <Grid gap={3}>
          <Grid.Item text='推广博主数'>
            <Text>233</Text>
          </Grid.Item>
          <Grid.Item text='爆文率'>
            <Text>50%</Text>
          </Grid.Item>
          <Grid.Item text='爆文数'>
            <Text>9</Text>
          </Grid.Item>
          <Grid.Item text='发文数'>
            <Text>120</Text>
          </Grid.Item>
          <Grid.Item text='申请数'>
            <Text>350</Text>
          </Grid.Item>
          <Grid.Item text='通过率'>
            <Text>80%</Text>
          </Grid.Item>
          <Grid.Item text='审核时间'>
            <View>
              <Text>30</Text><Text style={{fontSize: 11, color: 'gray', marginLeft: 3}}>分钟</Text>
            </View>
          </Grid.Item>
          <Grid.Item text='百赞笔记'>
            <Text>49</Text>
          </Grid.Item>
        </Grid>
      </View>
      <View style={{borderRadius: 10, backgroundColor: 'white', padding: 10, margin: '15px 0'}}>
        <View style={{
          fontSize: 22,
          margin: "15px 0px",
          borderLeft: '3px rgb(107,143,225) solid',
          paddingLeft: 10,
        }}
        >
          <Text>爆文笔记</Text>
        </View>
        <NoteWithData />
        <NoteWithData />
        <NoteWithData />
        <NoteWithData />
      </View>
      <View style={{borderRadius: 10, backgroundColor: 'white', padding: 10, margin: '15px 0'}}>
        <View style={{
          fontSize: 22,
          margin: "15px 0px",
          borderLeft: '3px rgb(107,143,225) solid',
          paddingLeft: 10,
        }}
        >
          <Text>销量</Text>
        </View>
        <View style={{
          height: "100vh",
          width: "100%",
          borderRadius: 10,
          background: 'url(IMG_2236.PNG) no-repeat',
          backgroundSize: 'cover'
        }}
        />
      </View>
      <View style={{borderRadius: 10, backgroundColor: 'white', padding: 10, margin: '15px 0', overflow: 'hidden'}}>
        <View style={{
          fontSize: 22,
          margin: "15px 0px",
          borderLeft: '3px rgb(107,143,225) solid',
          paddingLeft: 10,
        }}
        >
          <Text>搭配推荐</Text>
        </View>
        <View>
          <View style={{
            height: "100vw",
            width: "100%",
            borderRadius: 10,
            background: 'url(IMG_2237.JPG) no-repeat',
            backgroundSize: 'contain'
          }}
          />
          <View style={{display: 'flex', alignItems: 'center' ,gap: 10, padding: '10px 0'}}>
            <View>
              <View style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                background: 'url(https://img.alicdn.com/imgextra/i1/550020974/O1CN01PyIFs11J48geEg1oW_!!550020974.jpg_.webp) no-repeat',
                backgroundSize: 'cover'
              }}
              />
              <View style={{textAlign: 'center', color: 'gray'}}>毛衣</View>
            </View>
            <View>
              <View style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                background: 'url(https://img.alicdn.com/bao/uploaded/i4/550020974/O1CN01eJI3Ly1J48ghmXkvS_!!550020974.jpg_q95.jpg_.webp) no-repeat',
                backgroundSize: 'cover'
              }}
              />
              <View style={{textAlign: 'center', color: 'gray'}}>半身裙</View>
            </View>
            <View>
              <View style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                background: 'url(https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/804394550/O1CN01m2lKaX1jTwwxvd4cH_!!804394550.jpg_580x580q90.jpg) no-repeat',
                backgroundSize: 'cover'
              }}
              />
              <View style={{textAlign: 'center', color: 'gray'}}>鞋子</View>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 100, height: 21}}></View>
    </View>
  )
}

export default Tonggao
