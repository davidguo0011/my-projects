public class Plane extends PlaneBase {

    public Plane(String planeNumber, String time) {
        super(planeNumber, time);
    }

    /* Implement all the necessary methods of Plane here */
    @Override
    public int compareTo(PlaneBase o) {
        if (fromTimeToInt(this.getTime()) > fromTimeToInt(o.getTime())) {
            return 1;
        } else if (fromTimeToInt(this.getTime()) < fromTimeToInt(o.getTime())) {
            return -1;
        } else {
            for (int i = 0; i < this.getPlaneNumber().length(); i++) {
                if (this.getPlaneNumber().charAt(i) < o.getPlaneNumber()
                        .charAt(i)) {
                    return -1;
                } else if (this.getPlaneNumber().charAt(i) > o.getPlaneNumber()
                        .charAt(i)) {
                    return 1;
                }
            }
        }
        return 0;
    }
    public int fromTimeToInt(String info) {
        String newString = info.strip().replace(":", "");
        return Integer.parseInt(newString);
    }
}
