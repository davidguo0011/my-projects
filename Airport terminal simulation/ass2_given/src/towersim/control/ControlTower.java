package towersim.control;

import towersim.aircraft.*;
import towersim.ground.AirplaneTerminal;
import towersim.ground.Gate;
import towersim.ground.HelicopterTerminal;
import towersim.ground.Terminal;
import towersim.tasks.TaskType;
import towersim.util.NoSpaceException;
import towersim.util.NoSuitableGateException;
import towersim.util.Tickable;

import java.util.*;

/**
 * Represents a the control tower of an airport.
 * <p>
 * The control tower is responsible for managing the operations of the airport, including arrivals
 * and departures in/out of the airport, as well as aircraft that need to be loaded with cargo
 * at gates in terminals.
 *
 * @ass1
 */
public class ControlTower implements Tickable {
    /**
     * List of all aircraft managed by the control tower.
     */
    private final List<Aircraft> aircraft;

    /**
     * List of all terminals in the airport.
     */
    private final List<Terminal> terminals;

    /**
     * number of ticks that have elapsed since the tower was first created
     */
    private long ticksElapsed;
    /**
     * queue of aircraft waiting to land
     */
    private LandingQueue landingQueue;
    /**
     * queue of aircraft waiting to take off
     */
    private TakeoffQueue takeoffQueue;
    /**
     * mapping of aircraft that are loading cargo to the number of ticks remaining for loading
     */
    private Map<Aircraft, Integer> loadingAircraft;
    /**
     * count the number of tick method called since the tower is created,
     * on every second tick, attempt to land or takeoff an aircraft
     */
    private int tickCount = 0;

    /**
     * Creates a new ControlTower.
     * The number of ticks elapsed, list of aircraft, landing queue, takeoff queue
     * and map of loading aircraft to loading times should all be set to the
     * values passed as parameters.
     *
     * The list of terminals should be initialised as an empty list.
     * @param ticksElapsed number of ticks that have elapsed since the tower was first created
     * @param aircraft list of aircraft managed by the control tower
     * @param landingQueue queue of aircraft waiting to land
     * @param takeoffQueue queue of aircraft waiting to take off
     * @param loadingAircraft mapping of aircraft that are loading cargo to the
     *                        number of ticks remaining for loading
     */
    public ControlTower(long ticksElapsed,
                        List<Aircraft> aircraft,
                        LandingQueue landingQueue,
                        TakeoffQueue takeoffQueue,
                        Map<Aircraft, Integer> loadingAircraft) {
        this.ticksElapsed = ticksElapsed;
        this.aircraft = aircraft;
        this.terminals = new ArrayList<>();
        this.landingQueue = landingQueue;
        this.takeoffQueue = takeoffQueue;
        this.loadingAircraft = loadingAircraft;
    }

    /**
     * Adds the given terminal to the jurisdiction of this control tower.
     *
     * @param terminal terminal to add
     * @ass1
     */
    public void addTerminal(Terminal terminal) {
        this.terminals.add(terminal);
    }

    /**
     * Returns a list of all terminals currently managed by this control tower.
     * <p>
     * The order in which terminals appear in this list should be the same as the order in which
     * they were added by calling {@link #addTerminal(Terminal)}.
     * <p>
     * Adding or removing elements from the returned list should not affect the original list.
     *
     * @return all terminals
     * @ass1
     */
    public List<Terminal> getTerminals() {
        return new ArrayList<>(this.terminals);
    }

    /**
     * Adds the given aircraft to the jurisdiction of this control tower.
     * <p>
     * If the aircraft's current task type is {@code WAIT} or {@code LOAD}, it should be parked at a
     * suitable gate as found by the {@link #findUnoccupiedGate(Aircraft)} method.
     * If there is no suitable gate for the aircraft, the {@code NoSuitableGateException} thrown by
     * {@code findUnoccupiedGate()} should be propagated out of this method.
     *
     * After the aircraft has been added, it should be placed in the
     * appropriate queues by calling placeAircraftInQueues(Aircraft).
     * @param aircraft aircraft to add
     * @throws NoSuitableGateException if there is no suitable gate for an aircraft with a current
     *                                 task type of {@code WAIT} or {@code LOAD}
     * @ass1
     */
    public void addAircraft(Aircraft aircraft) throws NoSuitableGateException {
        TaskType currentTaskType =
                aircraft.getTaskList().getCurrentTask().getType();
        if (currentTaskType == TaskType.WAIT
                || currentTaskType == TaskType.LOAD) {
            Gate gate = findUnoccupiedGate(aircraft);
            try {
                gate.parkAircraft(aircraft);
            } catch (NoSpaceException ignored) {
                // not possible, gate unoccupied
            }
        }
        this.aircraft.add(aircraft);
        placeAircraftInQueues(aircraft);
    }

    /**
     * Returns a list of all aircraft currently managed by this control tower.
     * <p>
     * The order in which aircraft appear in this list should be the same as the order in which
     * they were added by calling {@link #addAircraft(Aircraft)}.
     * <p>
     * Adding or removing elements from the returned list should not affect the original list.
     *
     * @return all aircraft
     * @ass1
     */
    public List<Aircraft> getAircraft() {
        return new ArrayList<>(this.aircraft);
    }

    /**
     * Attempts to find an unoccupied gate in a compatible terminal for the given aircraft.
     * <p>
     * Only terminals of the same type as the aircraft's AircraftType (see
     * {@link towersim.aircraft.AircraftCharacteristics#type}) should be considered. For example,
     * for an aircraft with an AircraftType of {@code AIRPLANE}, only AirplaneTerminals may be
     * considered.
     * <p>
     * For each compatible terminal, the {@link Terminal#findUnoccupiedGate()} method should be
     * called to attempt to find an unoccupied gate in that terminal. If
     * {@code findUnoccupiedGate()} does not find a suitable gate, the next compatible terminal
     * in the order they were added should be checked instead, and so on.
     * <p>
     * If no unoccupied gates could be found across all compatible terminals, a
     * {@code NoSuitableGateException} should be thrown.
     *
     * @param aircraft aircraft for which to find gate
     * @return gate for given aircraft if one exists
     * @throws NoSuitableGateException if no suitable gate could be found
     * @ass1
     */
    public Gate findUnoccupiedGate(Aircraft aircraft)
            throws NoSuitableGateException {
        AircraftType aircraftType = aircraft.getCharacteristics().type;
        for (Terminal terminal : terminals) {
            /*
             * Only check for available gates at terminals that are of the same aircraft type as
             * the aircraft
             */
            if (!terminal.hasEmergency()) {
                if ((terminal instanceof AirplaneTerminal
                        && aircraftType == AircraftType.AIRPLANE)
                        || (terminal instanceof HelicopterTerminal
                        && aircraftType == AircraftType.HELICOPTER)) {
                    try {
                        // This terminal found a gate, return it
                        return terminal.findUnoccupiedGate();
                    } catch (NoSuitableGateException e) {
                        // If this terminal has no unoccupied gates, try the next one
                    }
                }
            }
        }
        throw new NoSuitableGateException("No gate available for aircraft");
    }

    /**
     * Finds the gate where the given aircraft is parked, and returns null if the aircraft is
     * not parked at any gate in any terminal.
     *
     * @param aircraft aircraft whose gate to find
     * @return gate occupied by the given aircraft; or null if none exists
     * @ass1
     */
    public Gate findGateOfAircraft(Aircraft aircraft) {
        for (Terminal terminal : this.terminals) {
            for (Gate gate : terminal.getGates()) {
                if (Objects.equals(gate.getAircraftAtGate(), aircraft)) {
                    return gate;
                }
            }
        }
        return null;
    }

    /**
     * Advances the simulation by one tick.
     * On each tick, the control tower should perform the following actions in this order:
     * Call Aircraft.tick() on all aircraft.
     *
     * Move all aircraft with a current task type of AWAY or WAIT to their next task.
     *
     * Process loading aircraft by calling loadAircraft().
     *
     * On every second tick, attempt to land an aircraft by calling tryLandAircraft().
     * If an aircraft cannot be landed, attempt to allow an aircraft to take off instead
     * by calling tryTakeOffAircraft(). Note that this begins from the second time tick()
     * is called and every second tick thereafter.
     *
     * If this is not a tick where the control tower is attempting to land an aircraft,
     * an aircraft should be allowed to take off instead. This ensures that aircraft
     * wishing to take off and land are given an equal share of the runway.
     *
     * Place all aircraft in their appropriate queues by calling placeAllAircraftInQueues().
     */
    @Override
    public void tick() {
        this.tickCount += 1;
        this.ticksElapsed += 1;
        // Call tick() on all other sub-entities
        for (Aircraft aircraft : this.aircraft) {
            aircraft.tick();
            if (aircraft.getTaskList().getCurrentTask().getType()
                    .equals(TaskType.AWAY) || aircraft.getTaskList()
                    .getCurrentTask().getType().equals(TaskType.WAIT)) {
                aircraft.getTaskList().moveToNextTask();
            }
        }
        loadAircraft();
        //modulo to determine whether the current tick is the second tick
        if (this.tickCount % 2 == 0) {
            if (!this.tryLandAircraft()) {
                this.tryTakeOffAircraft();
            }
        } else {
            this.tryTakeOffAircraft();
        }
        this.placeAllAircraftInQueues();
    }

    /**
     * Returns the number of ticks that have elapsed for this control tower.
     * If the control tower was created with a non-zero number of elapsed ticks,
     * this number should be taken into account in the return value of this method.
     *
     * @return number of ticks elapsed
     */
    public long getTicksElapsed() {
        return this.ticksElapsed;
    }

    /**
     * Returns the queue of aircraft waiting to land.
     * @return landing queue
     */
    public AircraftQueue getLandingQueue() {
        return this.landingQueue;
    }

    /**
     * Returns the queue of aircraft waiting to take off.
     * @return takeoff queue
     */
    public AircraftQueue getTakeoffQueue() {
        return this.takeoffQueue;
    }

    /**
     * Returns the mapping of loading aircraft to their remaining load times.
     * @return loading aircraft map
     */
    public Map<Aircraft, Integer> getLoadingAircraft() {
        return this.loadingAircraft;
    }

    /**
     * Attempts to land one aircraft waiting in the landing queue and park it at a suitable gate.
     * If there are no aircraft in the landing queue waiting to land, then the
     * method should return false and no further action should be taken.
     *
     * If there is at least one aircraft in the landing queue, then a suitable gate
     * should be found for the aircraft at the front of the queue (findUnoccupiedGate(Aircraft)).
     * If there is no suitable gate, the aircraft should not be landed and should
     * remain in the queue, and the method should return false and no
     * further action should be taken.
     *
     * If there is a suitable gate, the aircraft should be removed from the queue
     * and it should be parked at that gate. The aircraft's passengers or freight
     * should be unloaded immediately, by calling Aircraft.unload().
     *
     * Finally, the landed aircraft should move on to the next task in its task
     * list and the method should return true.
     * @return true if an aircraft was successfully landed and parked; false otherwise
     */
    public boolean tryLandAircraft() {
        if (this.getLandingQueue().getAircraftInOrder().isEmpty()) {
            return false;
        } else {
            try {
                Aircraft aircraft = this.getLandingQueue().peekAircraft();
                this.findUnoccupiedGate(aircraft).parkAircraft(aircraft);
                this.getLandingQueue().removeAircraft();
                aircraft.unload();
                aircraft.getTaskList().moveToNextTask();
                return true;
            } catch (NoSuitableGateException | NoSpaceException e) {
                return false;
            }
        }

    }

    /**
     * Attempts to allow one aircraft waiting in the takeoff queue to take off.
     * If there are no aircraft waiting in the takeoff queue, then the method should return.
     * Otherwise, the aircraft at the front of the takeoff queue should be removed
     * from the queue and it should move to the next task in its task list.
     */
    public void tryTakeOffAircraft() {
        if (!this.getTakeoffQueue().getAircraftInOrder().isEmpty()) {
            this.getTakeoffQueue().removeAircraft().getTaskList()
                    .moveToNextTask();
        }
    }

    /**
     * Updates the time remaining to load on all currently loading aircraft and
     * removes aircraft from their gate once finished loading.
     *
     * Any aircraft in the loading map should have their time remaining decremented
     * by one tick. If any aircraft's time remaining is now zero, it has finished
     * loading and should be removed from the loading map. Additionally, it should
     * leave the gate it is parked at and should move on to its next task.
     */
    public void loadAircraft() {
        List<Aircraft> aircraftsToBeRemoved = new ArrayList<>();
        if (!this.loadingAircraft.isEmpty()) {
            //for every key and value, replace the value decremented by 1,
            // if any pair has the value less than 0, add the aircraft to a
            // list, then loop over the list and remove each from the map
            for (Map.Entry<Aircraft, Integer> loadingAircrafts : this.loadingAircraft
                    .entrySet()) {
                this.loadingAircraft.replace(loadingAircrafts.getKey(),
                        loadingAircrafts.getValue() - 1);
                if (loadingAircrafts.getValue() <= 0) {
                    this.findGateOfAircraft(loadingAircrafts.getKey())
                            .aircraftLeaves();
                    loadingAircrafts.getKey().getTaskList().moveToNextTask();
                    aircraftsToBeRemoved.add(loadingAircrafts.getKey());
                }
            }
            for (int i = 0; i < aircraftsToBeRemoved.size(); i++) {
                this.loadingAircraft.remove(aircraftsToBeRemoved.get(i));
            }
        }
    }

    /**
     * Calls placeAircraftInQueues(Aircraft) on all aircraft managed by the control tower.
     */
    public void placeAllAircraftInQueues() {
        for (int i = 0; i < this.getAircraft().size(); i++) {
            this.placeAircraftInQueues(this.getAircraft().get(i));
        }
    }

    /**
     * Moves the given aircraft to the appropriate queue based on its current task.
     * If the aircraft's current task type is LAND and the landing queue does not
     * already contain the aircraft, it should be added to the landing queue.
     * If the aircraft's current task type is TAKEOFF and the takeoff queue does
     * not already contain the aircraft, it should be added to the takeoff queue.
     * If the aircraft's current task type is LOAD and the loading map does not
     * already contain the aircraft, it should be added to the loading map with
     * an associated value of Aircraft.getLoadingTime() (this is the number of
     * ticks it will remain in the loading phase).
     * @param aircraft aircraft to move to appropriate queue
     */
    public void placeAircraftInQueues(Aircraft aircraft) {
        if (aircraft.getTaskList().getCurrentTask().getType()
                .equals(TaskType.LAND) && !this.getLandingQueue()
                .containsAircraft(aircraft)) {
            this.getLandingQueue().addAircraft(aircraft);
        } else if (aircraft.getTaskList().getCurrentTask().getType()
                .equals(TaskType.TAKEOFF) && !this.getTakeoffQueue()
                .containsAircraft(aircraft)) {
            this.getTakeoffQueue().addAircraft(aircraft);
        } else if (aircraft.getTaskList().getCurrentTask().getType()
                .equals(TaskType.LOAD)
                && this.loadingAircraft.get(aircraft) == null) {
            this.loadingAircraft.put(aircraft, aircraft.getLoadingTime());
        }
    }

    /**
     * Returns the human-readable string representation of this control tower.
     * @return string representation of this control tower
     */
    public String toString() {
        String message = "ControlTower: ";
        message += this.getTerminals().size() + " terminals, ";
        message += this.getAircraft().size();
        message += " total aircraft (";
        message +=
                this.getLandingQueue().getAircraftInOrder().size() + " LAND, ";
        message += this.getTakeoffQueue().getAircraftInOrder().size()
                + " TAKEOFF, ";
        message += this.getLoadingAircraft().size() + " LOAD)";
        return message;
    }
}

