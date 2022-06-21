import React, {FunctionComponent, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {ECRatingStars} from '../components/ratings/ECRatings';
import {useAppTheme} from '../theme';

interface FeedbackRatingStarsProps {
  initialRating: number;
  onRatingChange: (rating: number) => void;
}

export const FeedbackRatingStars: FunctionComponent<FeedbackRatingStarsProps> =
  memo(({onRatingChange, initialRating}) => {
    const {
      colors: {starSelectedColor, starUnseletedColor},
    } = useAppTheme();
    return (
      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <ECRatingStars
            starStyle={styles.starStyle}
            onRatingChange={onRatingChange}
            showRating={false}
            count={5}
            initialRating={initialRating}
            selectedColor={starSelectedColor}
            unselectedColor={starUnseletedColor}
            size={35}
            isDisabled={false}
          />
        </View>
      </View>
    );
  });

const styles = StyleSheet.create({
  ratingContainer: {marginTop: 25},
  rating: {
    marginHorizontal: 15,
  },
  starStyle: {
    marginTop: 20,
    marginHorizontal: 14,
  },
});
