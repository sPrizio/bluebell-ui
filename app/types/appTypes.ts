import moment from "moment";
import DurationConstructor = moment.unitOfTime.DurationConstructor;

export type SimpleOption = {
  label: string,
  value: string,
  unit: DurationConstructor,
  count: number,
}

export type UserMenuOption = {
  label: string,
  link: string,
  icon: string,
}