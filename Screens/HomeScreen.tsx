import { View, Text, Image, TextInput, ScrollView} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FeaturedRow } from "../components/FeaturedRow";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';

const HomeScreen = () => {  
    const navigation = useNavigation();


    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false
        
        });

    }, [])

  return (
    <SafeAreaView className= "bg-white pt-5">
      
      {/* Header */}

        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 Ibg-gray-300 p-4 rounded-full"
          />
          <View className= "flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size= {20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size= {35} color= "#00CCBB" />
        </View>

        {/* Search */}

        <View className= 'flex-row items-center space-x-2 pb-2 mx-4'>
          <View className= "flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <SearchIcon color= "gray" size= {20} />
            <TextInput placeholder="Restaraunts and cuisines"
            keyboardType="default"
            />
          </View>
          <AdjustmentsIcon color= "#00CCBB" />
        </View>

        {/* Boldy */}
        <ScrollView 
          classNaame= 'bg-gray-100'
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* Components for categories */}
          <Categories />

          {/* Featured Rows */}
          <FeaturedRow
            id="123" 
            title="Featured" 
            description= "Paid placement from our partners"
            // FeaturedCategory="featured"
          />

          <FeaturedRow
            id="1234" 
            title="Tasty Discounts" 
            description= "Everyones's been enjoying these juicy discounts!"
            // FeaturedCategory="discounts"
          />

          <FeaturedRow
            id="12345" 
            title="Offers near you" 
            description= "why not support your local restaurant tonight!"
            // FeaturedCategory="offers"
          />

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen