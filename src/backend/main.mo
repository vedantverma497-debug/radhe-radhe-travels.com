import List "mo:core/List";
import TourTypes "types/tours";
import DestTypes "types/destinations";
import InqTypes "types/inquiries";
import TourApi "mixins/tours-api";
import DestApi "mixins/destinations-api";
import InqApi "mixins/inquiries-api";

actor {
  let tours = List.empty<TourTypes.Tour>();
  let destinations = List.empty<DestTypes.Destination>();
  let inquiries = List.empty<InqTypes.Inquiry>();

  include TourApi(tours);
  include DestApi(destinations);
  include InqApi(inquiries);
};
