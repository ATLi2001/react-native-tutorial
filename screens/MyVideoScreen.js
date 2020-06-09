import React from "react";
import { Video } from "expo-av";

function MyVideoScreen() {
  return (
    <Video
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay={false}
      useNativeControls={true}
      isLooping={true}
      style={{ width: 300, height: 300, alignSelf: "center" }}
    />
  );
}

export default MyVideoScreen;
