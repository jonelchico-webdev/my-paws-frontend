import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import Spacer from '../components/common/Spacer';

const TermOfServicesScreen = ({ navigation }) => {

    const data = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id posuere felis. Vivamus nec nibh dolor. Sed ac pretium purus. Sed suscipit lorem non purus ultricies, et interdum purus euismod. Integer auctor leo metus, sed porta mauris ullamcorper non. Aliquam porta maximus purus, sit amet luctus lorem vehicula aliquet. Maecenas est ipsum, pellentesque quis posuere a, dignissim in mi. Nulla fermentum sodales massa. Donec consequat arcu eget purus scelerisque, et finibus nisi suscipit. Donec ullamcorper luctus imperdiet. Integer ultrices ligula hendrerit lacus eleifend, tempor dictum risus tristique.",
        "Morbi tortor augue, consectetur sit amet velit sit amet, vulputate semper est. Duis non rutrum leo. Nam sit amet pulvinar nibh. Donec sed leo quis ligula auctor tempus. Curabitur nec imperdiet leo. Quisque eleifend posuere ipsum, at vulputate tellus dictum eget. Sed tincidunt massa a gravida pellentesque. Vestibulum a consequat eros, sodales blandit nunc. Pellentesque libero eros, efficitur ac est id, pellentesque luctus lectus.",
        "Pellentesque finibus vestibulum velit, eget laoreet libero cursus eu. Curabitur posuere nunc augue, eu auctor nulla accumsan placerat. Donec consequat est vel arcu aliquam, et elementum mi euismod. Vivamus semper ullamcorper felis, et suscipit eros sollicitudin sit amet. Phasellus sed tristique felis. Nulla tristique mollis dui et finibus. Suspendisse augue erat, sagittis vel nisi sit amet, sollicitudin tincidunt sem. Donec fermentum tincidunt erat sit amet pulvinar. Morbi lorem leo, mattis nec aliquet sit amet, rhoncus vel magna. In sed orci leo. In dignissim, libero sit amet blandit tristique, tortor purus congue risus, at posuere nunc libero a lorem. Donec congue sit amet enim semper mattis. Nunc aliquet, dolor dignissim mattis accumsan, dui arcu iaculis mauris, non maximus lorem sem id ligula. Ut efficitur purus risus, quis pulvinar lectus varius vel. Maecenas et condimentum velit. Curabitur viverra eget nunc dignissim pulvinar.",
        "Praesent aliquam placerat magna, eget porta risus malesuada ut. Curabitur accumsan, odio eget facilisis egestas, nisl est rhoncus enim, tempus pulvinar nisi lacus sit amet nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at interdum justo. Quisque auctor in nibh sit amet porta. Vivamus aliquam massa enim, sed placerat ipsum consectetur id. Aenean quam augue, tempor a sapien eu, faucibus elementum felis. Nulla eu dolor eu justo iaculis venenatis eu quis nisl. Proin feugiat ante eu sem sagittis, sed vestibulum libero semper. Ut congue odio id eros porttitor aliquet. Mauris semper nunc sed sem luctus, in venenatis risus euismod. Curabitur posuere est euismod efficitur euismod. Nullam vitae libero at turpis ullamcorper facilisis eget ut leo.",
        "roin ut erat nec risus consequat blandit. Mauris libero elit, pellentesque sed tellus mattis, vestibulum egestas sem. Donec rhoncus sodales sem, vitae fermentum odio malesuada at. Duis hendrerit, turpis ut blandit molestie, dui dui facilisis libero, vitae pretium metus neque in nulla. Etiam id magna finibus, vestibulum mi vitae, feugiat leo. Mauris ac lacus vitae ipsum finibus rutrum. Aenean sit amet sollicitudin lectus, ultricies condimentum urna. Nulla et magna eget ligula pharetra rutrum vel quis neque. Sed mauris mi, porta non magna nec, eleifend blandit massa. Mauris sit amet ligula quis eros pulvinar mattis a eget est.",
        "In ornare, magna vel gravida semper, ipsum enim finibus lorem, ac egestas odio justo vitae dui. In hac habitasse platea dictumst. Aenean tellus mauris, scelerisque nec arcu nec, molestie porttitor sapien. Vivamus gravida, libero iaculis egestas accumsan, leo velit ultricies orci, sit amet tempus mi ex non ipsum. Maecenas imperdiet erat ac quam dictum, eu congue erat pellentesque. Quisque mollis urna nec gravida hendrerit. Etiam augue erat, vestibulum feugiat est tristique, imperdiet fermentum risus. Donec sit amet porta diam, suscipit scelerisque ipsum. Morbi id eros accumsan, aliquet metus vitae, euismod nibh. Vestibulum in porta turpis. Ut tempor ultricies sapien a imperdiet. Etiam lacinia aliquam lorem, nec pharetra odio maximus ac.",
        "Etiam varius tortor at ante vehicula, eu viverra elit consectetur. Donec leo risus, maximus ut interdum a, malesuada et mauris. Integer finibus eu odio laoreet accumsan. Mauris congue eu arcu in aliquet. Vivamus elementum tincidunt turpis vitae finibus. Sed vitae quam eu leo tempor rhoncus. Nam laoreet ante id lorem cursus aliquam. Integer efficitur neque vitae venenatis finibus. Sed eleifend nunc mauris, lacinia luctus neque scelerisque et. Vestibulum vulputate ultricies eros sed dapibus. Duis urna erat, congue sed elementum id, porttitor sit amet tortor. In sagittis leo lorem, sed lobortis magna luctus sed. Duis luctus nulla non semper volutpat. Cras vel elit aliquet, convallis dolor quis, hendrerit odio.",
        "Pellentesque bibendum consequat dolor. Mauris vulputate, purus ac vulputate ultrices, justo orci venenatis dolor, vestibulum efficitur dui massa cursus dolor. In finibus congue felis, vel ornare ex dignissim nec. Donec auctor feugiat est, quis varius purus rhoncus in. Donec nec suscipit lorem, eget tempus massa. Nulla in ipsum orci. Ut id lacus nec ipsum tristique fringilla at a velit. Proin eget augue a nunc tincidunt eleifend eu tristique velit.",
        "Suspendisse purus felis, fermentum volutpat purus ac, fringilla congue turpis. Aenean tellus erat, tempor condimentum sagittis in, maximus at mi. Cras feugiat sed lorem eu rhoncus. Etiam tortor ligula, mollis quis mi ut, fermentum consequat ante. Fusce dolor neque, dapibus eget pretium at, congue in purus. Etiam aliquam odio purus, id elementum dolor commodo eu. Morbi a ultrices elit.",
        "Morbi non tincidunt neque. Sed dignissim volutpat hendrerit. Nullam porttitor purus non tincidunt tempor. Nulla porta ipsum venenatis, malesuada ante feugiat, fermentum ex. Nullam sed tellus nulla. Sed auctor augue a ligula aliquet fringilla. Praesent non lobortis justo, sit amet vulputate neque. Mauris lobortis posuere nisi, blandit rutrum augue aliquet eu.",
        "Donec suscipit purus a tellus congue auctor. Maecenas vel arcu sit amet elit rhoncus lacinia. Donec rutrum placerat lorem id pharetra. Morbi hendrerit congue ligula vitae facilisis. Donec eget urna mollis, facilisis leo sed, ultrices purus. Praesent est massa, accumsan eu consectetur eget, tincidunt sit amet magna. Maecenas tristique lorem ut massa interdum, vitae rutrum mi dictum.",
        "Cras et mattis arcu. Nunc ut velit sit amet ex facilisis consequat. Sed vulputate aliquet elit, non ultrices justo elementum vitae. Maecenas congue lacus dolor, et faucibus ex gravida a. Praesent at lectus nec purus cursus ornare vitae consectetur est. Proin facilisis, odio non sodales interdum, magna tellus lacinia sem, non luctus erat est eget justo. Praesent nec gravida arcu, a commodo orci. Suspendisse tincidunt orci vitae mauris eleifend, semper tincidunt tortor aliquet. Vestibulum tristique luctus turpis, id malesuada neque dictum id. Mauris eu libero semper, placerat eros vitae, bibendum odio.",
        "Praesent sed risus erat. Fusce condimentum a mauris a ullamcorper. Curabitur convallis diam at dui laoreet accumsan. Aliquam vitae leo pretium, tincidunt ex vel, luctus ligula. Integer ante libero, rhoncus finibus nisl et, varius laoreet velit. Cras dictum leo vitae magna pretium, vel maximus magna placerat. Fusce condimentum luctus neque et hendrerit. Etiam non sem maximus erat consectetur dictum. Morbi et erat tincidunt, ultricies velit sed, laoreet dui.",
        "Pellentesque sagittis odio sed metus sodales sodales. Pellentesque pulvinar, mi in posuere tempor, velit purus luctus arcu, eget accumsan metus arcu sit amet tellus. Nam laoreet libero non purus tincidunt cursus. Donec gravida, diam pharetra varius laoreet, felis enim pellentesque felis, nec dignissim dui ligula sit amet justo. Fusce pretium ultricies venenatis. Nulla sagittis diam turpis, molestie pulvinar orci tempor nec. Aliquam iaculis luctus ornare. Curabitur elementum nisi in vestibulum malesuada.",
        "Cras hendrerit, ante at hendrerit semper, sapien dui euismod sapien, scelerisque auctor mauris massa laoreet diam. Pellentesque eget massa et ligula dapibus bibendum a ac felis. Vestibulum tincidunt arcu sapien, quis molestie nibh imperdiet id. Nullam arcu sapien, elementum quis turpis id, rhoncus molestie felis. Morbi in nibh ac diam accumsan maximus. Sed id dictum orci. Sed sodales purus dictum sagittis pharetra. Etiam rhoncus, lectus tempus porttitor rhoncus, odio dui rhoncus purus, eget lobortis felis lacus eget risus. Mauris facilisis condimentum diam nec elementum. Mauris et eros urna. Vivamus ornare massa vel risus laoreet mattis. Mauris tristique est sed est bibendum, quis congue mi lobortis. Fusce semper rutrum tellus, at molestie felis."
    ]

    const renderData = () => {
        return data.map((item, index) => <Text key={index} style={styles.content}>{`${item}`}</Text>)
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {renderData()}
                <Spacer />
            </ScrollView>
        </SafeAreaView>
    );
};

// TermOfServicesScreen.navigationOptions = () => {
//     return {
//         headerShown: false,
//     };
// };

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        // paddingVertical: 10,
        // paddingBottom: 15,
        backgroundColor: '#FAFAFA',
    },
    scrollView: {
        backgroundColor: '#FAFAFA',
        // marginBottom: 15,
    },
    content: {
        marginTop: 15,
        fontSize: 14,
        color: '#4D4C4D'
    }
});

export default TermOfServicesScreen;
