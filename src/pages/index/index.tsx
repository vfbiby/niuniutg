import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import {AtButton, AtIcon} from "taro-ui";

import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary'>按钮文案s</AtButton>
      <AtIcon value='clock' size='30' color='#F00'></AtIcon>
    </View>
  )
}
