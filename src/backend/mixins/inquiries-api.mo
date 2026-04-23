import Debug "mo:core/Debug";
import List "mo:core/List";
import InqTypes "../types/inquiries";
import InqLib "../lib/inquiries";

mixin (inquiries : List.List<InqTypes.Inquiry>) {
  public shared func submitInquiry(req : InqTypes.InquiryRequest) : async InqTypes.InquiryId {
    Debug.todo()
  };
};
