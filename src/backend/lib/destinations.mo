import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/destinations";

module {
  public type Destination = Types.Destination;
  public type DestinationId = Types.DestinationId;

  public func listAll(destinations : List.List<Destination>) : [Destination] {
    Debug.todo()
  };

  public func getById(destinations : List.List<Destination>, id : DestinationId) : ?Destination {
    Debug.todo()
  };

  public func add(destinations : List.List<Destination>, destination : Destination) {
    Debug.todo()
  };

  public func nextId(destinations : List.List<Destination>) : DestinationId {
    Debug.todo()
  };
};
