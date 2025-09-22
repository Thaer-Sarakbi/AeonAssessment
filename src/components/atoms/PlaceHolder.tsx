import React from "react";
import { SPACING } from "../../assets/theme";
import Spacer from "./Spacer";
import Caption from "./Caption";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Title from "./Title";

const PlaceHolder = () => (
    <>
     <Spacer height={SPACING.space_20} />
      <Caption text='Total Amount' align='center' fontSize={16} />
      <Spacer height={SPACING.space_20} />
      <SkeletonPlaceholder borderRadius={4}>
       
        <SkeletonPlaceholder.Item alignSelf='center' width={60} height={40} borderRadius={10} marginBottom={SPACING.space_20}/>
        <SkeletonPlaceholder.Item alignSelf='center' width={60} height={40} borderRadius={10} marginBottom={SPACING.space_8}/>
      </SkeletonPlaceholder>
      
      <Title text='Transfer Details' />
      <Spacer height={SPACING.space_20} />
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item width={'100%'} height={40} borderRadius={10} marginBottom={SPACING.space_8}/>
        <SkeletonPlaceholder.Item width={'100%'} height={40} borderRadius={10} marginBottom={SPACING.space_8}/>
        <SkeletonPlaceholder.Item width={'100%'} height={40} borderRadius={10} marginBottom={SPACING.space_8}/>
        <SkeletonPlaceholder.Item width={'100%'} height={40} borderRadius={10} marginBottom={SPACING.space_8}/>
      </SkeletonPlaceholder>
    </>
)

export default PlaceHolder;