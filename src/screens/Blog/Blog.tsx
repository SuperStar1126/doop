import { FlatList, Image, SafeAreaView, View } from "react-native";
import { useTheme } from "../../hooks";
import styles from "./styles";
import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { BlogCard } from "../../components/BlogCard";

type BlogProps = {};
const Blog: React.FC<BlogProps> = (props) => {
    const { AppTheme } = useTheme();
    return (
        <View style={styles.wrapper(AppTheme.Gamma)}>
            <SafeAreaView>
                <Text
                    color={AppTheme.Alpha}
                    style={{ fontWeight: "bold" }}
                    centered
                    topSpacing={20}
                    size={30}
                    bottomSpacing={20}
                >
                    BLOG
                </Text>
                <Icon
                    height={200}
                    resizeContain
                    source={require("../../assets/images/image-placeholder.jpg")}
                />
                <Text
                    color={AppTheme.Primary}
                    style={{ fontWeight: "normal" }}
                    topSpacing={20}
                    size={14}
                >
                    28th January,3:48pm
                </Text>
                <Text
                    color={AppTheme.Alpha}
                    style={{ fontWeight: "300" }}
                    topSpacing={20}
                    size={18}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl
                </Text>
                <Text
                    color={AppTheme.Alpha}
                    style={{ fontWeight: "300" }}
                    topSpacing={20}
                    size={14}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl
                </Text>
                <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                    <View style={styles.avatarContainer}>
                        <Icon
                            height={20}
                            resizeContain
                            source={require("../../assets/icons/avatar.png")}
                        />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text color={AppTheme.Alpha} style={{ fontWeight: "bold" }} size={12}>
                            Author Name
                        </Text>
                        <Text color={AppTheme.Alpha} style={{ fontWeight: "300" }} size={12}>
                            Position
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    renderItem={({ item }) => <BlogCard />}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </SafeAreaView>
        </View>
    );
};

export default Blog;
