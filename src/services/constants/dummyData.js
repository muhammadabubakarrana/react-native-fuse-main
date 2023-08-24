import { appImages } from "../utilities";

export const users = [
    {
        id: 8373,
        name: 'Jenny Wilson',
        image: appImages.user1,
        address: 'London',
        friend: true,
    },
    {
        id: 22345,
        name: 'William Shaw',
        image: appImages.user2,
        address: 'London',
        friend: true,
    },
    {
        id: 8453,
        name: 'John Thomas',
        image: appImages.user3,
        address: 'London',
        friend: true,
    },
    {
        id: 23445,
        name: 'Nilson Meno',
        image: appImages.user4,
        address: 'New York',
        friend: true,
    },
    {
        id: 46216,
        name: 'Jackobe Black',
        image: appImages.user5,
        address: 'New York',
        friend: true,
    },
]

export const eventStatuses={
    pending:'pending',
    joined:'joined',
    archived:'archived',
}

export const eventProgress={
    live:'live',
    completed:'completed',
    pending:'pending',
}


export const waypointTypes={
    start:'start',
    way:'way',
    destination:'destination',
}