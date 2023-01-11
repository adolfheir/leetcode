const KEY_MAP: Record<any, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
};
function letterCombinations(digits: string): string[] {
    if (digits === "") return [];
    return [...digits]
        .reduce(
            (p, c) =>
                p
                    .map((v) => KEY_MAP[c].map((q) => v + q).flat(Infinity) as string[])
                    .flat(Infinity) as string[],
            [""]
        )
        .flat(Infinity) as string[];
}
