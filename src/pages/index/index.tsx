import {View, Text} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import {Cart, Category, Find, Home, User} from '@nutui/icons-react-taro'

import {Button, Divider, Tabbar} from "@nutui/nutui-react-taro";

import {AtDrawer} from "taro-ui";
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const marginStyle = {margin: 8}

  return (
    <View className='index' style={{height: "100%"}}>
      <View style={{height: "90vh"}}>
        <Text>Hello world!</Text>
        <Divider />
        <Button type='primary' openType='share' style={marginStyle}>
          Share
        </Button>
      </View>
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
