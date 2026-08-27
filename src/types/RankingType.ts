
export type RankingTemplate = {
    userName: string;
    countRetry: number;
}

export type RankingType = RankingTemplate & {
    id: number;
    finishedAt: string;
}
