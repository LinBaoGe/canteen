import {View, Text} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import './index.css'
import {useAppSelector} from "@/hook";

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const count = useAppSelector(state => state.counter.value)

  return (
    <View className='index'>
      <Text>About: {count}</Text>
    </View>
  )
}
