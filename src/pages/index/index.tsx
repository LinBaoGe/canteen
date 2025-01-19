import {View, Text, Button} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import './index.css'
import {useAppDispatch, useAppSelector} from "@/hook";
import {increment} from "@/state/reducers/counter";
import {useTranslation} from "react-i18next";

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  const {t, i18n} = useTranslation()

  function increase() {
    dispatch(increment())
  }

  async function switchLanguage() {
    await i18n.changeLanguage("en")
  }

  return (
    <View className='border border-black'>
      <View className='border  border-black bg-amber-600 w-10 h-10'></View>
      <Button onClick={switchLanguage}>switch lan</Button>
      <Button onClick={increase}>{t("plus")}</Button>
      <Text>Hello world! index: {count}</Text>
    </View>
  )
}
