import React, {FunctionComponent, useMemo} from 'react';
import {ImageStyle} from 'react-native';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {ECRatingStars} from './ECRatings';

interface StaticRatingsProps {
  stars: number | undefined;
  size?: number;
  starStyle?: ImageStyle;
}

const {starSelectedColor, starUnselectedColor} = ECOMMERCE_THEME.colors;

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
        selectedColor={starSelectedColor}
        unselectedColor={starUnselectedColor}
        size={size}
      />
    ),
    [size, stars, starStyle],
  );
  return <>{ratings}</>;
};
