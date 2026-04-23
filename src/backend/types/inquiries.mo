import Common "common";

module {
  public type InquiryId = Common.InquiryId;
  public type Timestamp = Common.Timestamp;

  public type Inquiry = {
    id : InquiryId;
    name : Text;
    email : Text;
    phone : Text;
    tourName : Text;
    desiredDate : Text;
    groupSize : Nat;
    message : Text;
    submittedAt : Timestamp;
  };

  public type InquiryRequest = {
    name : Text;
    email : Text;
    phone : Text;
    tourName : Text;
    desiredDate : Text;
    groupSize : Nat;
    message : Text;
  };
};
