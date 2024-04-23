export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageAdvantage {
    _id: string;
    title: string;
    description: string;


}

export interface HhData{
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSelery: number;
    updatedAt: Date;
}

export interface TopPageModel {
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText?: string;
    tagsTitles: string;
    metaTitles: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages?: TopPageAdvantage[];
    createdAt: Date;
    updatesAt: Date;
    __v: number;
    hh?: HhData;
}