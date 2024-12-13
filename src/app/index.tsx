import { Button } from "@/components/button"
import { Steps } from "@/components/steps"
import { Wellcome } from "@/components/welcome"
import { View } from "react-native"
import { router } from "expo-router"

export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Wellcome />
            <Steps />
            
            <Button onPress={()=> router.navigate("/home")}>
                <Button.Title>Comerçar</Button.Title>
            </Button>
        </View>
    )
}