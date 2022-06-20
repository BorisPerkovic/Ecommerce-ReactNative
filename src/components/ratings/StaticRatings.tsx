import React, {FunctionComponent, useMemo} from 'react';
import {ImageStyle} from 'react-native';
import {ECRatingStars} from './ECRatings';

interface StaticRatingsProps {
  stars: number | undefined;
  size?: number;
  starStyle?: ImageStyle;
}

export const StaticRatings: FunctionComponent<StaticRatingsProps> = ({
  stars = 0,
  size = 9,
  starStyle,
}) => {
  const ratings = useMemo(
    () => (
      <ECRatingStars
        starStyle={starStyle}
        showRating={false}
        initialRating={stars}
        count={5}
        isDisabled
        selectedColor={'#004666'}
        unselectedColor={'#cccccc'}
        size={size}
      />
    ),
    [size, stars, starStyle],
  );
  return <>{ratings}</>;
};
