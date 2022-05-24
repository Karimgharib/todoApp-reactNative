import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// scrollview used when i know ele not be too much

export default function App() {
  const [listTerms, setListTerms] = useState([]);
  const [modal, setModal] = useState(false);
  const onAddText = (term) => {
    setListTerms((listOfTerms) => [
      ...listOfTerms,
      { text: term, id: Math.random().toString() },
    ]);
    setModal(false);
  };
  const cancelmodal = () => {
    setModal(false);
  };

  const deleteGoal = (id) => {
    setListTerms((listOfTerms) => listOfTerms.filter((term) => term.id !== id));
  };
  return (
    // view like div use to hold components only
    <>
      {/* that is status bar in phone */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={() => setModal(true)}
        />
        {/* if modal==true do GoalInput */}
        {modal && (
          <GoalInput
            onAddText={onAddText}
            visible={modal}
            cancel={cancelmodal}
          />
        )}
        <View style={styles.goalsContainer}>
          {/* use scroll view when i know there is scroll */}
          {/* if i have very long list should use flatlist with it */}
          <FlatList
            data={listTerms}
            renderItem={(itemData) => {
              if (itemData.item.text.length !== 0)
                return (
                  <GoalItem
                    onDeleteItem={deleteGoal}
                    item={itemData.item.text}
                    id={itemData.item.id}
                  />
                );
            }}
            // if there is no key
            keyExtractor={(item, index) => item.id}
          />
          {/* some tags in rn styles are different between ios and android to solve this proplem thronded it between view */}
          {/* style is not inherit */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16, //left and right
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 4,
    marginTop: 30,
  },
});

/* display in rN flex bydefault fD=>col */
