export const ellipsis = (content: string, limit:number): string => {
    const len = content.length
    return  (content.length > limit) ? content.substring(0,limit) + ' ...' : content
};