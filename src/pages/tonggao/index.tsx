import {View, Text} from "@tarojs/components";
import {useLoad} from "@tarojs/taro";

const Tonggao = () => {
  useLoad(() => {
    console.log('Tonggao loaded!')
  })

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default Tonggao
