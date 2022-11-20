import java.util.*;

public class SecurityRoutine extends SecurityRoutineBase {
    List<AreaBase> orderedAreas = new LinkedList<>();
    List<Vertex> vertices = new LinkedList<>();
    List<String> edges = new LinkedList<>();
    static class Vertex{
        AreaBase area;
        List<AreaBase> outGoingAreas = new LinkedList<>();
        List<AreaBase> inComingAreas = new LinkedList<>();
        public Vertex(AreaBase area) {
            this.area = area;
        }
    }
    /* Implement all the necessary methods here */

    /*
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        REMOVE THE MAIN FUNCTION BEFORE SUBMITTING TO THE AUTOGRADER
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        The following main function is provided for simple debugging only

        Note: to enable assertions, you need to add the "-ea" flag to the
        VM options of SecurityRoutine's run configuration
     */
    @Override
    public AreaBase insertArea(AreaBase area) {
        Vertex vertex = new Vertex(area);
        vertices.add(vertex);
        return area;
    }
    @Override
    public void addOrder(AreaBase area1, AreaBase area2) {
        for(int i = 0; i<vertices.size(); i++){
            if(vertices.get(i).area == area1){
                vertices.get(i).outGoingAreas.add(area2);
            }
            if(vertices.get(i).area == area2){
                vertices.get(i).inComingAreas.add(area1);
            }
        }
        edges.add(area1.getId() + area2.getId());
    }
    @Override
    public List<AreaBase> calculateTotalOrder() {
        List<Vertex> s = new LinkedList<>();
        for(Vertex vertex : vertices){
            if(vertex.inComingAreas.size() == 0){
                s.add(vertex);
            }
        }
        while(!s.isEmpty()){
            Vertex n = s.remove(0);
            orderedAreas.add(n.area);
            for(int i = 0; i<n.outGoingAreas.size(); i++){
                AreaBase m = n.outGoingAreas.get(i);
                edges.remove(""+n.area.getId()+m.getId());
                for(int a = 0; a<vertices.size(); a++){
                    if(vertices.get(a).area == m){
                        vertices.get(a).inComingAreas.remove(n.area);
                    }
                }
                for(int b = 0; b<vertices.size(); b++){
                    if(vertices.get(b).area == m){
                        if(vertices.get(b).inComingAreas.size()== 0){
                            s.add(vertices.get(b));
                        }
                    }
                }
            }
        }
        if(!edges.isEmpty()){
            return null;
        }
        return orderedAreas;
    }



}
