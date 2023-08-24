import { UIManager, LayoutAnimation, Platform } from "react-native";
import { eventProgress, eventStatuses, waypointTypes } from "../constants/dummyData";

export const handleAnimation = () => {
    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}
export const checkExpiry = () => {
    var d1 = Date.parse("2012-11-01");
    var d2 = Date.parse("2012-11-04");
    var expiryDate = Date.parse("2020-12-18");
    var currentDate = Date.now()
    console.log(expiryDate > currentDate)
    if (expiryDate < currentDate) {
        return true
    } else {
        return false
    }
}
export const compareDate = () => {
    var date1 = new Date('December 25, 2017 01:30:00');
    var date2 = new Date('June 18, 2016 02:30:00');
    console.log(date1.getTime() > date2.getTime())
    //best to use .getTime() to compare dates
    //if (date1.getTime() === date2.getTime()) {
    //same date
    //}

    if (date1.getTime() > date2.getTime()) {
        return true
    } else {
        return false
    }
}
export const getEventStatuses = (value) => {
    const isPendingStatus = value === eventStatuses.pending
    const isJoinedStatus = value === eventStatuses.joined
    const isArchivedStatus = value === eventStatuses.archived

    return { isPendingStatus, isJoinedStatus, isArchivedStatus }
}

export const getEventProgresses = (value) => {
    const isPendingProgress = value === eventProgress.pending
    const isCompletedProgress = value === eventProgress.completed
    const isLiveProgress = value === eventProgress.live

    return { isPendingProgress, isCompletedProgress, isLiveProgress }
}

export const getWaypointTypes = (value) => {
    const isStart = value === waypointTypes.start
    const isWay = value === waypointTypes.way
    const isDestination = value === waypointTypes.destination

    return { isStart,isWay,isDestination }
}


