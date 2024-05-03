import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { RefreshControl, View } from "react-native";

//importando
import WidgetDefaultComponent from "../WidgetDefaultComponent";
import WidgetIMC_Component from "../WidgetIMC_Component";
import WidgetMusculacao_Component from "../WidgetMusculacao_Component";
import ModalComponent from "../ModalComponent";
import IMC_Content from "./IMC_Content";

export default function UserHome_Component({
  imc,
  desc,
  vidro,
  refresh,
  onRefresh,
  data,
  xDoModal,
  funçao,
}) {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh}>{onRefresh}</RefreshControl>
      }
    >
      <TouchableOpacity>
        <WidgetDefaultComponent
          titleWidget="Corrida no final da tarde"
          data={data}
          RITMOEXERCICIO={"4'00 Min/km"}
          TEMPO={"20:00"}
          KMPESO={"5 KM"}
          ESFROÇO={"Esforço: 9"}
          corDegrade1={"#1db954"}
          corDegrade2={"#309f57"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={funçao}>
        <WidgetIMC_Component
          titleCenter={imc}
          corDegrade1={"#B3B3B3"}
          corDegrade2={"#535353"}
          descriçaoCenter={desc}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <WidgetMusculacao_Component
          titleWidget="Musculação no final da tarde"
          data={"data"}
          RITMOEXERCICIO={"Peito"}
          TEMPO={"01:00:00"}
          KMPESO={"Series: 8"}
          ESFROÇO={"Esforço: 8"}
          descriçaoCenter={"Preencha os dados"}
        />
      </TouchableOpacity>
      <ModalComponent vidro={vidro} open={vidro}>
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IMC_Content xDoModal={xDoModal} />
        </View>
      </ModalComponent>
    </ScrollView>
  );
}
