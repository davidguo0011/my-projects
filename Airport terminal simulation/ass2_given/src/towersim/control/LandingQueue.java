package towersim.control;

import towersim.aircraft.Aircraft;
import towersim.aircraft.PassengerAircraft;

import java.util.ArrayList;
import java.util.List;

/**
 * Represents a rule-based queue of aircraft waiting in the air to land.
 * The rules in the landing queue are designed to ensure that aircraft are
 * prioritised for landing based on "urgency" factors such as remaining fuel
 * onboard, emergency status and cargo type.
 */
public class LandingQueue extends AircraftQueue {
    /**
     * the list of aircraft in the landing queue
     */
    private List<Aircraft> aircrafts;

    /**
     * Constructs a new LandingQueue with an initially empty queue of aircraft.
     */
    public LandingQueue() {
        this.aircrafts = new ArrayList<Aircraft>();
    }

    /**
     * Adds the given aircraft to the queue.
     * @param aircraft aircraft to add to queue
     */
    public void addAircraft(Aircraft aircraft) {
        this.aircrafts.add(aircraft);
    }

    /**
     * Returns the aircraft at the front of the queue without removing it from
     * the queue, or null if the queue is empty.
     * If an aircraft is currently in a state of emergency, it should be returned.
     * If more than one aircraft are in an emergency, return the one added to the queue first.
     * If an aircraft has less than or equal to 20 percent fuel remaining,
     * a critical level, it should be returned (see Aircraft.getFuelPercentRemaining()).
     * If more than one aircraft have a critical level of fuel onboard,
     * return the one added to the queue first.
     * If there are any passenger aircraft in the queue, return the passenger
     * aircraft that was added to the queue first.
     * If this point is reached and no aircraft has been returned, return the
     * aircraft that was added to the queue first.
     * @return aircraft at front of queue
     */
    public Aircraft peekAircraft() {
        if (this.aircrafts.isEmpty()) {
            return null;
        } else {
            for (Aircraft eachAircraft : this.aircrafts) {
                if (eachAircraft.hasEmergency()) {
                    return eachAircraft;
                }
            }
            for (Aircraft eachAircraft : this.aircrafts) {
                if (eachAircraft.getFuelPercentRemaining() <= 20) {
                    return eachAircraft;
                }

            }
            for (Aircraft eachAircraft : this.aircrafts) {
                if (eachAircraft instanceof PassengerAircraft) {
                    return eachAircraft;
                }
            }
            return this.aircrafts.get(0);
        }
    }

    /**
     * Removes and returns the aircraft at the front of the queue.
     * Returns null if the queue is empty.
     * The same rules as described in peekAircraft() should be used for determining
     * which aircraft to remove and return.
     * @return aircraft at front of queue
     */
    public Aircraft removeAircraft() {
        if (this.aircrafts.isEmpty()) {
            return null;
        } else {
            Aircraft aircraft = this.peekAircraft();
            this.aircrafts.remove(aircraft);
            return aircraft;
        }
    }

    /**
     * Returns a list containing all aircraft in the queue, in order.
     * That is, the first element of the returned list should be the first
     * aircraft that would be returned by calling removeAircraft(), and so on.
     *
     * Adding or removing elements from the returned list should not affect the original queue.
     * @return list of all aircraft in queue, in queue order
     */
    public List<Aircraft> getAircraftInOrder() {
        List<Aircraft> originalAircrafts =
                new ArrayList<Aircraft>(this.aircrafts);
        List<Aircraft> aircraftsInOrder = new ArrayList<>();
        for (int i = 0; i < originalAircrafts.size(); i++) {
            aircraftsInOrder.add(this.removeAircraft());
        }
        this.aircrafts = originalAircrafts;
        return aircraftsInOrder;
    }

    /**
     * Returns true if the given aircraft is in the queue.
     * @param aircraft aircraft to find in queue
     * @return true if aircraft is in queue; false otherwise
     */
    public boolean containsAircraft(Aircraft aircraft) {
        if (this.aircrafts.size() != 0) {
            for (Aircraft eachAircraft : this.aircrafts) {
                if (eachAircraft.equals(aircraft)) {
                    return true;
                }
                ;
            }
        }
        return false;
    }


}
