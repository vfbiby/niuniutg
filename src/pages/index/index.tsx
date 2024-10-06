import {View, Text} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import {AtButton, AtIcon} from "taro-ui";

import {Button} from "@nutui/nutui-react-taro";

import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const marginStyle = {margin: 8}

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary'>按钮文案s</AtButton>
      <AtIcon value='clock' size='30' color='#F00'></AtIcon>
      <Button openType='share' style={marginStyle}>
        Share
      </Button>
      <Button openType='openSetting' style={marginStyle}>
        打开授权设置页
      </Button>
      <Button openType='share'>goods</Button>
    </View>
  )
}
