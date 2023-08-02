import { View } from "react-native";
import { useTheme } from "../../hooks";
import styles from "./styles";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Icon } from "../../components/Icon";

type SearchProps = {};
const Search: React.FC<SearchProps> = (props) => {
    const { AppTheme } = useTheme();
    return (
        <View style={styles.wrapper(AppTheme.Gamma)}>
            <View style={styles.SearchWrapper}>
                <Text
                    color={AppTheme.Alpha}
                    style={{ fontWeight: "300" }}
                    centered
                    size={30}
                    bottomSpacing={20}
                >
                    What are you {"\n"} looking for?
                </Text>
                <View style={styles.SearchContainer(AppTheme.Gamma)}>
                    <Input placeholder="Type here" containerStyles={styles.InputContainer} />
                    <View style={styles.SearchBtn(AppTheme.Primary)}>
                        <Icon
                            height={30}
                            width={30}
                            resizeContain
                            source={require("../../assets/icons/search.png")}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Search;
