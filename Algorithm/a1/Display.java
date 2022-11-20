
class DisplayRandom extends DisplayRandomBase {

    public DisplayRandom(String[] csvLines) {
        super(csvLines);
    }

    /* Implement all the necessary methods here */
    @Override
    public Plane[] sort(){
        Plane[] data = this.getData();
        this.setData(mergeSort(data,0,data.length-1));
        return this.getData();
    };
    public Plane[] mergeSort(Plane[] planes, int l, int r){
        if (l<r){
            int m = (l+r)/2;
            mergeSort(planes,l,m);
            mergeSort(planes, m + 1, r );
            merge(planes,l, m, r);
        }
        return planes;
    };
    public Plane[] merge(Plane[] planes, int l, int m, int r){
        int n1 = m-l+1;
        int n2 = r-m;
        Plane[] L = new Plane[n1];
        Plane[] R = new Plane[n2];
        for (int i = 0; i<n1; i++){
            L[i] = planes[l+i];
        }
        for (int i = 0; i<n2; i++){
            R[i] = planes[m+1+i];
        }
        int i = 0;
        int j = 0;
        int k = l;
        while(i<n1 && j<n2){
            if (L[i].compareTo(R[j]) <= 0){
                planes[k++] = L[i++];
            }else{
                planes[k++] = R[j++];
            }
        }
        while(i<n1){
            planes[k++] = L[i++];
        }
        while(j<n2){
            planes[k++] = R[j++];
        }
        return planes;
    }
}

class DisplayPartiallySorted extends DisplayPartiallySortedBase {
    public DisplayPartiallySorted(String[] scheduleLines, String[] extraLines) {
        super(scheduleLines, extraLines);
    }
    /* Implement all the necessary methods here */
    @Override
    public Plane[] sort(){
        this.setSchedule(this.insertionSort(this.combineList()));
        this.setExtraPlanes(new Plane[0]);
        return this.getSchedule();
    };
    public Plane[] combineList(){
        Plane[] sorted = this.getSchedule();
        Plane[] unsorted = this.getExtraPlanes();
        Plane[] fullList = new Plane[sorted.length + unsorted.length];

        for(int i = 0; i<sorted.length; i++){
            fullList[i] = sorted[i];
        }
        for(int i = sorted.length; i<sorted.length+unsorted.length; i++){
            fullList[i] = unsorted[i-sorted.length];
        }
        return fullList;
    }
    public Plane[] insertionSort(Plane[] planes) {
        int index;
        Plane valueToInsert;
        for (int i = this.getSchedule().length; i < planes.length; i++) {
            valueToInsert = planes[i];
            index = i;
            while (index > 0 && (planes[index - 1].compareTo(valueToInsert)
                    > 0)) {
                planes[index] = planes[index - 1];
                index--;
            }
            planes[index] = valueToInsert;
        }
        return planes;
    }
}


