import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/inquiries";

module {
  public type Inquiry = Types.Inquiry;
  public type InquiryId = Types.InquiryId;
  public type InquiryRequest = Types.InquiryRequest;

  public func submit(
    inquiries : List.List<Inquiry>,
    req : InquiryRequest,
    id : InquiryId,
    submittedAt : Int,
  ) : InquiryId {
    Debug.todo()
  };

  public func listAll(inquiries : List.List<Inquiry>) : [Inquiry] {
    Debug.todo()
  };

  public func nextId(inquiries : List.List<Inquiry>) : InquiryId {
    Debug.todo()
  };
};
