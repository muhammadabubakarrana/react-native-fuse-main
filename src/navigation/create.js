// CenterComponent.js
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Modal } from "react-native";
import {
  Buttons,
  Common,
  Headers,
  Icons,
  Images,
  Lines,
  Modals,
  ScrollViews,
  Spacer,
  Text,
  Wrapper,
} from "../components";
import { appIcons, routes } from "../services";
import { goBack, navigate } from "../navigation/rootNavigation";
import { Home } from "../screens/appFlow";
import { height, totalSize, width } from "react-native-dimension";

const CenterComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", async () => {
      await setModalVisible(true);
    });
    return () => unsubscribe();
  }, []);

  const navigateScreen = (option) => {
    if (option == "Create Event") {
      setModalVisible(!modalVisible);
      navigate(routes.createEvent);
    } else if (option == "Location Blast") {
      setModalVisible(!modalVisible);
      navigate(routes.locationBlast);
    } else if (option == "Close") {
      setModalVisible(!modalVisible);
      goBack();
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    goBack();
  };

  const PostOptions = [
    {
      label: "Create Event",
      value: "Create Event",
      icon: appIcons.edit,
      iconSize: totalSize(3),
    },
    {
      label: "Location Blast",
      value: "Location Blast",
      icon: appIcons.wifi,
      iconSize: totalSize(10),
    },
    {
      label: "Close",
      value: "Close",
      icon: appIcons.close,
      type: "error",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Home />
      <Modals.OptionsPopupPrimary
        visible={modalVisible}
        toggle={toggleModal}
        optoins={PostOptions}
        // defaultIconSize={totalSize(20)}
        onPressOption={(item, index) => {
          navigateScreen(item.label);
        }}
      />
    </View>
  );
};

export default CenterComponent;
