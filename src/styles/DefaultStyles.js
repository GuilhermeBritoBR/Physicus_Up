import { StyleSheet } from "react-native";
//Neste styles estarão as estilizações padroẽs da nossa aplicação

export const DefaultStyles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  Header: {
    flex: 0.3,
    backgroundColor: "#000000",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#121212",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  Text: {
    color: "#ffffff",
    fontSize: 24,
  },
  Icon: {
    width: 25,
    height: 25,
  },
  IconAddPage: {
    height: 256,
    width: 256,
  },
  Button: {
    height: 48,
    width: 120,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    margin: 10,
    fontSize: 18,
  },
  Touch: {
    height: 48,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    border: "solid",
    borderWidth: 1,
    borderColor: "#000000cc",
    borderRadius: 15,
    margin: 5,
  },
  DatePicker: {
    height: 48,
    width: 120,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    margin: 10,
    fontSize: 18,
  },
  ModalCalendar:{
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Calendar:{
    width: '5 rem',
    height: '5 rem',
    padding: 50,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export const widgetDefaultComponent = StyleSheet.create({
  widgetContent: {
    width: 348,
    height: 198,
    margin: 10,
    backgroundColor: "transparent",
    borderRadius: 15,
  },
  titleWidgetText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    flexDirection: "column",
    flex: 1,
  },
  titleWidgetView: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dataWidget: {
    fontSize: 24,
    textAlign: "center",
    color: "#ffffff",
  },
  CaixaInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
