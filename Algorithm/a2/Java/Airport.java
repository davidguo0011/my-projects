import java.util.*;

public class Airport extends AirportBase {
    List<Terminal> terminals = new LinkedList<>();
    List<Shuttle> shuttles = new LinkedList<>();
    /**
     * Creates a new AirportBase instance with the given capacity.
     *
     * @param capacity capacity of the airport shuttles
     *                 (same for all shuttles)
     */
    public Airport(int capacity) {
        super(capacity);
    }
    /**
     * Given a terminal and a shuttle, returns the other terminal that the
     * shuttle travels between.
     *
     * @param shuttle shuttle to look for opposite terminal on
     * @param terminal terminal to find opposite of
     * @return opposite terminal or null if the shuttle is not incident to
     * the given terminal
     */
    @Override
    public Terminal opposite(ShuttleBase shuttle, TerminalBase terminal) {
        if(shuttle.getDestination().equals(terminal)){
            return (Terminal)shuttle.getOrigin();
        }else{
            return (Terminal)shuttle.getDestination();
        }
    }
    /**
     * Adds the given terminal to the airport, and returns the added terminal.
     *
     * @param terminal terminal to add
     * @return terminal that was added
     */
    @Override
    public Terminal insertTerminal(TerminalBase terminal) {
        for(int i = 0; i<terminals.size(); i++){
            if(terminals.get(i).equals(terminal)){
                return (Terminal)terminal;
            }
        }
        terminals.add((Terminal)terminal);
        return (Terminal)terminal;
    }
    /**
     * Creates and returns a new shuttle connecting origin to destination.
     * All shuttles are bidirectional.
     *
     * @param origin origin terminal of shuttle
     * @param destination destination terminal of shuttle
     * @param time time it takes to go from origin to destination, in minutes
     * @return newly created shuttle
     */
    @Override
    public Shuttle insertShuttle(TerminalBase origin,
                                     TerminalBase destination, int time) {
        Shuttle shuttle = new Shuttle (origin, destination, time);
        shuttle.capacity = getCapacity();
        ((Terminal)origin).addShuttle(shuttle);
        ((Terminal)destination).addShuttle(shuttle);
        this.shuttles.add(shuttle);
        return shuttle;
    }

    @Override
    public boolean removeTerminal(TerminalBase terminal) {
        if(this.terminals.size()>0){
            for(Terminal eachTerminal : this.terminals){
                if(eachTerminal.equals(terminal)) {
                    terminals.remove(terminal);
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public boolean removeShuttle(ShuttleBase shuttle) {
        Terminal origin = (Terminal) shuttle.getOrigin();
        Terminal destination = (Terminal) shuttle.getDestination();
        if(origin.getShuttles().size() > 0){
            for(ShuttleBase eachShuttle : origin.getShuttles()){
                if(eachShuttle == shuttle){
                    origin.shuttles.remove(shuttle);
                    return true;
                }
            }
        }
        if(destination.getShuttles().size() > 0){
            for(ShuttleBase eachShuttle : origin.getShuttles()){
                if(eachShuttle == shuttle){
                    destination.shuttles.remove(shuttle);
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public List<ShuttleBase> outgoingShuttles(TerminalBase terminal) {
        return ((Terminal)terminal).getShuttles();
    }
    public void reset(){
        for(Terminal terminal : this.terminals){
            terminal.visited = false;
            terminal.distanceLabel = 0;
            terminal.previous = null;
            terminal.previousShuttle = null;
            terminal.cloud = false;
        }
        for(Shuttle shuttle : this.shuttles){
            shuttle.discoveryEdge = false;
            shuttle.crossEdge = false;
            shuttle.explore = false;
            shuttle.visited = false;
        }
    }
    public void BFS(Terminal u){
        reset();
        List<Terminal> terminals = new LinkedList<>();
        terminals.add(u);
        u.markVisited();
        while(terminals.size()>0){
            Terminal v = terminals.remove(0);
            if(v.getShuttles().size() > 0){
                for(ShuttleBase eachShuttle : v.getShuttles()){
                    if(!((Shuttle)eachShuttle).isExplore()){
                        Terminal w = this.opposite(eachShuttle,v);
                        if(!w.isVisited()){
                            ((Shuttle) eachShuttle).markDiscoveryEdge();
                            ((Shuttle) eachShuttle).markExplore();
                            terminals.add(w);
                            w.previous = v;
                            w.previousShuttle = (Shuttle)eachShuttle;
                            w.markVisited();
                        }else{
                            ((Shuttle) eachShuttle).markCrossEdge();
                            ((Shuttle) eachShuttle).markExplore();
                        }
                    }
                }
            }
        }
    }
    @Override
    public Path findShortestPath(TerminalBase origin,
                                 TerminalBase destination) {
        List<TerminalBase> terminals = new LinkedList<>();
        int time = 0;
        BFS((Terminal)origin);

        terminals.add((Terminal)destination);
        TerminalBase temp = terminals.get(0);

        while(!((Terminal)temp).equals(origin)){
            try{
                time += ((Terminal) temp).previousShuttle.getTime();
                ((Terminal) temp).previousShuttle.capacity --;
                if(((Terminal) temp).previousShuttle.capacity <= 0){
                    removeShuttle(((Terminal) temp).previousShuttle);
                }
                temp = ((Terminal)temp).previous;
                time += temp.getWaitingTime();
                terminals.add(temp);
            }catch(NullPointerException npe){
                terminals = new LinkedList<>();
                time = 0;
                break;
            }

        }
        Collections.reverse(terminals);
        return new Path(terminals,time);
    }

    public void DijkstraDistances(Terminal s){
        reset();
        Map<Terminal, Integer> PQ = new HashMap<>();
        for(int i = 0; i<this.terminals.size(); i++){
            Terminal eachTerminal = this.terminals.get(i);
            if(eachTerminal.equals(s)){
                eachTerminal.setDistanceLabel(0);
            }else{
                eachTerminal.setDistanceLabel(Integer.MAX_VALUE);
            }
            PQ.put(eachTerminal, eachTerminal.distanceLabel);
        }
        while(PQ.size() > 0){
            Map<Terminal, Integer> u = removeMin(PQ);
            Terminal uTerminal = null;
            Integer uDistance = null;
            for(Map.Entry<Terminal, Integer> entry : u.entrySet()){
                uTerminal = entry.getKey();
                uDistance = entry.getValue();
            }
            uTerminal.markCloud();
            for(ShuttleBase eachShuttle : uTerminal.getShuttles()){
                Terminal z = opposite(eachShuttle,uTerminal);
                Integer r = uDistance + eachShuttle.getTime() + z.getWaitingTime();
                if(r < z.distanceLabel && !z.cloud){
                    z.distanceLabel = r;
                    z.previous = uTerminal;
                    z.previousShuttle = (Shuttle) eachShuttle;
                    PQ.replace(z,r);
                }
            };
        }
    }
    public Map<Terminal, Integer> removeMin(Map<Terminal, Integer> PQ){
        Map.Entry<Terminal, Integer> first = PQ.entrySet().iterator().next();
        Integer minDistance = first.getValue();
        Terminal minTerminal = first.getKey();
        for(Map.Entry<Terminal, Integer> entry : PQ.entrySet()){
            if(entry.getValue() < minDistance){
                minDistance = entry.getValue();
                minTerminal = entry.getKey();
            }
        }
        PQ.remove(minTerminal);
        Map<Terminal, Integer> minFinal = new HashMap<>();
        minFinal.put(minTerminal,minDistance);
        return minFinal;
    }

    @Override
    public Path findFastestPath(TerminalBase origin, TerminalBase destination) {
        DijkstraDistances((Terminal) origin);
        List<TerminalBase> terminals = new LinkedList<>();
        terminals.add(destination);
        TerminalBase temp = terminals.get(0);
        int time = 0;
        while(!temp.equals(origin)){
            try{
                time += ((Terminal)temp).previousShuttle.getTime();
                ((Terminal) temp).previousShuttle.capacity --;
                if(((Terminal) temp).previousShuttle.capacity <= 0){
                    removeShuttle(((Terminal) temp).previousShuttle);
                }
                temp = ((Terminal)temp).previous;
                time += temp.getWaitingTime();
                terminals.add(temp);
            }catch(NullPointerException npe){
                terminals = new LinkedList<>();
                time = 0;
                break;
            }

        }
        Collections.reverse(terminals);
        return new Path(terminals,time);
    }

    /* Implement all the necessary methods of the Airport here */

    static class Terminal extends TerminalBase {
        /**
         * Creates a new TerminalBase instance with the given terminal ID
         * and waiting time.
         *
         * @param id          terminal ID
         * @param waitingTime waiting time for the terminal, in minutes
         */
        boolean visited = false;
        boolean cloud = false;
        Terminal previous = null;
        Shuttle previousShuttle = null;
        int distanceLabel;
        List<ShuttleBase> shuttles = new LinkedList<ShuttleBase>();
        public Terminal(String id, int waitingTime) {
            super(id, waitingTime);
        }
        public List<ShuttleBase> getShuttles (){
            return this.shuttles;
        }
        public void addShuttle (Shuttle shuttle){
            this.shuttles.add(shuttle);
        }
        public void markVisited (){
            this.visited = true;
        }
        public boolean isVisited(){
            return visited;
        }
        public void setDistanceLabel(int distance){
            distanceLabel = distance;
        }
        public void markCloud(){
            cloud = true;
        }

    }

    static class Shuttle extends ShuttleBase {
        /**
         * Creates a new ShuttleBase instance, travelling from origin to
         * destination and requiring 'time' minutes to travel.
         *
         * @param origin      origin terminal
         * @param destination destination terminal
         * @param time        time required to travel, in minutes
         */
        boolean visited = false;
        boolean explore = false;
        boolean discoveryEdge = false;
        boolean crossEdge = false;
        int capacity = 0;
        public Shuttle(TerminalBase origin, TerminalBase destination,
                       int time) {
            super(origin, destination, time);
        }
        public void markExplore(){
            explore = true;
        }
        public boolean isExplore(){
            return explore;
        }
        public void markDiscoveryEdge(){
            discoveryEdge = true;
        }
        public void markCrossEdge(){
            crossEdge = true;
        }

    }

    /*
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        REMOVE THE MAIN FUNCTION BEFORE SUBMITTING TO THE AUTOGRADER
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        The following main function is provided for simple debugging only

        Note: to enable assertions, you need to add the "-ea" flag to the
        VM options of Airport's run configuration
     */
}
