import React from "react";
import { View } from "react-native";
import GerakanRepitisi from "./GerakanRepitisi";
const MountainClimberPemula = ({ route }) => {
  return (
      <GerakanRepitisi
        textLatihan="Mountain Climber"
        repitisi="x 16"
        gambarKirim={require("../../../../../assets/gif/perut_pemula/mountain_climber.gif")}
        navigateTo="IstirahatMountainClimber"
        navigateBefore="IstirahatJumpingJacks"
        soundSource={require("../../../../../assets/sounds/perut_pemula/mountain_climber.mp3")}
        route={route}
      />
  );
};
export default MountainClimberPemula;
