import React, { useState, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { BodyText } from '../../Typography';
import { Label } from '../../Typography';
import { Subheading } from '../../Typography';
export default React.memo(function Caption({ text }) {
  const [seeMoreVisible, setSeeMoreVisible] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState(2);
  let originalLength = useRef(0);

  let onTextLayout = (e) => {
    if (e.nativeEvent.lines.length > numberOfLines) {
      setSeeMoreVisible(true);
      originalLength.current = e.nativeEvent.lines.length;
    }
  };
  let onShowMore = () => {
    setSeeMoreVisible(false);
    setNumberOfLines(originalLength.current);
  };
  // console.log('Caption Rerendered');
  return (
    <>
      <Text
        style={{ paddingHorizontal: 10 }}
        numberOfLines={numberOfLines}
        onTextLayout={onTextLayout}
      >
        <BodyText>
          <Subheading>Name </Subheading>
          {text}
        </BodyText>
      </Text>
      {seeMoreVisible && (
        <Pressable onPress={onShowMore} style={{ paddingLeft: 15 }}>
          <Label>See More</Label>
        </Pressable>
      )}
    </>
  );
});
