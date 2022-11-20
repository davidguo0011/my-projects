
public class Dispatcher extends DispatcherBase {
    LinkedList planes = new LinkedList();

    /* Implement all the necessary methods of Dispatcher here */
    @Override
    public int size() {
        return planes.size;
    }

    @Override
    public void addPlane(String planeNumber, String time) {
        planes.insert(new Node(new Plane(planeNumber, time)));
    }

    @Override
    public String allocateLandingSlot(String currentTime) {
        if (planes.head == null) {
            return null;
        }
        String[] newCurrentTime = currentTime.strip().split(":");
        int time =
                Integer.parseInt(newCurrentTime[0]) * 60 + Integer
                        .parseInt(newCurrentTime[1]);
        String[] newPlaneTime = planes.head.data.getTime().strip().split(":");
        int planeTime =
                Integer.parseInt(newPlaneTime[0]) * 60 + Integer
                        .parseInt(newPlaneTime[1]);
        String planeNumber = planes.head.data.getPlaneNumber();

        if (planeTime >= time && planeTime <= time + 5) {
            if (planes.head.next == null) {
                planes.head = null;
            } else {
                planes.head = planes.head.next;
                planes.head.prev = null;
            }
            planes.size--;
            return planeNumber;
        } else if (planeTime < time) {
            planes.head = planes.head.next;
            planes.head.prev = null;
            planes.size--;
            return planeNumber;
        }
        return null;
    }

    @Override
    public String emergencyLanding(String planeNumber) {
        Node head = planes.head;
        while (head != null) {
            if (head.data.getPlaneNumber().equals(planeNumber)) {
                String removedNumber = head.data.getPlaneNumber();
                //remove middle
                if (head.prev != null && head.next != null) {
                    head.prev.next = head.next;
                    head.next.prev = head.prev;
                } else if (head.prev != null) {
                    //remove last one
                    head.prev.next = null;
                    head.prev = null;
                } else if (head.next != null) {
                    //remove first one
                    head.next.prev = null;
                    planes.head = head.next;
                }
                planes.size--;
                return removedNumber;
            }
            head = head.next;
        }
        return null;
    }

    @Override
    public boolean isPresent(String planeNumber) {
        Node head = planes.head;
        while (head != null) {
            if (head.data.getPlaneNumber().equals(planeNumber)) {
                return true;
            }
            head = head.next;
        }
        return false;
    }
}

/* Add any additional helper classes here */
class LinkedList {
    Node head;
    int size;
    public LinkedList() {
        this.head = null;
        size = 0;
    }

    public LinkedList(Node head) {
        this.head = head;
    }

    public void insert(Node node) {
        if (this.head == null) {
            this.head = node;
            size++;
        } else if (this.head.next == null) {
            Node temp = this.head;
            if (temp.data.compareTo(node.data) < 0) {
                this.head.next = node;
                node.prev = this.head;
            } else {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
            size++;
        } else {
            Node temp = this.head;
            while (temp.next != null) {
                if (temp.next.data.compareTo(node.data) > 0
                        && temp.data.compareTo(node.data) > 0) {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                    size++;
                    break;
                }
                if (temp.next.data.compareTo(node.data) > 0
                        && temp.data.compareTo(node.data) < 0) {
                    node.next = temp.next;
                    temp.next.prev = node;
                    node.prev = temp;
                    temp.next = node;
                    size++;
                    break;
                }
                if (temp.next.data.compareTo(node.data) <= 0
                        && temp.data.compareTo(node.data) <= 0) {
                    if (temp.next.next == null) {
                        node.prev = temp.next;
                        temp.next.next = node;
                        size++;
                        break;
                    }
                }
                temp = temp.next;
            }
        }
    }
}

class Node {
    Plane data;
    Node next;
    Node prev;

    Node(Plane data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}