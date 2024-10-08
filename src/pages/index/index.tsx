import {Text, View} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import {Cart, Category, Eye, Find, Home, User} from '@nutui/icons-react-taro'

import {Image, Space, Tabbar} from "@nutui/nutui-react-taro";

import {AtDrawer} from "taro-ui";
import './index.scss'

function TongGaoDetail(props: {
  state?: {
    delivery: string;
    src: string;
    price: string;
    shopDescription: string;
    vipPrice: string;
    shopName: string;
    title: string
  }
}) {
  const image = 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/550020974/O1CN01tjFiel1J48gl5bGG8_!!550020974.jpg_580x580q90.jpg_.webp';

  return <View style={{backgroundColor: "white", borderRadius: 10, padding: '20px 10px', margin: "10px 0"}}>
    <Space direction='vertical'>
      <View>
        <Text style={{fontSize: 20}}>气质连衣裙小红书博主合作</Text>
      </View>
      <View style={{display: 'flex', alignItems: 'baseline', fontSize: 13, padding: '10px auto'}}>
        <View style={{display: 'flex', flexDirection: 'column', padding: '2px 20px 2px 0'}}>
          <Text style={{fontSize: 12, color: 'gray'}}>粉丝数</Text>
          <Text>{">1000"}</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'column', padding: '2px 20px 2px 0'}}>
          <Text style={{fontSize: 12, color: 'gray'}}>预算</Text>
          <Text style={{color: 'rgb(225,68,94)', borderRadius: 5, fontWeight: 'normal'}}>￥30-￥50</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'column', padding: '2px 20px 2px 0'}}>
          <Text style={{fontSize: 12, color: 'gray'}}>合作方式</Text>
          <Text>寄拍</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'column', padding: '2px 20px 2px 0'}}>
          <Text style={{fontSize: 12, color: 'gray'}}>达人数</Text>
          <Text>88</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'column', padding: '2px 20px 2px 0'}}>
          <Text style={{fontSize: 12, color: 'gray'}}>爆文率</Text>
          <Text>66%</Text>
        </View>
      </View>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Image src={image} height={100} width={100} />
        <Image src={image} height={100} width={100} />
        <Image src={image} height={100} width={100} />
      </View>
      <View style={{fontSize: 14, display: 'flex', color: 'gray', marginTop: 10, padding: '3px 0', backgroundColor: 'rgb(250,250,250)', alignItems: 'flex-end', borderRadius: 5}}>
        <View style={{padding: 5, display: 'flex', alignItems: 'center'}}>
          <View style={{margin: '0 5px', height: 15}}><Category height='100%' /></View>
          <Text>还差</Text>
          <Text style={{margin: '0 5px'}}>3</Text>
          <Text>截止</Text>
        </View>
        <View style={{padding: 5, display: 'flex', alignItems: 'center'}}>
          <View style={{margin: '0 5px', height: 15}}><Eye height='100%' /></View>
          <Text>332</Text>
        </View>
      </View>
    </Space>
  </View>;
}

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'

  return (
    <View className='index' style={{height: "100%", padding: 10, backgroundColor: "rgb(246,246,246)"}}>
      <View style={{padding: '5px 0'}}>
        <Image style={{borderRadius: 10}} src={src} height={200} />
      </View>
      {
        Array.from([1, 2, 3, 4]).map((_, k) => {
          return <TongGaoDetail key={k} />
        })
      }
      <View style={{height: '10vh'}}></View>
      <Tabbar fixed>
        <Tabbar.Item title='首页' icon={<Home size={18} />} />
        <Tabbar.Item title='分类' icon={<Category size={18} />} />
        <Tabbar.Item title='发现' icon={<Find size={18} />} />
        <Tabbar.Item title='购物车' icon={<Cart size={18} />} />
        <Tabbar.Item title='我的' icon={<User size={18} />} />
      </Tabbar>
      <AtDrawer right mask items={['菜单1', '菜单2']} show={false}></AtDrawer>
    </View>
  )
}
