import {View, Text} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import {Cart, Category, Find, Home, User} from '@nutui/icons-react-taro'

import {Button, Card, Divider, Image, Tabbar} from "@nutui/nutui-react-taro";

import {AtDrawer} from "taro-ui";
import './index.scss'

function TongGaoDetail(props: {
  state: {
    delivery: string;
    src: string;
    price: string;
    shopDescription: string;
    vipPrice: string;
    shopName: string;
    title: string
  }
}) {
  return <View style={{backgroundColor: "white", borderRadius: 10, padding: 10}}>
    <Card
      src={props.state.src}
      title={props.state.title}
      price={props.state.price}
      vipPrice={props.state.vipPrice}
      shopDescription={props.state.shopDescription}
      delivery={props.state.delivery}
      shopName={props.state.shopName}
    />
  </View>;
}

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const marginStyle = {margin: 8}
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDescription: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }

  return (
    <View className='index' style={{height: "100%", padding: 10, backgroundColor: "rgb(246,246,246)"}}>
      <View style={{padding: '0 0 10px'}}>
        <Image style={{borderRadius: 10}} src={src} height={200} />
      </View>
      {
        Array.from([1, 2, 3, 4]).map((_, k) => {
          return <TongGaoDetail key={k} state={state} />
        })
      }
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
