//Move the first pointer n steps ahead to create a gap of n nodes between first and second.
// Check if first becomes null after moving n steps. If yes, remove the head by returning head.next.
// Move both first and second together until first reaches the end (null).
// Remove the nth node by updating second.next = second.next.next.

var removeNthFromEnd = function (head, n) {
  let first = head;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  if (first === null) return head.next;
  let second = head;
  while (first && first.next) {
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
  return head;
};
