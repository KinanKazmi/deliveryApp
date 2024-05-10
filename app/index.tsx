import { View } from "react-native";
import {sharedStyles} from "@/components/styles/shared";
import SearchBar from "@/components/home/SearchBar";
import TopSwipe from "@/components/home/TopSwipe";
import MidCardArea from "@/components/home/MidCardArea";
import LowerCardsArea from "@/components/home/LowerCardsArea";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <View style={[sharedStyles.oneFlex, sharedStyles.background]}>
			<View style={[sharedStyles.alignCenter, sharedStyles.justifyCenter]}>
				<SearchBar />
			</View>
			<TopSwipe />
			<MidCardArea />
			<LowerCardsArea />
			<Navbar />
    </View>
  );
}
