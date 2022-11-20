package towersim.control;

import towersim.aircraft.Aircraft;
import towersim.aircraft.AircraftCharacteristics;
import towersim.aircraft.FreightAircraft;
import towersim.aircraft.PassengerAircraft;
import towersim.ground.AirplaneTerminal;
import towersim.ground.Gate;
import towersim.ground.HelicopterTerminal;
import towersim.ground.Terminal;
import towersim.tasks.Task;
import towersim.tasks.TaskList;
import towersim.tasks.TaskType;
import towersim.util.MalformedSaveException;
import towersim.util.NoSpaceException;
import java.io.*;
import java.util.*;

/**
 * Utility class that contains static methods for loading a control tower and
 * associated entities from files.
 */
public class ControlTowerInitialiser {
    /**
     * Loads the number of ticks elapsed from the given reader instance.
     * @param reader reader from which to load the number of ticks elapsed
     * @return number of ticks elapsed
     * @throws MalformedSaveException if the format of the text read from the
     * reader is invalid according to the rules
     * @throws IOException if an IOException is encountered when reading from the reader
     */
    public static long loadTick(Reader reader)
            throws MalformedSaveException, IOException {
        long tick;
        try (BufferedReader br = new BufferedReader(reader)) {
            tick = Long.parseLong(br.readLine());
            if (tick < 0) {
                throw new MalformedSaveException();
            }
        } catch (NumberFormatException nfe) {
            throw new MalformedSaveException();
        }
        return tick;
    }

    /**
     * Loads the list of all aircraft managed by the control tower from the given reader instance.
     * @param reader reader from which to load the list of aircraft
     * @return list of aircraft read from the reader
     * @throws IOException if an IOException is encountered when reading from the reader
     * @throws MalformedSaveException if the format of the text read from the
     * reader is invalid according to the rules
     */
    public static List<Aircraft> loadAircraft(Reader reader)
            throws IOException, MalformedSaveException {
        List<Aircraft> aircrafts = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(reader)) {
            int counter = 0;
            String firstLine = br.readLine();
            String line;
            try {
                Integer.parseInt(firstLine);
            } catch (NumberFormatException nfe) {
                throw new MalformedSaveException();
            }
            while ((line = br.readLine()) != null) {
                Aircraft aircraft = readAircraft(line);
                aircrafts.add(aircraft);
                counter += 1;
            }
            if (counter != Integer.parseInt(firstLine)) {
                throw new MalformedSaveException();
            }
        }
        return aircrafts;
    }

    /**
     * Loads the takeoff queue, landing queue and map of loading aircraft from
     * the given reader instance.
     * Rather than returning a list of queues, this method does not return anything.
     * Instead, it should modify the given takeoff queue, landing queue and loading map
     * by adding aircraft, etc.
     * @param reader reader from which to load the queues and loading map
     * @param aircraft list of all aircraft, used when validating that callsigns exist
     * @param takeoffQueue empty takeoff queue that aircraft will be added to
     * @param landingQueue empty landing queue that aircraft will be added to
     * @param loadingAircraft empty map that aircraft and loading times will be added to
     * @throws MalformedSaveException if the format of the text read from the reader
     * is invalid according to the rules
     * @throws IOException if an IOException is encountered when reading from the reader
     */
    public static void loadQueues(Reader reader, List<Aircraft> aircraft,
                                  TakeoffQueue takeoffQueue,
                                  LandingQueue landingQueue,
                                  Map<Aircraft, Integer> loadingAircraft)
            throws MalformedSaveException, IOException {
        try (BufferedReader br = new BufferedReader(reader)) {
            readQueue(br, aircraft, takeoffQueue);
            readQueue(br, aircraft, landingQueue);
            readLoadingAircraft(br, aircraft, loadingAircraft);
        }
    }

    /**
     * Loads the list of terminals and their gates from the given reader instance.
     * @param reader reader from which to load the list of terminals and their gates
     * @param aircraft list of all aircraft, used when validating that callsigns exist
     * @return list of terminals (with their gates) read from the reader
     * @throws MalformedSaveException if the format of the text read from the
     * reader is invalid according to the rules
     * @throws IOException if an IOException is encountered when reading from the reader
     */
    public static List<Terminal> loadTerminalsWithGates(Reader reader,
                                                        List<Aircraft> aircraft)
            throws MalformedSaveException, IOException {
        List<Terminal> terminalList = new ArrayList<>();
        String firstLine;
        String line;
        int counter = 0;
        try (BufferedReader br = new BufferedReader(reader)) {
            firstLine = br.readLine();
            try {
                Integer.parseInt(firstLine);
            } catch (NumberFormatException nfe) {
                throw new MalformedSaveException();
            }
            while ((line = br.readLine()) != null) {
                terminalList.add(readTerminal(line, br, aircraft));
                counter += 1;
            }
            if (counter != Integer.parseInt(firstLine)) {
                throw new MalformedSaveException();
            }
        }
        return terminalList;
    }

    /**
     * Creates a control tower instance by reading various airport entities from the given readers.
     * @param tick reader from which to load the number of ticks elapsed
     * @param aircraft reader from which to load the list of aircraft
     * @param queues reader from which to load the aircraft queues and map of loading aircraft
     * @param terminalsWithGates reader from which to load the terminals and their gates
     * @return control tower created by reading from the given readers
     * @throws MalformedSaveException if reading from any of the given readers results in a
     * MalformedSaveException, indicating the contents of that reader are invalid
     * @throws IOException if an IOException is encountered when reading from any of the readers
     */
    public static ControlTower createControlTower(Reader tick, Reader aircraft,
                                                  Reader queues,
                                                  Reader terminalsWithGates)
            throws MalformedSaveException, IOException {
        long loadedTick = loadTick(tick);
        List<Aircraft> loadedAircraft = loadAircraft(aircraft);
        List<Terminal> loadedTerminal =
                loadTerminalsWithGates(terminalsWithGates, loadedAircraft);
        Map map = new TreeMap<>(Comparator.comparing(Aircraft::getCallsign));
        TakeoffQueue takeoffQueue = new TakeoffQueue();
        LandingQueue landingQueue = new LandingQueue();
        loadQueues(queues, loadedAircraft, takeoffQueue, landingQueue, map);
        //ControlTower(long, List, LandingQueue, TakeoffQueue, Map)
        ControlTower controlTower =
                new ControlTower(loadedTick, loadedAircraft, landingQueue,
                        takeoffQueue, map);
        for (int i = 0; i < loadedTerminal.size(); i++) {
            controlTower.addTerminal(loadedTerminal.get(i));
        }
        return controlTower;
    }

    /**
     * Reads an aircraft from its encoded representation in the given string.
     * If the AircraftCharacteristics.passengerCapacity of the encoded aircraft
     * is greater than zero, then a PassengerAircraft should be created and returned.
     * Otherwise, a FreightAircraft should be created and returned.
     * @param line line of text containing the encoded aircraft
     * @return decoded aircraft instance
     * @throws MalformedSaveException if the format of the given string is invalid
     * according to the rules
     */
    public static Aircraft readAircraft(String line)
            throws MalformedSaveException {
        if (line.length() - line.replace(":", "").length() != 5) {
            throw new MalformedSaveException();
        }
        Aircraft createdAircraft;
        String[] aircraft = line.split(":");
        String callsign = aircraft[0];
        String aircraftType = aircraft[1];
        String taskList = aircraft[2];
        String fuelAmount = aircraft[3];
        String emergencyState = aircraft[4];
        String passengerOrFreightOnBoard = aircraft[5];
        try {
            AircraftCharacteristics.valueOf(aircraftType);
        } catch (IllegalArgumentException iae) {
            throw new MalformedSaveException();
        }
        try {
            if (!fuelAmount.contains(".")) {
                throw new MalformedSaveException();
            }
            Double.parseDouble(fuelAmount);
            Integer.parseInt(passengerOrFreightOnBoard);
        } catch (NumberFormatException nfe) {
            throw new MalformedSaveException();
        }
        try {
            if (AircraftCharacteristics.valueOf(aircraftType).passengerCapacity
                    != 0) {
                createdAircraft = new PassengerAircraft(callsign,
                        AircraftCharacteristics.valueOf(aircraftType),
                        readTaskList(taskList),
                        Double.parseDouble(fuelAmount),
                        Integer.parseInt(passengerOrFreightOnBoard));
            } else {
                createdAircraft = new FreightAircraft(callsign,
                        AircraftCharacteristics.valueOf(aircraftType),
                        readTaskList(taskList),
                        Double.parseDouble(fuelAmount),
                        Integer.parseInt(passengerOrFreightOnBoard));
            }
            if (emergencyState.equals("true")) {
                createdAircraft.declareEmergency();
            }
        } catch (IllegalArgumentException iae) {
            throw new MalformedSaveException();
        }
        return createdAircraft;
    }

    /**
     * Reads a task list from its encoded representation in the given string.
     * @param taskListPart string containing the encoded task list
     * @return decoded task list instance
     * @throws MalformedSaveException if the format of the given string is invalid
     * according to the rules
     */
    public static TaskList readTaskList(String taskListPart)
            throws MalformedSaveException {
        List<Task> taskList = new ArrayList<>();
        if (taskListPart.length() != 0) {
            String[] encodedTaskList = taskListPart.split(",");
            for (String eachTask : encodedTaskList) {
                if (eachTask.equals("WAIT") || eachTask.startsWith("LOAD@")
                        || eachTask.equals("TAKEOFF") || eachTask.equals("AWAY")
                        || eachTask.equals("LAND")) {
                    if (eachTask.startsWith("LOAD@")) {
                        //throw exception if the number of @ is not 1
                        if (eachTask.length() - eachTask.replace("@", "")
                                .length() != 1) {
                            throw new MalformedSaveException();
                        }
                        String[] load = eachTask.split("@");
                        String taskName = load[0];
                        String loadPercentage = load[1];
                        try {
                            if (Integer.parseInt(loadPercentage) < 0) {
                                throw new MalformedSaveException();
                            }
                        } catch (NumberFormatException nfe) {
                            throw new MalformedSaveException();
                        }
                        Task task = new Task(TaskType.valueOf(taskName),
                                Integer.parseInt(loadPercentage));
                        taskList.add(task);
                    } else {
                        try {
                            Task task = new Task(TaskType.valueOf(eachTask));
                            taskList.add(task);
                        } catch (IllegalArgumentException iae) {
                            throw new MalformedSaveException();
                        }
                    }
                } else {
                    throw new MalformedSaveException();
                }
            }
        }
        try {
            return new TaskList(taskList);
        } catch (IllegalArgumentException iae) {
            throw new MalformedSaveException();
        }
    }

    /**
     * Reads an aircraft queue from the given reader instance.
     * Rather than returning a queue, this method does not return anything.
     * Instead, it should modify the given aircraft queue by adding aircraft to it.
     * @param reader reader from which to load the aircraft queue
     * @param aircraft list of all aircraft, used when validating that callsigns exist
     * @param queue empty queue that aircraft will be added to
     * @throws IOException if an IOException is encountered when reading from the reader
     * @throws MalformedSaveException if the format of the text read from the reader
     * is invalid according to the rules
     */
    public static void readQueue(BufferedReader reader, List<Aircraft> aircraft,
                                 AircraftQueue queue)
            throws IOException, MalformedSaveException {
        String firstLine = reader.readLine();
        String secondLine;
        if (firstLine == null) {
            throw new MalformedSaveException();
        }
        if (firstLine.length() - firstLine.replace(":", "").length() != 1) {
            throw new MalformedSaveException();
        }
        String queueType = firstLine.split(":")[0];
        String numAircraft = firstLine.split(":")[1];
        if (!queueType.equals(queue.getClass().getSimpleName())) {
            throw new MalformedSaveException();
        }
        try {
            if (Integer.parseInt(numAircraft) > 0) {
                if ((secondLine = reader.readLine()) != null) {
                    String[] encodedAircraftCallsigns = secondLine.split(",");
                    if (Integer.parseInt(numAircraft)
                            != encodedAircraftCallsigns.length) {
                        throw new MalformedSaveException();
                    } else {
                        //for each encoded aircraft callsign, compare it with
                        // each existing aircraft's callsign to make sure the
                        // encoded aircraft do exist.
                        for (int i = 0; i < encodedAircraftCallsigns.length;
                             i++) {
                            boolean found = false;
                            for (int b = 0; b < aircraft.size(); b++) {
                                if (encodedAircraftCallsigns[i]
                                        .equals(aircraft.get(b)
                                                .getCallsign())) {
                                    queue.addAircraft(aircraft.get(b));
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                throw new MalformedSaveException();
                            }
                        }
                    }
                } else {
                    throw new MalformedSaveException();
                }
            }
        } catch (NumberFormatException nfe) {
            throw new MalformedSaveException();
        }
    }

    /**
     * Reads the map of currently loading aircraft from the given reader instance.
     * Rather than returning a map, this method does not return anything.
     * Instead, it should modify the given map by adding entries (aircraft/integer pairs) to it.
     * @param reader reader from which to load the map of loading aircraft
     * @param aircraft list of all aircraft, used when validating that callsigns exist
     * @param loadingAircraft empty map that aircraft and their loading times will be added to
     * @throws IOException if an IOException is encountered when reading from the reader
     * @throws MalformedSaveException if the format of the text read from the reader
     * is invalid according to the rules
     */
    public static void readLoadingAircraft(BufferedReader reader,
                                           List<Aircraft> aircraft,
                                           Map<Aircraft, Integer> loadingAircraft)
            throws IOException, MalformedSaveException {
        String firstLine = reader.readLine();
        String secondLine;
        if (firstLine == null) {
            throw new MalformedSaveException();
        }
        if (firstLine.length() - firstLine.replace(":", "").length() != 1) {
            throw new MalformedSaveException();
        }
        String numberOfAircraft = firstLine.split(":")[1];
        try {
            if (Integer.parseInt(numberOfAircraft) > 0) {
                if ((secondLine = reader.readLine()) == null) {
                    throw new MalformedSaveException();
                } else {
                    String[] callsignLoadingtimePair = secondLine.split(",");
                    if (Integer.parseInt(numberOfAircraft)
                            != callsignLoadingtimePair.length) {
                        throw new MalformedSaveException();
                    }
                    //for each loading aircraft pair, make sure it has
                    // exactly one ":", and compare it's callsign with each
                    // aircraft to validate the loading aircraft do exist. If
                    // exist then put the aircraft and loading time into the
                    // map.
                    for (String eachPair : callsignLoadingtimePair) {
                        if (eachPair.length() - eachPair.replace(":", "")
                                .length() != 1) {
                            throw new MalformedSaveException();
                        } else {
                            boolean found = false;
                            String callsign = eachPair.split(":")[0];
                            String loadingTime = eachPair.split(":")[1];
                            if (Integer.parseInt(loadingTime) < 1) {
                                throw new MalformedSaveException();
                            }
                            for (int i = 0; i < aircraft.size(); i++) {
                                if (callsign.equals(aircraft.get(i)
                                        .getCallsign())) {
                                    found = true;
                                    loadingAircraft.put(aircraft.get(i),
                                            Integer.parseInt(loadingTime));
                                    break;
                                }
                            }
                            if (!found) {
                                throw new MalformedSaveException();
                            }
                        }
                    }
                }
            }
        } catch (NumberFormatException nfe) {
            throw new MalformedSaveException();
        }
    }

    /**
     * Reads a terminal from the given string and reads its gates from the given reader instance.
     * @param line string containing the first line of the encoded terminal
     * @param reader reader from which to load the gates of the terminal (subsequent lines)
     * @param aircraft list of all aircraft, used when validating that callsigns exist
     * @return decoded terminal with its gates added
     * @throws IOException if an IOException is encountered when reading from the reader
     * @throws MalformedSaveException if the format of the given string or the text read
     * from the reader is invalid according to the rules
     */
    public static Terminal readTerminal(String line, BufferedReader reader,
                                        List<Aircraft> aircraft)
            throws IOException, MalformedSaveException {
        if (line.length() - line.replace(":", "").length() != 3) {
            throw new MalformedSaveException();
        }
        String[] terminalInfo = line.split(":");
        String terminalType = terminalInfo[0];
        String terminalNumber = terminalInfo[1];
        String emergencyState = terminalInfo[2];
        String numberOfGate = terminalInfo[3];
        if (!terminalType.equals("AirplaneTerminal") && !terminalType
                .equals("HelicopterTerminal")) {
            throw new MalformedSaveException();
        }
        try {
            if (Integer.parseInt(terminalNumber) < 1
                    || Integer.parseInt(numberOfGate) < 0
                    || Integer.parseInt(numberOfGate)
                    > Terminal.MAX_NUM_GATES) {
                throw new MalformedSaveException();
            }
        } catch (NumberFormatException nfe) {
            throw new MalformedSaveException();
        }
        String gateInfo;
        Terminal decodedTerminal = null;
        if (Integer.parseInt(numberOfGate) >= 0) {
            if (terminalType.equals("AirplaneTerminal")) {
                decodedTerminal =
                        new AirplaneTerminal(Integer.parseInt(terminalNumber));
            } else if (terminalType.equals("HelicopterTerminal")) {
                decodedTerminal = new HelicopterTerminal(
                        Integer.parseInt(terminalNumber));
            }
            if (emergencyState.equals("true")) {
                decodedTerminal.declareEmergency();
            }
            if (Integer.parseInt(numberOfGate) == 0) {
                return decodedTerminal;
            } else {
                //read gate if the number of gate is greater than 1 and add
                //gate to the terminal
                for (int i = 0; i < Integer.parseInt(numberOfGate); i++) {
                    gateInfo = reader.readLine();
                    if (gateInfo == null) {
                        throw new MalformedSaveException();
                    } else {
                        try {
                            decodedTerminal
                                    .addGate(readGate(gateInfo, aircraft));
                        } catch (NoSpaceException nse) {
                            //not possible, the number of gate read is <=
                            // maximum number of gate
                        }
                    }
                }

            }
        }
        return decodedTerminal;
    }

    /**
     * Reads a gate from its encoded representation in the given string.
     * @param line string containing the encoded gate
     * @param aircraft list of all aircraft, used when validating that callsigns exist
     * @return decoded gate instance
     * @throws MalformedSaveException if the format of the given string is invalid
     * according to the rules
     */
    public static Gate readGate(String line, List<Aircraft> aircraft)
            throws MalformedSaveException {
        Gate decodedGate = null;
        if (!line.isEmpty()) {
            if (line.length() - line.replace(":", "").length() != 1) {
                throw new MalformedSaveException();
            }
            String[] gate = line.split(":");
            String gateNumber = gate[0];
            String aircraftParked = gate[1];
            try {
                if (Integer.parseInt(gateNumber) < 1) {
                    throw new MalformedSaveException();
                }
            } catch (NumberFormatException nfe) {
                throw new MalformedSaveException();
            }
            //add each callsign of aircraft to the list, and use contains method
            //to check if the aircraft parked at gate is in one of them.
            List<String> callSigns = new ArrayList<>();
            for (Aircraft value : aircraft) {
                callSigns.add(value.getCallsign());
            }
            if (!callSigns.contains(aircraftParked) && !aircraftParked
                    .equals("empty")) {
                throw new MalformedSaveException();
            } else {
                //the callSigns and its corresponding aircraft are in the
                // same position in list, thus can use index to find the
                // aircraft and park it to the gate.
                decodedGate = new Gate(Integer.parseInt(gateNumber));
                if (callSigns.contains(aircraftParked)) {
                    try {
                        decodedGate.parkAircraft(aircraft.get(
                                callSigns.indexOf(aircraftParked)));
                    } catch (NoSpaceException nse) {
                        //not possible, because newly created gate is empty
                    }
                }
            }
        }
        return decodedGate;
    }
}
