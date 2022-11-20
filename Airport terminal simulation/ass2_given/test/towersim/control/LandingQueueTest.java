package towersim.control;
import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;
import towersim.aircraft.Aircraft;
import towersim.aircraft.AircraftCharacteristics;
import towersim.aircraft.FreightAircraft;
import towersim.aircraft.PassengerAircraft;
import towersim.tasks.Task;
import towersim.tasks.TaskList;
import towersim.tasks.TaskType;

import java.util.ArrayList;
import java.util.List;

public class LandingQueueTest {
    private Task task1;
    private Task task2;
    private Task task3;
    private Task task4;
    private Task task5;
    private List<Task> tasks;
    private TaskList taskList;
    private TaskList taskList2;
    private Aircraft freightAircraft1;
    private Aircraft freightAircraft2;
    private Aircraft passengerAircraft1;
    private Aircraft passengerAircraft2;
    private Aircraft passengerAircraftLowFuel;
    private LandingQueue landingQueue;
    private LandingQueue emptyLandingQueue;
    @Before
    public void setUp() {
        task1 = new Task(TaskType.WAIT);
        task2 = new Task(TaskType.LOAD, 75);
        task3 = new Task(TaskType.TAKEOFF);
        task4 = new Task(TaskType.AWAY);
        task5 = new Task(TaskType.LAND);
        tasks = new ArrayList<>();
        tasks.add(task1);
        tasks.add(task2);
        tasks.add(task3);
        tasks.add(task4);
        tasks.add(task5);
        taskList = new TaskList(tasks);
        taskList2 = new TaskList(tasks);

        freightAircraft1 = new FreightAircraft("ABC123",
                AircraftCharacteristics.BOEING_747_8F, taskList,
                AircraftCharacteristics.BOEING_747_8F.fuelCapacity * 0.6,
                AircraftCharacteristics.BOEING_747_8F.freightCapacity);
        passengerAircraft1 = new PassengerAircraft("CSB123",
                AircraftCharacteristics.AIRBUS_A320, taskList2,
                AircraftCharacteristics.AIRBUS_A320.fuelCapacity * 0.8,
                AircraftCharacteristics.AIRBUS_A320.passengerCapacity);
        freightAircraft2 = new FreightAircraft("NMB123",
                AircraftCharacteristics.SIKORSKY_SKYCRANE, taskList,
                AircraftCharacteristics.SIKORSKY_SKYCRANE.fuelCapacity * 0.6,
                AircraftCharacteristics.SIKORSKY_SKYCRANE.freightCapacity);
        passengerAircraft2 = new PassengerAircraft("CNM123",
                AircraftCharacteristics.FOKKER_100, taskList2,
                AircraftCharacteristics.FOKKER_100.fuelCapacity * 0.8,
                AircraftCharacteristics.FOKKER_100.passengerCapacity);
        passengerAircraftLowFuel = new PassengerAircraft("CND123",
                AircraftCharacteristics.FOKKER_100, taskList2,
                AircraftCharacteristics.FOKKER_100.fuelCapacity * 0.1,
                AircraftCharacteristics.FOKKER_100.passengerCapacity);

        landingQueue = new LandingQueue();
        emptyLandingQueue = new LandingQueue();
    }
    @Test
    public void constructorTest1(){
        String expected = "LandingQueue:0";
        assertEquals("the constructor should create an empty list of "
                + "aircraft", expected, emptyLandingQueue.encode());
    }
    @Test
    public void addAircraftTest1(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        String expected = "LandingQueue:4\n"
                + "CSB123,CNM123,ABC123,NMB123";
        assertEquals("the aircraft added to the landing queue is not "
                + "correct", expected, landingQueue.encode());
    }
    @Test
    public void addAircraftTest2(){
        landingQueue.addAircraft(freightAircraft2);
        String expected = "LandingQueue:1\n"
                + "NMB123";
        assertEquals("the aircraft added to the landing queue is not "
                + "correct", expected, landingQueue.encode());
    }
    @Test
    public void peekAircraftTest1(){
        //null if the aircraft is empty
        assertEquals("no aircraft in the queue should return null", null,
                emptyLandingQueue.peekAircraft());
    }
    @Test
    public void peekAircraftTest2(){
        freightAircraft1.declareEmergency();
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        assertEquals("aircraft at the front of the queue with emergency "
                        + "should be returned first",
                freightAircraft1,
                landingQueue.peekAircraft());
    }
    @Test
    public void peekAircraftTest3(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        landingQueue.addAircraft(passengerAircraftLowFuel);
        assertEquals("aircraft with fuel less than 20% should be returned",
                passengerAircraftLowFuel,
                landingQueue.peekAircraft());
    }
    @Test
    public void peekAircraftTest4(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        assertEquals("the first passenger aircraft should be returned",
                passengerAircraft1,
                landingQueue.peekAircraft());
    }
    @Test
    public void peekAircraftTest5(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        assertEquals("the first aircraft should be returned",
                freightAircraft1,
                landingQueue.peekAircraft());
    }
    @Test
    public void removeAircraftTest1(){
        assertEquals("return null if the queue is empty", null,
                emptyLandingQueue.removeAircraft());
    }
    @Test
    public void removeAircraftTest2(){
        freightAircraft1.declareEmergency();
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        assertEquals("the aircraft with emergency should be returned"
                , freightAircraft1, landingQueue.removeAircraft());
        assertEquals("the aircraft with emergency should be removed from the "
                + "list", false, landingQueue.containsAircraft(freightAircraft1));
    }
    @Test
    public void removeAircraftTest3(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        landingQueue.addAircraft(passengerAircraftLowFuel);
        assertEquals("the aircraft with low fuel should be returned"
                , passengerAircraftLowFuel, landingQueue.removeAircraft());
        assertEquals("the aircraft with low fuel should be removed from the "
                + "queue", false, landingQueue.containsAircraft(passengerAircraftLowFuel));
    }
    @Test
    public void removeAircraftTest4(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        assertEquals("the first passenger aircraft with should be "
                        + "returned"
                , passengerAircraft1, landingQueue.removeAircraft());
        assertEquals("the first passenger aircraft should be removed from the "
                + "queue", false, landingQueue.containsAircraft(passengerAircraft1));
    }
    @Test
    public void getAircraftInOrderTest1(){
        List<Aircraft> emptyList = new ArrayList<>();
        assertEquals("empty list should be returned if the queue is empty",
                emptyList, emptyLandingQueue.getAircraftInOrder());
    }
    @Test
    public void getAircraftInOrderTest2(){
        freightAircraft2.declareEmergency();
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        assertEquals("the first aircraft in the list should be the one has "
                + "emergency", freightAircraft2,
                landingQueue.getAircraftInOrder().get(0));
    }
    @Test
    public void getAircraftInOrderTest3(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        landingQueue.addAircraft(passengerAircraftLowFuel);
        assertEquals("the first aircraft in the list should be the one has "
                        + "low fuel", passengerAircraftLowFuel,
                landingQueue.getAircraftInOrder().get(0));
    }
    @Test
    public void getAircraftInOrderTest4(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        assertEquals("the first aircraft in the list should be the first "
                        + "passenger aircraft in the list", passengerAircraft1,
                landingQueue.getAircraftInOrder().get(0));
    }
    @Test
    public void getAircraftInOrderTest5(){
        freightAircraft1.declareEmergency();
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        landingQueue.addAircraft(passengerAircraftLowFuel);
        assertEquals("the first aircraft in the list should be the aircraft "
                        + "with emergency" , freightAircraft1,
                landingQueue.getAircraftInOrder().get(0));
        assertEquals("the second aircraft in the list should be the aircraft "
                        + "with low fuel" , passengerAircraftLowFuel,
                landingQueue.getAircraftInOrder().get(1));
        assertEquals("the third aircraft in the list should be "
                        + "passengerAircraft1", passengerAircraft1,
                landingQueue.getAircraftInOrder().get(2));
        assertEquals("the fourth aircraft in the list should be "
                        + "passengerAircraft2" , passengerAircraft2,
                landingQueue.getAircraftInOrder().get(3));
        assertEquals("the fifth aircraft in the list should be "
                        + "freightAircraft2" ,
                freightAircraft2,
                landingQueue.getAircraftInOrder().get(4));
    }
    @Test
    public void containsAircraftTest1(){
        landingQueue.addAircraft(freightAircraft1);
        landingQueue.addAircraft(passengerAircraft1);
        landingQueue.addAircraft(freightAircraft2);
        landingQueue.addAircraft(passengerAircraft2);
        assertEquals("the list does not contain the correct aircraft" ,
                true,
                landingQueue.containsAircraft(freightAircraft1));
        assertEquals("the list does not contain the correct aircraft" ,
                true,
                landingQueue.containsAircraft(passengerAircraft1));
        assertEquals("the list does not contain the correct aircraft" ,
                true,
                landingQueue.containsAircraft(freightAircraft2));
        assertEquals("the list does not contain the correct aircraft" ,
                true,
                landingQueue.containsAircraft(passengerAircraft2));
    }
    @Test
    public void containsAircraftTest2(){
        landingQueue.addAircraft(freightAircraft1);
        assertEquals("the list should not contain this aircraft" ,
                false,
                landingQueue.containsAircraft(passengerAircraft1));
        assertEquals("the list should not contain this aircraft" ,
                false,
                landingQueue.containsAircraft(freightAircraft2));
        assertEquals("the list should not contain this aircraft" ,
                false,
                landingQueue.containsAircraft(passengerAircraft2));
    }











}
