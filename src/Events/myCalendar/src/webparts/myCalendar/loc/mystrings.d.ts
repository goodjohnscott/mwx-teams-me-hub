// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
declare interface IMyCalendarWebPartStrings {
  PropertyPaneDescription: string;  
  HeaderDisplayPropertyLabel: string;
  MessagesToShowPropertyLabel: string;
  RefreshIntervalPropertyLabel:string; 
  DaysInAdvancePropertyLabel: string; 
  NumMeetingsPropertyLabel: string;
  ClickActionPropertyLabel: string;
  ShowNewPropertyLabel: string;  
  ShowViewAllPropertyLabel: string;  
  EnableThemesPropertyLabel: string;
  ShowOnPropertyText: string;
  ShowOffPropertyText: string;
  EnableOnPropertyText: string;
  EnableOffPropertyText: string;
  behaviorPropertyGroupName: string;
  capabilitiesPropertyGroupName: string;
  uiPropertyGroupName: string;
  
  AllDay: string;  
  Error: string;
  Hour: string;
  Hours: string;
  Loading: string;
  Minutes: string;
  NewMeeting: string;
  NoMeetings: string;    
  ViewAll: string;
  Error: string;

  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;

  MondayAbbr: string;
  TuesdayAbbr: string;
  WednesdayAbbr: string;
  ThursdayAbbr: string;
  FridayAbbr: string;
  SaturdayAbbr: string;
  SundayAbbr: string;
}

declare module 'MyCalendarWebPartStrings' {
  const strings: IMyCalendarWebPartStrings;
  export = strings;
}
