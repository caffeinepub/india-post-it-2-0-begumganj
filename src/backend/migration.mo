import Set "mo:core/Set";
import Text "mo:core/Text";

module {
  type OldActor = {
    mySet : Set.Set<Text>;
  };

  type NewActor = {};

  public func run(old : OldActor) : NewActor {
    {};
  };
};
