import Debug "mo:core/Debug";
import List "mo:core/List";
import DestTypes "../types/destinations";
import DestLib "../lib/destinations";

mixin (destinations : List.List<DestTypes.Destination>) {
  public query func listDestinations() : async [DestTypes.Destination] {
    Debug.todo()
  };

  public query func getDestination(id : DestTypes.DestinationId) : async ?DestTypes.Destination {
    Debug.todo()
  };
};
