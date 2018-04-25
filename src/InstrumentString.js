export default class InstrumentString {


  constructor(note) {
    InstrumentString.noOfInstances = (InstrumentString.noOfInstances || 0) + 1;
    this._id = InstrumentString._generateId();

    this._note = note;
  }

  get note() {
    return this._note;
  }

  get id() {
    return this._id;
  }

  static _generateId() {
    return InstrumentString.noOfInstances;
  }
}
