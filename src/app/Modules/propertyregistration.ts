export class Propertyregistration {
  constructor(
    public PropertyLongitude:string,
    public Propertylatitude:string,
    public PropertyPricePerNight:number,
    public PropertyName:string,public PropertyDescription:string,
    public PropertyMaxOccupation:number,public PropertyTotalBeds:number,
    public PropertyTotalRooms:number,public PropertyTotalBathrooms:number,
    public Country:string,public City:string,public Address:string,public UniqueStays:string,
    public PropertyType:string,public PropertyHostID:string){}
}
