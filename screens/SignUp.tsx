import { View, Text, Image, ScrollView, Linking,  TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = () => {

  const handleCall = () => {
    const phoneNumber = 'tel:${191}';
    Linking.openURL(phoneNumber)
  }
  const handleCall2 = () => {
    const phoneNumber2 = 'tel:${1195}';
    Linking.openURL(phoneNumber2)
  }
  const handleCall3 = () => {
    const phoneNumber = 'tel:${1193}';
    Linking.openURL(phoneNumber)
  }
  const handleCall4 = () => {
    const phoneNumber = 'tel:${1154}';
    Linking.openURL(phoneNumber)
  }
  const handleCall5 = () => {
    const phoneNumber = 'tel:${1169}';
    Linking.openURL(phoneNumber)
  }
  const handleCall6 = () => {
    const phoneNumber = 'tel:${1646}';
    Linking.openURL(phoneNumber)
  }
  const handleCall7 = () => {
    const phoneNumber = 'tel:${1543}';
    Linking.openURL(phoneNumber)
  }
  const handleCall8 = () => {
    const phoneNumber = 'tel:${1154}';
    Linking.openURL(phoneNumber)
  }
  const handleCall9 = () => {
    const phoneNumber = 'tel:${199}';
    Linking.openURL(phoneNumber)
  }
  const handleCall10 = () => {
    const phoneNumber = 'tel:${1137}';
    Linking.openURL(phoneNumber)
  }
  const handleCall11 = () => {
    const phoneNumber = 'tel:${1146}';
    Linking.openURL(phoneNumber)
  }
  const handleCall12 = () => {
    const phoneNumber = 'tel:${1167}';
    Linking.openURL(phoneNumber)
  }

  return (
    <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center', margin: 15}}>
      {/* <Text style={{ textAlign: 'left' }}>Emergency number</Text> */}
      {/* <Text style = {{fontSize: 18, fontWeight: 'bold'}} >SignUp Page เอาไปเชื่อมกับหน้าของริว font-end หน้า Sign-up</Text> */}
      <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handleCall}  style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/ตำรวจ.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
          <View style = {{marginLeft: 5}}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginTop: 10, marginLeft: 20}}>191</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>เหตุด่วนเหตุร้าย</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall2} style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/กองปราบปราม.png')} style ={{ width: 70, height: 60, marginTop: 15, marginLeft: 5}} />
          <View>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginTop: 10, marginLeft: 5}}>1195</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>กองปราบปราม</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style = {{flexDirection: 'row', marginTop: 20}}>
        <View style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/ตำรวจทางหลวง.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
          <View style = {{marginLeft: 5}}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginTop: 10, marginLeft: 10}}>1193</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>ตำรวจทางหลวง</Text>
          </View>
        </View>
        <View style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/วชิรพยาบาล.png')} style ={{ width: 65, height: 62, marginTop: 10, marginLeft: 5}} />
          <View>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 5}}>1154</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>หน่วยแพทย์กู้ชีวิต</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 10}}>วชิรพยาบาล</Text>
          </View>
        </View>
      </View>

      <View style = {{flexDirection: 'row', marginTop: 20}}>
        <View style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/สถาบันการแพทย์.png')} style ={{ width: 55, height: 55, marginTop: 10, marginLeft: 5}} />
          <View style = {{marginLeft: 5}}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1169</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>สถาบันการแพทย์</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 5}}>ฉุกเฉินแห่งชาติ</Text>
          </View>
        </View>
        <View style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/หน่วยแพทย์ฉุกเฉิน.png')} style ={{ width: 55, height: 55, marginTop: 10, marginLeft: 5}} />
          <View>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1646</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>หน่วยแพทย์ฉุกเฉิน</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 25}}>(กทม.)</Text>
          </View>
        </View>
      </View>

      <View style = {{flexDirection: 'row', marginTop: 20}}>
        <View style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/การทางพิเศษแห่งประเทศไทย.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
          <View style = {{marginLeft: 5}}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1543</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 5}}>การทางพิเศษ</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>แห่งประเทศไทย</Text>
          </View>
        </View>
        <View style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/พบเจออุบัติเหตุทางน้ำ.png')} style ={{ width: 66, height: 66, marginTop: 10, marginLeft: 5}} />
          <View>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 5}}>1154</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>พบเจออุบัติเหตุ</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 20}}>ทางน้ำ</Text>
          </View>
        </View>
      </View>

      <View style = {{flexDirection: 'row', marginTop: 20}}>
        <View style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/แจ้งเหตุไฟไหม้ดับเพลิง.png')} style ={{ width: 55, height: 80, marginTop: 5, marginLeft: 10}} />
          <View style = {{marginLeft: 5}}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 15}}>199</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>แจ้งเหตุไฟไหม้</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 15}}>ดับเพลิง</Text>
          </View>
        </View>
        <View style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/จส.100.png')} style ={{ width: 50, height: 85, marginLeft: 5}} />
          <View>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 20}}>1137</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>จส.100 แจ้งเหตุด่วน</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>เพื่อประสานงานต่อ</Text>
          </View>
        </View>
      </View>

      <View style = {{flexDirection: 'row', marginTop: 20, marginBottom: 30}}>
        <View style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/กรมทางหลวงชนบท.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
          <View style = {{marginLeft: 5}}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1146</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>กรมทางหลวง</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 20}}>ชนบท</Text>
          </View>
        </View>
        <View style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
          <Image source = {require('../img/สถานีวิทยุร่วมด้วยช่วยกัน.png')} style ={{ width: 66, height: 75, marginTop: 10, marginLeft: 5}} />
          <View>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 5}}>1167</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 15}}>สถานีวิทยุ</Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>ร่วมด้วยช่วยกัน</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default SignUp
