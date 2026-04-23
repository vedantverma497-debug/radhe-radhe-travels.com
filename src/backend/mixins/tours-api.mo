import Debug "mo:core/Debug";
import List "mo:core/List";
import TourTypes "../types/tours";
import TourLib "../lib/tours";

mixin (tours : List.List<TourTypes.Tour>) {
  public query func listTours() : async [TourTypes.Tour] {
    Debug.todo()
  };

  public query func getTour(id : TourTypes.TourId) : async ?TourTypes.Tour {
    Debug.todo()
  };

  public query func getToursByDestination(destination : Text) : async [TourTypes.Tour] {
    Debug.todo()
  };
};
