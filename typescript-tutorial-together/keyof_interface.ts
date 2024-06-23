interface BaseEvent{
    time: number;
    user: string;
}

interface EventMap{
    addToCart: BaseEvent & { quantity: number; productID: string; },
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void{

}

sendEvent("addToCart", {time:0, user:"Sung", quantity:1, productID:"Squid"});