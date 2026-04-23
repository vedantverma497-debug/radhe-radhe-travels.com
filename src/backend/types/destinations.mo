import Common "common";

module {
  public type DestinationId = Common.DestinationId;

  public type Destination = {
    id : DestinationId;
    name : Text;
    overview : Text;
    highlights : [Text];
    imageUrl : Text;
  };
};
