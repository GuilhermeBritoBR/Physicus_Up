import { StyleSheet } from "react-native";
//Neste styles estarão as estilizações padroẽs da nossa aplicação

export const DefaultStyles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    flex: 0.3,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  content: {
    backgroundColor: "#000000cc",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  Text: {
    color: "#ffffff",
    fontSize: 24,
  },
});

export const widgetDefaultComponent = StyleSheet.create({
  widgetContent: {
    flex: 1,
    width: 348,
    height: 198,
    margin: 10,
    backgroundColor: "#000000",
    borderRadius: 15,
  },
  titleWidgetText: {
    fontSize: 16,
    color: "#ffffff",
  },
  titleWidgetView: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dataWidget: {
    fontSize: 24,
  },
});
