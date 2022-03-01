import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const ProductsSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={182}
        height={150}
        borderRadius={10}
        marginTop={10}
        marginRight={20}
        marginBottom={5}
      />
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={150} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={20}
            borderRadius={4}
            marginBottom={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export const SkeletonMapped = () => {
  const skeletonArray = [0, 1, 2, 3, 4, 5];
  return (
    <View style={styles.containerContent}>
      <FlatList
        scrollEnabled={true}
        data={skeletonArray}
        renderItem={(_itemData: any) => <ProductsSkeleton />}
        keyExtractor={(item: {toString: () => any}) => item.toString()}
        maxToRenderPerBatch={30}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
