// 
function maxArea(arr: number[]): number {
    let i = 0, j = arr.length - 1, area = 0;
    while(i < j){
        const newArea = Math.min(arr[i],arr[j]) * (j - i);
        if(newArea > area) area = newArea;
        if(arr[i] < arr[j]) i++;
        else j--;
    }
    return area;
};