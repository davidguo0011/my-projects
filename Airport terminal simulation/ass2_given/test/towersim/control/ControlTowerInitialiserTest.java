package towersim.control;

import org.junit.Before;
import org.junit.Test;
import org.junit.experimental.theories.suppliers.TestedOn;
import towersim.aircraft.Aircraft;
import towersim.aircraft.AircraftCharacteristics;
import towersim.aircraft.FreightAircraft;
import towersim.aircraft.PassengerAircraft;
import towersim.ground.AirplaneTerminal;
import towersim.ground.Gate;
import towersim.ground.Terminal;
import towersim.tasks.Task;
import towersim.tasks.TaskList;
import towersim.tasks.TaskType;
import towersim.util.MalformedSaveException;
import towersim.util.NoSpaceException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

public class ControlTowerInitialiserTest {
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
    private List<Aircraft> aircrafts = new ArrayList<>();
    private Gate gate;
    private Terminal terminal;
    private TakeoffQueue takeOffQueue;
    private LandingQueue landingQueue;
    private Map loadingAircraft;

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
                AircraftCharacteristics.BOEING_747_8F.fuelCapacity,
                AircraftCharacteristics.BOEING_747_8F.freightCapacity);
        passengerAircraft1 = new PassengerAircraft("CSB123",
                AircraftCharacteristics.AIRBUS_A320, taskList2,
                AircraftCharacteristics.AIRBUS_A320.fuelCapacity,
                AircraftCharacteristics.AIRBUS_A320.passengerCapacity);
        freightAircraft2 = new FreightAircraft("NMB123",
                AircraftCharacteristics.SIKORSKY_SKYCRANE, taskList,
                AircraftCharacteristics.SIKORSKY_SKYCRANE.fuelCapacity,
                AircraftCharacteristics.SIKORSKY_SKYCRANE.freightCapacity);
        passengerAircraft2 = new PassengerAircraft("CNM123",
                AircraftCharacteristics.FOKKER_100, taskList2,
                AircraftCharacteristics.FOKKER_100.fuelCapacity,
                AircraftCharacteristics.FOKKER_100.passengerCapacity);

        aircrafts.add(freightAircraft1);
        aircrafts.add(passengerAircraft1);
        aircrafts.add(freightAircraft2);
        aircrafts.add(passengerAircraft2);

        gate = new Gate(2);
        try{
            gate.parkAircraft(freightAircraft1);
        }catch (NoSpaceException e){
            //not possible
        }

        terminal = new AirplaneTerminal(1);
        try{
            terminal.addGate(gate);
        }catch(NoSpaceException e){
            //not possible
        }

        takeOffQueue = new TakeoffQueue();
        landingQueue = new LandingQueue();

        loadingAircraft = new HashMap();
        //encoded aircraft information
        //4
        //ABC123:BOEING_747_8F:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:226117.00:false:137756
        //CSB123:AIRBUS_A320:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:27200.00:false:150
        //NMB123:SIKORSKY_SKYCRANE:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:3328.00:false:9100
        //CNM123:FOKKER_100:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:13365.00:false:97
    }

    @Test
    public void loadTickTest1(){
        String fileContent = "5";
        try {
            assertEquals("The tick loaded is not correct", 5, ControlTowerInitialiser.loadTick(
                    new StringReader(fileContent)));
        } catch (MalformedSaveException | IOException expected) {}
    }
    @Test
    public void loadTickTest2(){
        String fileContent = "123456789";
        try {
            assertEquals("The tick loaded is not correct", 123456789,
                    ControlTowerInitialiser.loadTick(
                    new StringReader(fileContent)));
        } catch (MalformedSaveException | IOException expected) {}
    }
    @Test
    public void loadAircraftTest1(){
        String fileContent = String.join(System.lineSeparator(),
                "4",
                "ABC123:BOEING_747_8F:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:226117"
                        + ".00:false:137756",
                "CSB123:AIRBUS_A320:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:27200"
                        + ".00:false:150",
                "NMB123:SIKORSKY_SKYCRANE:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:3328"
                        + ".00:false:9100",
                "CNM123:FOKKER_100:WAIT,LOAD@75,TAKEOFF,AWAY,LAND:13365"
                        + ".00:false:97");
        try {
            assertEquals("The aircrafts loaded are not correct", aircrafts, ControlTowerInitialiser.loadAircraft(
                    new StringReader(fileContent)));
        } catch (MalformedSaveException | IOException expected) {}
    }

    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest1() throws MalformedSaveException{
        //check empty line
        ControlTowerInitialiser.readAircraft("");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest2() throws MalformedSaveException{
        //check number of ":"
        ControlTowerInitialiser.readAircraft("CNM123:F:OKKER_100:WAIT,"
                + "LOAD@:75,TAKEOFF,AWAY,LAND::::13365.00:false:97");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest3() throws MalformedSaveException{
        //check aircraft type
        ControlTowerInitialiser.readAircraft("NMB123:SIKORSKY_IamnotanAircraft"
                + ":WAIT,"
                + "LOAD@75,TAKEOFF,AWAY,LAND:3328.00:false:9100");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest4() throws MalformedSaveException{
        //check the amount of passenger/freight and fuel are number
        ControlTowerInitialiser.readAircraft("CSB123:AIRBUS_A320:WAIT,"
                + "LOAD@75,TAKEOFF,AWAY,LAND:22aa00:false:1vsa0");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest5() throws MalformedSaveException{
        //check the amount of fuel and passenger/freight throw exception
        ControlTowerInitialiser.readAircraft("CSB123:AIRBUS_A320:WAIT,"
                + "LOAD@75,TAKEOFF,AWAY,LAND:2721111111.00:false:0");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest6() throws MalformedSaveException{
        //check the amount of fuel and passenger/freight throw exception
        ControlTowerInitialiser.readAircraft("CSB123:AIRBUS_A320:WAIT,"
                + "LOAD@75,TAKEOFF,AWAY,LAND:-111.00:false:0");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest7() throws MalformedSaveException{
        //check the amount of fuel and passenger/freight throw exception
        ControlTowerInitialiser.readAircraft("CSB123:AIRBUS_A320:WAIT,"
                + "LOAD@75,TAKEOFF,AWAY,LAND:100.00:false:-11");
    }
    @Test
    public void readAircraftTest8() throws MalformedSaveException {
        //check read correct aircraft
        String fileContent = "ABC123:BOEING_747_8F:WAIT,LOAD@75,TAKEOFF,AWAY,"
                + "LAND:226117.00:false:137756";
        assertEquals("The aircraft read is not correct", freightAircraft1.encode(),
                ControlTowerInitialiser.readAircraft(fileContent).encode());
    }
    @Test
    public void readAircraftTest9() throws MalformedSaveException {
        //check read correct aircraft
        String fileContent = "CSB123:AIRBUS_A320:WAIT,LOAD@75,TAKEOFF,AWAY,"
                + "LAND:27200.00:false:150";
        assertEquals("The aircraft read is not correct", passengerAircraft1.encode(),
                ControlTowerInitialiser.readAircraft(fileContent).encode());
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest10() throws MalformedSaveException{
        //check number of ":"
        ControlTowerInitialiser.readAircraft("CNM123:FOKKER_100:WAIT,"
                + "LOAD@:75,TAKEOFF,AWAY,LAND:13365.00:false:97:");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest11() throws MalformedSaveException{
        //throw exception if the fuel amount is not double
        ControlTowerInitialiser.readAircraft("CNM123:FOKKER_100:WAIT,"
                + "LOAD@75,TAKEOFF,AWAY,LAND:13365:false:97");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest12() throws MalformedSaveException{
        //throw exception if the fuel amount is not double
        ControlTowerInitialiser.readAircraft("CNM123:FOKKER_100:WAIT,"
                + "LOAD@@75,TAKEOFF,AWAY,LAND:13365.00:false:97");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest13() throws MalformedSaveException{
        //throw exception if the fuel amount is not double
        ControlTowerInitialiser.readAircraft("CNM123:FOKKER_100:WAIT,"
                + "LOAD@75@,TAKEOFF,AWAY,LAND:13365.00:false:97");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest14() throws MalformedSaveException{
        //throw exception if the fuel amount is not double
        ControlTowerInitialiser.readAircraft("CNM123:FOKKER_100:WAIT,"
                + "@LOAD@75,TAKEOFF,AWAY,LAND:13365.00:false:97");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest15() throws MalformedSaveException{
        //throw exception if the fuel amount is not double
        ControlTowerInitialiser.readAircraft("CNM123:FOKKER_100:WAIT,"
                + "LOAD75,TAKEOFF,AWAY,LAND:13365.00:false:97");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest16() throws MalformedSaveException{
        //throw exception if the fuel amount is not double
        ControlTowerInitialiser.readAircraft(":CNM123:FOKKER_100:WAIT,"
                + "LOAD@75,TAKEOFF,AWAY,LAND:13365.00:false:97");
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest17() throws MalformedSaveException {
        String aircraftString = "DAV123:AIRBUS_A320:WAIT,LOAD@20,TAKEOFF,"
                + "AWAY,LAND:20000.00:false:100:";
        ControlTowerInitialiser.readAircraft(aircraftString);
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest18() throws MalformedSaveException {
        String aircraftString = "DAV123AIRBUS_A320:WAIT,LOAD@20,TAKEOFF,"
                + "AWAY,LAND:20000.00:false:100";
        ControlTowerInitialiser.readAircraft(aircraftString);
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest19() throws MalformedSaveException {
        String aircraftString = "DAV123:AIRBUS_A320:WAIT,LOAD@20,TAKEOFF,"
                + "AWAY,LAND:notanumber:false:100";
        ControlTowerInitialiser.readAircraft(aircraftString);
    }
    @Test (expected = MalformedSaveException.class)
    public void readAircraftTest20() throws MalformedSaveException {
        String aircraftString = "DAV123:AIRBUS_A320:WAIT,LOAD@20,TAKEOFF,"
                + "AWAY,LAND:-80:false:100";
        ControlTowerInitialiser.readAircraft(aircraftString);
    }
    @Test (expected = MalformedSaveException.class)
    public void readGateTest1() throws MalformedSaveException {
        //check the number of ":"
        String fileContent = "1:emp::ty";
        ControlTowerInitialiser.readGate(fileContent,aircrafts);
    }
    @Test (expected = MalformedSaveException.class)
    public void readGateTest2() throws MalformedSaveException {
        //check the gate number is a number
        String fileContent = "a:empty";
        ControlTowerInitialiser.readGate(fileContent,aircrafts);
    }
    @Test (expected = MalformedSaveException.class)
    public void readGateTest3() throws MalformedSaveException {
        //check the gate number < 1
        String fileContent = "0:empty";
        ControlTowerInitialiser.readGate(fileContent,aircrafts);
    }
    @Test
    public void readGateTest4() throws MalformedSaveException {
        //check the gate with aircraft parked is correct
        String fileContent = "2:ABC123";
        assertEquals("The gate read is not correct", gate.encode(),
                ControlTowerInitialiser.readGate(fileContent,aircrafts).encode());
    }
    @Test(expected = MalformedSaveException.class)
    public void readTerminalTest1() throws IOException, MalformedSaveException {
        //check the number of ":" in the terminal info
        String fileContent = "AirplaneTe:rminal:1:false:1";
        String gateContent = "2:ABC123";
        ControlTowerInitialiser.readTerminal(fileContent,
                new BufferedReader(new StringReader(gateContent)), aircrafts);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTerminalTest2() throws IOException, MalformedSaveException {
        //check the terminal type, AirplaneTerminal or HelicopterTerminal
        String fileContent = "PlaneTerminal:1:false:1";
        String gateContent = "2:ABC123";
        ControlTowerInitialiser.readTerminal(fileContent,
                new BufferedReader(new StringReader(gateContent)), aircrafts);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTerminalTest3() throws IOException, MalformedSaveException {
        //check the terminal number less than 1
        String fileContent = "AirplaneTerminal:0:false:1";
        String gateContent = "2:ABC123";
        ControlTowerInitialiser.readTerminal(fileContent,
                new BufferedReader(new StringReader(gateContent)), aircrafts);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTerminalTest4() throws IOException, MalformedSaveException {
        //check the number of gate less than 0
        String fileContent = "AirplaneTerminal:1:false:-1";
        String gateContent = "2:ABC123";
        ControlTowerInitialiser.readTerminal(fileContent,
                new BufferedReader(new StringReader(gateContent)), aircrafts);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTerminalTest5() throws IOException, MalformedSaveException {
        //check the number of gate is not a number
        String fileContent = "AirplaneTerminal:1:false:a";
        String gateContent = "2:ABC123";
        ControlTowerInitialiser.readTerminal(fileContent,
                new BufferedReader(new StringReader(gateContent)), aircrafts);
    }
    @Test
    public void readTerminalTest6() throws IOException, MalformedSaveException {
        //check the terminal and the gate it contains is correct
        String fileContent = "AirplaneTerminal:1:false:1";
        String gateContent = "2:ABC123";
        assertEquals("The terminal and the gate it contains is not correct",
                terminal.encode(), ControlTowerInitialiser.readTerminal(fileContent,
                        new BufferedReader(new StringReader(gateContent)),
                        aircrafts).encode());
    }
    @Test
    public void readTerminalTest7() throws IOException, MalformedSaveException {
        //check the terminal and the gate it contains is correct
        Gate gate2 = new Gate(3);
        try{
            terminal.addGate(gate2);
        }catch(NoSpaceException nse){
            //not possible
        }
        String fileContent = "AirplaneTerminal:1:false:2";
        String gateContent = "2:ABC123\n3:empty";
        assertEquals("The terminal and the gate it contains is not correct",
                terminal.encode(), ControlTowerInitialiser.readTerminal(fileContent,
                        new BufferedReader(new StringReader(gateContent)),
                        aircrafts).encode());
    }
    @Test
    public void loadTerminalWithGatesTest1()
            throws IOException, MalformedSaveException {
        //check the number of terminal on the first line, terminal, gates and
        // airplane parked at the gate is correct
        String fileContent = "1\nAirplaneTerminal:1:false:1\n2:ABC123";
        List<Terminal> terminals =
                ControlTowerInitialiser.loadTerminalsWithGates(new StringReader(fileContent),aircrafts);
        assertEquals("The first line number is not equal to the number of "
                + "terminal read", 1, terminals.size());
        assertEquals("The terminal is not correct", terminal.encode(),
                terminals.get(0).encode());
    }
    @Test
    public void loadTerminalWithGatesTest2()
            throws IOException, MalformedSaveException {
        //check some more gates
        Gate gate2 = new Gate(3);
        try{
            terminal.addGate(gate2);
        }catch(NoSpaceException nse){
            //not possible
        }
        String fileContent = "1\nAirplaneTerminal:1:false:2\n2:ABC123\n3:empty";
        List<Terminal> terminals =
                ControlTowerInitialiser.loadTerminalsWithGates(new StringReader(fileContent),aircrafts);
        assertEquals("The first line number is not equal to the number of "
                + "terminal read", 1, terminals.size());
        assertEquals("The terminal is not correct", terminal.encode(),
                terminals.get(0).encode());
    }
    @Test
    public void loadTerminalWithGatesTest3()
            throws IOException, MalformedSaveException {
        //check more terminals
        Gate gate2 = new Gate(3);
        try{
            terminal.addGate(gate2);
        }catch(NoSpaceException nse){
            //not possible
        }
        Terminal terminal2 = new AirplaneTerminal(2);
        String fileContent = "2\nAirplaneTerminal:1:false:2\n2:ABC123\n3"
                + ":empty\nAirplaneTerminal:2:false:0";
        List<Terminal> terminals =
                ControlTowerInitialiser.loadTerminalsWithGates(new StringReader(fileContent),aircrafts);
        assertEquals("The first line number is not equal to the number of "
                + "terminal read", 2, terminals.size());
        assertEquals("The first terminal is not correct", terminal.encode(),
                terminals.get(0).encode());
        assertEquals("The second terminal is not correct", terminal2.encode(),
                terminals.get(1).encode());
    }
    @Test(expected = MalformedSaveException.class)
    public void loadTerminalWithGatesTest4()
            throws IOException, MalformedSaveException {
        //check the number of terminal on the first line is not a number
        String fileContent = "a\nAirplaneTerminal:1:false:1\n2:ABC123";
        List<Terminal> terminals =
                ControlTowerInitialiser.loadTerminalsWithGates(new StringReader(fileContent),aircrafts);
    }
    @Test(expected = MalformedSaveException.class)
    public void loadTerminalWithGatesTest5()
            throws IOException, MalformedSaveException {
        //check the number of terminal on the first line is not the number of
        // terminal read
        String fileContent = "5\nAirplaneTerminal:1:false:1\n2:ABC123";
        List<Terminal> terminals =
                ControlTowerInitialiser.loadTerminalsWithGates(new StringReader(fileContent),aircrafts);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTaskListTest1() throws MalformedSaveException {
        //check correct TaskType
        String fileContent = "WAIAT,LOAD@75,TAKEOFF,AWAY,LAND";
        ControlTowerInitialiser.readTaskList(fileContent);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTaskListTest2() throws MalformedSaveException {
        //check the number of @ LOAD task has
        String fileContent = "WAIT,LOAD@@75,TAKEOFF,AWAY,LAND";
        ControlTowerInitialiser.readTaskList(fileContent);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTaskListTest3() throws MalformedSaveException {
        //check load percentage < 0
        String fileContent = "WAIT,LOAD@-7,TAKEOFF,AWAY,LAND";
        ControlTowerInitialiser.readTaskList(fileContent);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTaskListTest4() throws MalformedSaveException {
        //check load percentage not a number
        String fileContent = "WAIT,LOAD@a,TAKEOFF,AWAY,LAND";
        ControlTowerInitialiser.readTaskList(fileContent);
    }
    @Test(expected = MalformedSaveException.class)
    public void readTaskListTest5() throws MalformedSaveException {
        //check wrong order
        String fileContent = "AWAY,LOAD@75,TAKEOFF,AWAY,LAND";
        ControlTowerInitialiser.readTaskList(fileContent);
    }
    @Test
    public void readTaskListTest6() throws MalformedSaveException {
        //check correct order
        String fileContent = "WAIT,LOAD@75,TAKEOFF,AWAY,LAND";
        ControlTowerInitialiser.readTaskList(fileContent);
    }
    @Test
    public void readTaskListTest7() throws MalformedSaveException {
        //check the taskList is correct
        String fileContent = "WAIT,LOAD@75,TAKEOFF,AWAY,LAND";
        TaskList tasklist = ControlTowerInitialiser.readTaskList(fileContent);
        assertEquals("The task read is not correct", taskList.encode(),
                tasklist.encode());
    }
    //TakeoffQueue:0
    @Test(expected = MalformedSaveException.class)
    public void readQueueTest1() throws IOException, MalformedSaveException {
        //throw exception if the reader is empty
        String fileContent = "";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,takeOffQueue);
    }
    @Test(expected = MalformedSaveException.class)
    public void readQueueTest2() throws IOException, MalformedSaveException {
        //throw exception if the number of ":" is more than 1
        String fileContent = "TakeoffQueue:::0::";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,takeOffQueue);
    }
    @Test(expected = MalformedSaveException.class)
    public void readQueueTest3() throws IOException, MalformedSaveException {
        //throw exception if the type of queue read does not equal the type
        // of the queue in the parameter
        String fileContent = "LandingQueue:0";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,takeOffQueue);
    }
    @Test(expected = MalformedSaveException.class)
    public void readQueueTest4() throws IOException, MalformedSaveException {
        //Throw exception if the number of aircraft number in landingqueue does
        // not equal to the number of aircraft in the queue
        String fileContent = "TakeoffQueue:1\nABC123,CNM123";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,takeOffQueue);
    }
    @Test(expected = MalformedSaveException.class)
    public void readQueueTest5() throws IOException, MalformedSaveException {
        //Throw exception if the aircraft read from the queue does not exist,
        // CBB123 does not exist
        String fileContent = "TakeoffQueue:2\nABC123,CBB123";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,takeOffQueue);
    }
    @Test
    public void readQueueTest6() throws IOException, MalformedSaveException {
        //Check if the aircraft is read and added to the queue
        String fileContent = "TakeoffQueue:2\nABC123,CSB123";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,takeOffQueue);
        assertEquals("the info read from the queue is not correct.",
                fileContent,
                takeOffQueue.encode());
    }
    @Test
    public void readQueueTest7() throws IOException, MalformedSaveException {
        //Check if the aircraft is read and added to the queue
        String fileContent = "LandingQueue:2\nCSB123,ABC123";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,landingQueue);
        assertEquals("the info read from the queue is not correct.",
                fileContent,
                landingQueue.encode());
    }
    @Test
    public void readQueueTest8() throws IOException, MalformedSaveException {
        String fileContent = "LandingQueue:0";
        ControlTowerInitialiser.readQueue(new BufferedReader(new StringReader(fileContent)),aircrafts,landingQueue);
        assertEquals("the info read from the queue is not correct.",
                fileContent,
                landingQueue.encode());
    }
    @Test(expected = MalformedSaveException.class)
    public void readLoadingAircraftTest1()
            throws IOException, MalformedSaveException {
        //check if the first line is null then throw exception
        String fileContent = "";
        BufferedReader br = new BufferedReader(new StringReader(fileContent));
        ControlTowerInitialiser.readLoadingAircraft(br,aircrafts,loadingAircraft);
    }
    @Test(expected = MalformedSaveException.class)
    public void readLoadingAircraftTest2()
            throws IOException, MalformedSaveException {
        //check if the first line has more than one ":"
        String fileContent = "LoadingAircraft::0:";
        BufferedReader br = new BufferedReader(new StringReader(fileContent));
        ControlTowerInitialiser.readLoadingAircraft(br,aircrafts,loadingAircraft);
    }
    @Test(expected = MalformedSaveException.class)
    public void readLoadingAircraftTest3()
            throws IOException, MalformedSaveException {
        //check if the number of aircraft is > 0, but second line is null,
        // then throw exception
        String fileContent = "LoadingAircraft:1";
        BufferedReader br = new BufferedReader(new StringReader(fileContent));
        ControlTowerInitialiser.readLoadingAircraft(br,aircrafts,loadingAircraft);
    }
    @Test(expected = MalformedSaveException.class)
    public void readLoadingAircraftTest4()
            throws IOException, MalformedSaveException {
        //check if the number of aircraft is not equal to the number of air
        String fileContent = "LoadingAircraft:1\nABC123:1,CNM123:2";
        BufferedReader br = new BufferedReader(new StringReader(fileContent));
        ControlTowerInitialiser.readLoadingAircraft(br,aircrafts,loadingAircraft);
    }
    @Test(expected = MalformedSaveException.class)
    public void readLoadingAircraftTest5()
            throws IOException, MalformedSaveException {
        //check if the encoded loading aircraft is in the list of aircraft,
        // if not throw exception
        String fileContent = "LoadingAircraft:2\nABC123:1,CMM123:2";
        BufferedReader br = new BufferedReader(new StringReader(fileContent));
        ControlTowerInitialiser.readLoadingAircraft(br,aircrafts,loadingAircraft);
    }
    @Test
    public void readLoadingAircraftTest6()
            throws IOException, MalformedSaveException {
        //check if the encoded loading aircrafts are added to the map
        String fileContent = "LoadingAircraft:2\nABC123:1,CNM123:2";
        BufferedReader br = new BufferedReader(new StringReader(fileContent));
        ControlTowerInitialiser.readLoadingAircraft(br,aircrafts,loadingAircraft);
        assertEquals("The loading aircraft loaded to the map is not correct",
                true, loadingAircraft.containsKey(freightAircraft1));
        assertEquals("The loading aircraft loaded to the map is not correct",
                true, loadingAircraft.containsKey(passengerAircraft2));
    }
    @Test
    public void loadQueueTest1() throws IOException, MalformedSaveException {
        String takeOffQueueContent = "TakeoffQueue:0\n";
        String landingQueueContent = "LandingQueue:1\nCSB123\n";
        String loadingContent = "LoadingAircraft:2\nABC123:1,CNM123:2";
        StringReader reader =
                new StringReader(takeOffQueueContent+landingQueueContent+loadingContent);
        ControlTowerInitialiser.loadQueues(reader,aircrafts,takeOffQueue,
                landingQueue,loadingAircraft);
        assertEquals("The take off queue read is not correct", "TakeoffQueue"
                + ":0", takeOffQueue.encode());
        assertEquals("The landing queue read is not correct", "LandingQueue:1"
                        + "\nCSB123"
                , landingQueue.encode());
        assertEquals("The loading aircraft loaded to the map is not correct",
                true, loadingAircraft.containsKey(freightAircraft1));
        assertEquals("The loading aircraft loaded to the map is not correct",
                true, loadingAircraft.containsKey(passengerAircraft2));
    }
    @Test
    public void loadQueueTest2() throws IOException, MalformedSaveException {
        String takeOffQueueContent = "TakeoffQueue:0\n";
        String landingQueueContent = "LandingQueue:0\n";
        String loadingContent = "LoadingAircraft:0";
        StringReader reader =
                new StringReader(takeOffQueueContent+landingQueueContent+loadingContent);
        ControlTowerInitialiser.loadQueues(reader,aircrafts,takeOffQueue,
                landingQueue,loadingAircraft);
        assertEquals("The take off queue read is not correct", "TakeoffQueue"
                + ":0", takeOffQueue.encode());
        assertEquals("The landing queue read is not correct", "LandingQueue:0"
                , landingQueue.encode());
        assertEquals("The loading aircraft loaded to the map is not correct", 0
                , loadingAircraft.size());
    }
    @Test
    public void createControlTowerTest1()
            throws IOException, MalformedSaveException {
        String tickContent = "50";
        StringReader tickReader = new StringReader(tickContent);

        String aircraftContent =
                "2\n" + freightAircraft1.encode() + "\n" + passengerAircraft1.encode();
        StringReader aircraftReader = new StringReader(aircraftContent);

        String takeOffQueueContent = "TakeoffQueue:0\n";
        String landingQueueContent = "LandingQueue:1\nCSB123\n";
        String loadingContent = "LoadingAircraft:2\nABC123:1,CSB123:2";
        StringReader queueReader =
                new StringReader(takeOffQueueContent+landingQueueContent+loadingContent);

        String terminalContent = "1\n" + terminal.encode();
        StringReader terminalReader =
                new StringReader(terminalContent);
        ControlTower controlTower =
                ControlTowerInitialiser.createControlTower(tickReader,aircraftReader,
                queueReader,terminalReader);

        assertEquals("The control tower made contain incorrect information",
                "ControlTower: 1 terminals, 2 total aircraft (1 LAND, 0 "
                        + "TAKEOFF, 2 LOAD)", controlTower.toString());
        assertEquals("The control tower tick is not correct", 50,
                controlTower.getTicksElapsed());
        assertEquals("The terminal in the control tower is not correct",
                terminal.encode(), controlTower.getTerminals().get(0).encode());
        assertEquals("The aircraft in the control tower is not correct",
                freightAircraft1.encode(),
                controlTower.getAircraft().get(0).encode());
        assertEquals("The aircraft in the control tower is not correct",
                passengerAircraft1.encode(),
                controlTower.getAircraft().get(1).encode());
        assertEquals("The take off queue is not correct","TakeoffQueue:0",
                controlTower.getTakeoffQueue().encode());
        assertEquals("The landing queue is not correct","LandingQueue:1"
                        + "\nCSB123", controlTower.getLandingQueue().encode());
        assertEquals("The loading aircraft map is not correct",
                true, controlTower.getLoadingAircraft().containsKey(freightAircraft1));
        assertEquals("The loading aircraft map is not correct",
                true,
                controlTower.getLoadingAircraft().containsKey(passengerAircraft1));
    }


















}
