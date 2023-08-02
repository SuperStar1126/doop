import React from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "../../hooks";
import styles from "./styles";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Icon } from "../../components/Icon";
import { ThemeColors } from "../../styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Data = [1, 2, 3, 4];

type HomeProps = {};
const Home: React.FC<HomeProps> = (props) => {
    const { AppTheme } = useTheme();

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.wrapper(AppTheme.Gamma)}>
            <View style={styles.header(AppTheme.Gamma)}>
                <View style={styles.logoContainer}>
                    <Icon
                        height={14}
                        width={14}
                        resizeContain
                        source={require("../../assets/icons/gallery.png")}
                    />
                </View>
                <View style={styles.row}>
                    <Icon
                        height={24}
                        width={24}
                        resizeContain
                        source={require("../../assets/icons/video_call.png")}
                    />
                    <Text size={14} weight="400" leftSpacing={4} color={ThemeColors.Blue}>
                        New Meeting
                    </Text>
                </View>
            </View>
            <View style={styles.mainVideoCard}>
                <View style={{ backgroundColor: ThemeColors.Blue, padding: 24 }}>
                    <Text weight="400" size={10} style={styles.videoStatusContainer}>
                        On going
                    </Text>

                    <Text
                        weight="600"
                        size={24}
                        color={AppTheme.Gamma}
                        topSpacing={28}
                        bottomSpacing={28}
                    >
                        Gulu-Gulu Projects Brainstorming
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{
                            flexDirection: "row",
                            width: "100%"
                        }}
                    >
                        <Text
                            style={styles.tagsContainer(AppTheme.Gamma)}
                            size={12}
                            weight="400"
                            color={AppTheme.Gamma}
                        >
                            September 14, 2022
                        </Text>
                        <Text
                            style={styles.tagsContainer(AppTheme.Gamma)}
                            size={12}
                            weight="400"
                            color={AppTheme.Gamma}
                        >
                            01.30 PM
                        </Text>
                        <Text
                            style={styles.tagsContainer(AppTheme.Gamma)}
                            size={12}
                            weight="400"
                            color={AppTheme.Gamma}
                        >
                            Naito Design Team
                        </Text>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        paddingHorizontal: 24,
                        paddingVertical: 12
                    }}
                >
                    <View style={styles.row}>
                        <Text>Joined</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                position: "relative",
                                alignItems: "center",
                                marginLeft: 4
                            }}
                        >
                            {/* {Data.map((item, index) => (
                                <View
                                    style={styles.joinedMembersContainer(
                                        AppTheme.Gamma,
                                        index,
                                        ThemeColors.LightGray
                                    )}
                                >
                                    <Icon
                                        key={index}
                                        height={16}
                                        width={16}
                                        resizeContain
                                        source={require("../../assets/icons/gallery.png")}
                                    />
                                </View>
                            ))} */}
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Meeting")}>
                        <Text
                            style={styles.joinBtn(ThemeColors.LightGray)}
                            size={12}
                            weight="400"
                            color={ThemeColors.Blue}
                        >
                            Join Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 20
                }}
            >
                <Text size={18} weight="600" color={AppTheme.Alpha}>
                    Incoming Meetings
                </Text>
                <Text size={12} weight="500" color={ThemeColors.Blue}>
                    Show All
                </Text>
            </View>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <View
                        style={{
                            borderRadius: 20,
                            overflow: "hidden",
                            marginHorizontal: 8,
                            height: 270,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1
                            },
                            shadowOpacity: 0.18,
                            shadowRadius: 1.0,
                            elevation: 1,
                            width: 176
                        }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 10,
                                backgroundColor: ThemeColors.Blue,
                                justifyContent: "flex-end",
                                width: "100%",
                                height: 186
                            }}
                        >
                            <Text
                                weight="600"
                                size={16}
                                color={AppTheme.Gamma}
                                topSpacing={28}
                                bottomSpacing={28}
                            >
                                Gulu-Gulu Projects Brainstorming
                            </Text>
                        </View>
                        <View
                            style={{
                                alignItems: "center",
                                width: "100%",
                                backgroundColor: "#fff",
                                paddingHorizontal: 4,
                                paddingVertical: 12
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: "100%"
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        position: "relative",
                                        alignItems: "center"
                                    }}
                                >
                                    {/* {Data.map((item, index) => (
                                        <View
                                            style={styles.joinedMembersContainer(
                                                AppTheme.Gamma,
                                                index,
                                                ThemeColors.LightGray
                                            )}
                                        >
                                            <Icon
                                                key={index}
                                                height={16}
                                                width={16}
                                                resizeContain
                                                source={require("../../assets/icons/gallery.png")}
                                            />
                                        </View>
                                    ))} */}
                                </View>
                                <Text size={12} weight="400" color={ThemeColors.Blue}>
                                    12 people
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    marginTop: 16
                                }}
                            >
                                <Text
                                    style={styles.joinBtn(ThemeColors.LightGray)}
                                    size={8}
                                    weight="400"
                                    color={ThemeColors.Blue}
                                >
                                    September 25, 2022
                                </Text>
                                <Text
                                    style={styles.joinBtn(ThemeColors.LightGray)}
                                    size={8}
                                    weight="400"
                                    color={ThemeColors.Blue}
                                >
                                    12 PM - 02PM
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
};

export default Home;
