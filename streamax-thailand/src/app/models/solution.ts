export interface ISolutions {
    Count: number;
    ScannedCount: number;
    Items: I_Items[];
}

export interface ISolution {
    Item: I_Items;
}

export interface I_Items {
    ImgUrl: IS;
    Name: IS;
    URL: IS;
    Description: IS;
    ThaiDescription: IS;
    ThaiName: IS;
}

export interface IS {
    S: string;
}