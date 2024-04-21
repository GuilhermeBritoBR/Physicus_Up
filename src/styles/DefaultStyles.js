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
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    alignItems: "center",
    justifyContent: "center",
    
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
    fontFamily: 'GothicA1-Regular',
  },
  Icon:{
    width:25,
    height:25,
  }
});

export const widgetDefaultComponent = StyleSheet.create({
  widgetContent: {
    flex: 1,
    width: 348,
    height: 198,
    margin: 10,
    backgroundColor: "transparent",
    borderRadius: 15,
    fontFamily: 'GothicA1-Regular',
    
    
  },
  titleWidgetText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: 'center',
    flexDirection: 'column',
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
    textAlign: 'center',
    color: '#ffffff',
  },
  CaixaInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
