export interface IProduct {
    Count: number;
    ScannedCount: number;
    Items: I_Items[];
}

export interface I_Items {
    Category: IS;
    ImgUrl: IS;
    Name: IS;
    URL: IS;
    Description: IS;
}

export interface IS {
    S: string;
}