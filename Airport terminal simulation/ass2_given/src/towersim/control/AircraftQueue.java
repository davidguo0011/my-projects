package towersim.control;

import towersim.aircraft.Aircraft;
import towersim.util.Encodable;

import java.util.List;

/**
 * Abstract representation of a queue containing aircraft.
 * Aircraft can be added to the queue, and aircraft at the front of the queue
 * can be queried or removed. A list of all aircraft contained in the queue (in queue order)
 * can be obtained. The queue can be checked for containing a specified aircraft.
 *
 * The order that aircraft are removed from the queue depends on the chosen concrete
 * implementation of the AircraftQueue.
 */
public abstract class AircraftQueue extends Object implements Encodable {
    /**
     * Adds the given aircraft to the queue.
     * @param aircraft aircraft to add to queue
     */
    public abstract void addAircraft(Aircraft aircraft);

    /**
     * Removes and returns the aircraft at the front of the queue. Returns null
     * if the queue is empty.
     * @return aircraft at front of queue
     */
    public abstract Aircraft removeAircraft();

    /**
     * Returns the aircraft at the front of the queue without removing it from
     * the queue, or null if the queue is empty.
     * @return aircraft at front of queue
     */
    public abstract Aircraft peekAircraft();

    /**
     * Returns a list containing all aircraft in the queue, in order.
     * That is, the first element of the returned list should be the first aircraft
     * that would be returned by calling removeAircraft(), and so on.
     *
     * Adding or removing elements from the returned list should not affect the original queue.
     * @return list of all aircraft in queue, in queue order
     */
    public abstract List<Aircraft> getAircraftInOrder();

    /**
     * Returns true if the given aircraft is in the queue.
     * @param aircraft aircraft to find in queue
     * @return true if aircraft is in queue; false otherwise
     */
    public abstract boolean containsAircraft(Aircraft aircraft);

    /**
     * Returns the human-readable string representation of this aircraft queue.
     * @return string representation of this queue
     */
    public String toString() {
        String message = this.getClass().getSimpleName();
        if (this.getAircraftInOrder().size() != 0) {
            message += " [";
            for (Aircraft eachAircraft : this.getAircraftInOrder()) {
                message += ("" + eachAircraft.getCallsign() + ", ");
            }
            message = message.substring(0, message.length() - 2);
            message += "]";
        } else {
            message += " []";
        }
        return message;
    }

    ;

    /**
     * Returns the machine-readable string representation of this aircraft queue.
     * @return encoded string representation of this aircraft queue
     */
    public String encode() {
        String message =
                this.getClass().getSimpleName() + ":" + getAircraftInOrder()
                        .size();
        if (getAircraftInOrder().size() != 0) {
            message += "\n";
            for (Aircraft eachAircraft : getAircraftInOrder()) {
                message += (eachAircraft.getCallsign() + ",");
            }
            message = message.substring(0, message.length() - 1);
        }
        return message;
    }

    ;


}