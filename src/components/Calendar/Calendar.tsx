import React from "react";
import { Calendar, DateData } from "react-native-calendars";
import dayjs from "dayjs";
import { StyleSheet, TouchableOpacity, Dimensions, FlexStyle, ViewStyle } from "react-native";

import { Text } from "../Text";
import { useTheme } from "../../hooks/useTheme";
import { ThemeColors } from "../../styles";

type CalendarProps = {
    selectedDate: Date | string;
    onDaySelect: (val: DateData) => void;
    containerStyles?: ViewStyle[] | ViewStyle;
    isCollapsed: boolean;
};

const CalendarComponent: React.FC<CalendarProps> = (props) => {
    const { selectedDate, onDaySelect, containerStyles, isCollapsed = false } = props;
    const { AppTheme } = useTheme();

    return (
        <Calendar
            theme={{
                calendarBackground: "transparent",
                arrowColor: AppTheme.Primary
            }}
            renderHeader={(date) => {
                return <Text>{dayjs(date).format("MMM")}</Text>;
            }}
            isCollapsed={isCollapsed}
            initialDate={dayjs(selectedDate).format("YYYY-MM-DD")}
            hideExtraDays={true}
            dayComponent={({ date, state }) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.dayContainer(
                            date?.dateString === dayjs(selectedDate).format("YYYY-MM-DD"),
                            ThemeColors.LightGray
                        )}
                    >
                        <Text
                            size={14}
                            color={
                                state === "disabled"
                                    ? "gray"
                                    : date?.dateString === dayjs(selectedDate).format("YYYY-MM-DD")
                                    ? ThemeColors.Blue
                                    : AppTheme.Alpha
                            }
                        >
                            {date.day}
                        </Text>
                    </TouchableOpacity>
                );
            }}
            style={{
                marginHorizontal: 20,

                borderRadius: 4
            }}
            //onDayPress={onDaySelect}
            maxDate={new Date().toDateString()}
            enableSwipeMonths={true}
        />
    );
};

const styles = StyleSheet.create<any>({
    dayContainer: (isSelected: boolean, color: string) => ({
        width: Dimensions.get("window").width / 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Dimensions.get("window").width / 12,
        ...(isSelected && {
            backgroundColor: color
        }),
        paddingVertical: 4
    })
});

export default CalendarComponent;
