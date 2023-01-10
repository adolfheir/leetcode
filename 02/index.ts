// https://leetcode.cn/problems/add-two-numbers/submissions/



 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const newList = new ListNode(0);
    let cur = newList;
    let curry = 0;

    let p1 = l1;
    let p2 = l2;

    while (p1 || p2) {
        let val1 = p1?.val ?? 0;
        let var2 = p2?.val ?? 0;
        let val = val1 + var2 + curry;
        curry = Math.floor(val / 10);
        cur.next = new ListNode(val % 10);
        cur = cur.next;
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
    }
    if (curry > 0) {
        cur.next = new ListNode(curry);
    }

    return cur.next
};
