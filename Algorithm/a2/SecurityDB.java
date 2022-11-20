public class SecurityDB extends SecurityDBBase {
    int totalNumber = nextPrime(this.getNumPlanes() * this.getNumPassengersPerPlane());
    Passenger[] passengers = new Passenger[totalNumber];
    int numPassengers = 0;
    boolean expand = false;

    public SecurityDB(int numPlanes, int numPassengersPerPlane) {
        super(numPlanes, numPassengersPerPlane);
    }

    /* Implement all the necessary methods here */
    public int calculateHashCode(String key){
        char[] chars = key.toCharArray();
        int hashCode = 0;
        for(int i = 0; i<chars.length; i++){
            hashCode = hashCode + 1 + chars[0];
            for(int b = 1; b< i+1; b++){
                hashCode += chars[b];
            }
        }
        return hashCode;
    }

    @Override
    public int size() {
        return passengers.length;
    }

    @Override
    public String get(String passportId) {
        if(getIndex(passportId) != -1){
            return passengers[getIndex(passportId)].getName();
        }
        return null;
    }

    @Override
    public boolean remove(String passportId) {
        if(getIndex(passportId) != -1){
            passengers[getIndex(passportId)] = null;
            numPassengers --;
            return true;
        }
        return false;
    }
    @Override
    public int getIndex(String passportId) {
        int hashcode = calculateHashCode(passportId);
        int index = hashcode % this.passengers.length;
        for(int i = 0; i<this.passengers.length; i++){
            if(this.passengers[index] != null &&
                    this.passengers[index].getID().equals(passportId)){
                return index;
            }
            index = (index + 1) % this.passengers.length;
        }
        return -1;
    }

    @Override
    public boolean addPassenger(String name, String passportId) {
        int hashcode = calculateHashCode(passportId);
        int index = hashcode % this.passengers.length;
        int counter = 1;
        while (this.passengers[index] != null){
            if(this.passengers[index].getID().equals(passportId)){
                //if have same id different name
                if(!this.passengers[index].getName().equals(name)){
                    System.err.println("suspicious");
                    return false;
                }
                if(this.passengers[index].numOfPass <= 0){
                    System.err.println("suspicious");
                    return false;
                }else{
                    this.passengers[index].numOfPass --;
                    return true;
                }
            }
            index = (index + 1) % this.passengers.length;
            counter++;
            if(counter > MAX_CAPACITY){
                return false;
            }
            if(counter > this.passengers.length && !expand) {
                Passenger[] newPassengers = new Passenger[MAX_CAPACITY];
                for(int i = 0; i<this.passengers.length; i++){
                    int newIndex =
                            calculateHashCode(passengers[i].getID()) % newPassengers.length;
                    while(newPassengers[newIndex] != null){
                        newIndex = (newIndex+1) % newPassengers.length;
                    }
                    newPassengers[newIndex] = passengers[i];
                }
                this.passengers = newPassengers;
                expand = true;
                index = hashcode % this.passengers.length;
            }
        }
        passengers[index] = new Passenger(passportId, name);
        numPassengers ++;
        passengers[index].numOfPass--;
        return true;
    }

    @Override
    public int count() {
        return numPassengers;
    }



    public int nextPrime(int num) {
        num++;
        for (int i = 2; i < num; i++) {
            if(num%i == 0) {
                num++;
                i=2;
            } else {
                continue;
            }
        }
        return num;
    };
    
    /*
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        REMOVE THE MAIN FUNCTION BEFORE SUBMITTING TO THE AUTOGRADER
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        The following main function is provided for simple debugging only

        Note: to enable assertions, you need to add the "-ea" flag to the
        VM options of SecurityDB's run configuration
     */
}

/* Add any additional helper classes here */

class Passenger {
    String passengerID;
    String name;
    int numOfPass;
    public Passenger (String passengerID, String name){
        this.passengerID = passengerID;
        this.name = name;
        numOfPass = 5;
    }
    public String getID (){
        return passengerID;
    }
    public String getName (){
        return name;
    }

}

