import { DateSlot } from '../const';

export type BookingFormFields = {
  name: string;
  tel: string;
  person: string;
};


export type BookingData = {
  date: DateSlot;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export type BookingPostData = {
  questId: string;
  bookingData: BookingData;
};
