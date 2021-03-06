import React from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useAppTheme} from '../../theme';

export const SingleProductSkeleton = () => {
  const {
    colors: {skeletonHighlightColor, skeletonBackgroundColor},
  } = useAppTheme();
  return (
    <>
      <SkeletonPlaceholder
        backgroundColor={skeletonBackgroundColor}
        highlightColor={skeletonHighlightColor}>
        <SkeletonPlaceholder.Item
          width="100%"
          height={(Dimensions.get('screen').height / 100) * 40}
          borderBottomRightRadius={30}
          borderBottomLeftRadius={30}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={35}
          borderRadius={4}
          marginLeft={20}
          marginTop={20}
          marginBottom={7}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={35}
          borderRadius={4}
          marginLeft={20}
          marginBottom={20}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={10}
          borderRadius={4}
          marginLeft={20}
          marginBottom={5}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={10}
          borderRadius={4}
          marginLeft={20}
          marginBottom={5}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={10}
          borderRadius={4}
          marginLeft={20}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={1}
          marginLeft={20}
          marginVertical={20}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          width={70}
          height={30}
          marginLeft={20}
          marginBottom={10}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          width={90}
          height={10}
          marginLeft={20}
          marginBottom={30}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={80}
          marginLeft={20}
          marginTop={40}
        />
      </SkeletonPlaceholder>
    </>
  );
};
