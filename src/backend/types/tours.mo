import Common "common";

module {
  public type TourId = Common.TourId;
  public type DestinationId = Common.DestinationId;

  public type DayItinerary = {
    day : Nat;
    title : Text;
    description : Text;
  };

  public type Tour = {
    id : TourId;
    name : Text;
    destination : Text;
    destinationId : ?DestinationId;
    duration : Text;
    startingPrice : Nat;
    highlights : [Text];
    itinerary : [DayItinerary];
    inclusions : [Text];
    exclusions : [Text];
    galleryImages : [Text];
    departureDates : [Text];
    groupSize : Text;
  };
};
