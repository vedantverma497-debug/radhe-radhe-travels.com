import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/tours";

module {
  public type Tour = Types.Tour;
  public type TourId = Types.TourId;

  public func listAll(tours : List.List<Tour>) : [Tour] {
    Debug.todo()
  };

  public func getById(tours : List.List<Tour>, id : TourId) : ?Tour {
    Debug.todo()
  };

  public func filterByDestination(tours : List.List<Tour>, destination : Text) : [Tour] {
    Debug.todo()
  };

  public func add(tours : List.List<Tour>, tour : Tour) {
    Debug.todo()
  };

  public func nextId(tours : List.List<Tour>) : TourId {
    Debug.todo()
  };
};
