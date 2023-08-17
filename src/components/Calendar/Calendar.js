import React from "react";
import { Calendar as RNCalendar, DateData } from "react-native-calendars";
import dayjs from "dayjs";
import { StyleSheet, TouchableOpacity, Dimensions, Text, ViewStyle } from "react-native";

// import { useTheme } from "../../hooks/useTheme";
// import { ThemeColors } from "../../styles";


const Calendar = (props) => {
    const { selectedDate, onDaySelect, containerStyles, isCollapsed = false } = props;

    return (
        <RNCalendar
            theme={{
                calendarBackground: "transparent",
                // arrowColor: AppTheme.Primary
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
                            
                        )}
                    >
                        <Text
                            // size={14}
                            // color={"gray"}
                        >
                            {date?.day}
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

const styles = StyleSheet.create({
    dayContainer: (isSelected, color) => ({
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

export default Calendar;
