export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Activity = {
  __typename?: 'Activity';
  id: Scalars['Int'];
  name: Scalars['String'];
  icon: Scalars['String'];
};

export type CreateActivityInput = {
  name: Scalars['String'];
  icon: Scalars['String'];
};

export type CreatePlanInput = {
  name: Scalars['String'];
};

export type CreatePlanWeekInput = {
  weekNumber: Scalars['Int'];
  intention?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['Int']>;
};

export type CreatePlanWorkoutInput = {
  activityId: Scalars['Int'];
  planWeekId: Scalars['Int'];
  dayOfWeek: DayOfWeek;
  isKeyWorkout: Scalars['Boolean'];
  targetMiles?: Maybe<Scalars['String']>;
  targetTimeInMinutes?: Maybe<Scalars['String']>;
  targetNotes?: Maybe<Scalars['String']>;
  status: WorkoutStatus;
  actualMiles?: Maybe<Scalars['String']>;
  actualTimeInMinutes?: Maybe<Scalars['String']>;
  actualElevationInFeet?: Maybe<Scalars['String']>;
  actualNotes?: Maybe<Scalars['String']>;
  actualMantras?: Maybe<Scalars['String']>;
  actualReflection?: Maybe<Scalars['String']>;
};



export enum DayOfWeek {
  Sunday = 'SUNDAY',
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY'
}



export type Mutation = {
  __typename?: 'Mutation';
  createActivity: Activity;
  createPlanWorkout: PlanWorkout;
  deleteActivity: Activity;
  deletePlanWorkout: PlanWorkout;
  updateActivity: Activity;
  updatePlanWorkout: PlanWorkout;
};


export type MutationCreateActivityArgs = {
  input: CreateActivityInput;
};


export type MutationCreatePlanWorkoutArgs = {
  input: CreatePlanWorkoutInput;
};


export type MutationDeleteActivityArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePlanWorkoutArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateActivityArgs = {
  id: Scalars['Int'];
  input: UpdateActivityInput;
};


export type MutationUpdatePlanWorkoutArgs = {
  id: Scalars['Int'];
  input: UpdatePlanWorkoutInput;
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['Int'];
  name: Scalars['String'];
  planWeeks: Array<Maybe<PlanWeek>>;
};

export type PlanWeek = {
  __typename?: 'PlanWeek';
  id: Scalars['Int'];
  planWorkouts: Array<Maybe<PlanWorkout>>;
  weekNumber: Scalars['Int'];
  startDate: Scalars['DateTime'];
  intention?: Maybe<Scalars['String']>;
  plan?: Maybe<Plan>;
  planId?: Maybe<Scalars['Int']>;
};

export type PlanWorkout = {
  __typename?: 'PlanWorkout';
  id: Scalars['Int'];
  planWeek: PlanWeek;
  dayOfWeek: DayOfWeek;
  activityId: Scalars['Int'];
  activity: Activity;
  isKeyWorkout: Scalars['Boolean'];
  targetMiles?: Maybe<Scalars['String']>;
  targetTimeInMinutes?: Maybe<Scalars['String']>;
  targetNotes: Scalars['String'];
  status: WorkoutStatus;
  actualMiles?: Maybe<Scalars['String']>;
  actualTimeInMinutes?: Maybe<Scalars['String']>;
  actualElevationInFeet?: Maybe<Scalars['String']>;
  actualNotes?: Maybe<Scalars['String']>;
  actualMantras?: Maybe<Scalars['String']>;
  actualReflection?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  plan?: Maybe<Plan>;
  planWeek?: Maybe<PlanWeek>;
  planWeeks: Array<PlanWeek>;
  planWorkout?: Maybe<PlanWorkout>;
  planWorkouts: Array<PlanWorkout>;
  plans: Array<Plan>;
  redwood?: Maybe<Redwood>;
};


export type QueryActivityArgs = {
  id: Scalars['Int'];
};


export type QueryPlanArgs = {
  id: Scalars['Int'];
};


export type QueryPlanWeekArgs = {
  id: Scalars['Int'];
};


export type QueryPlanWorkoutArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateActivityInput = {
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type UpdatePlanInput = {
  name?: Maybe<Scalars['String']>;
};

export type UpdatePlanWeekInput = {
  weekNumber?: Maybe<Scalars['Int']>;
  intention?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['Int']>;
};

export type UpdatePlanWorkoutInput = {
  planWeekId: Scalars['Int'];
  dayOfWeek?: Maybe<DayOfWeek>;
  activityId?: Maybe<Scalars['Int']>;
  isKeyWorkout: Scalars['Boolean'];
  targetMiles?: Maybe<Scalars['String']>;
  targetTimeInMinutes?: Maybe<Scalars['String']>;
  targetNotes?: Maybe<Scalars['String']>;
  status: WorkoutStatus;
  actualMiles?: Maybe<Scalars['String']>;
  actualTimeInMinutes?: Maybe<Scalars['String']>;
  actualElevationInFeet?: Maybe<Scalars['String']>;
  actualNotes?: Maybe<Scalars['String']>;
  actualMantras?: Maybe<Scalars['String']>;
  actualReflection?: Maybe<Scalars['String']>;
};

export enum WorkoutStatus {
  Upcoming = 'UPCOMING',
  Completed = 'COMPLETED',
  Missed = 'MISSED'
}

export type DeleteActivityMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteActivity: (
    { __typename?: 'Activity' }
    & Pick<Activity, 'id'>
  ) }
);

export type ActivitiesVariables = Exact<{ [key: string]: never; }>;


export type Activities = (
  { __typename?: 'Query' }
  & { activities: Array<(
    { __typename?: 'Activity' }
    & Pick<Activity, 'id' | 'name' | 'icon'>
  )> }
);

export type Find_Activity_By_IdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Find_Activity_By_Id = (
  { __typename?: 'Query' }
  & { activity?: Maybe<(
    { __typename?: 'Activity' }
    & Pick<Activity, 'id' | 'name' | 'icon'>
  )> }
);

export type UpdateActivityMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateActivityInput;
}>;


export type UpdateActivityMutation = (
  { __typename?: 'Mutation' }
  & { updateActivity: (
    { __typename?: 'Activity' }
    & Pick<Activity, 'id' | 'name' | 'icon'>
  ) }
);

export type EditPlanQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditPlanQuery = (
  { __typename?: 'Query' }
  & { plan?: Maybe<(
    { __typename?: 'Plan' }
    & Pick<Plan, 'id' | 'name'>
    & { planWeeks: Array<Maybe<(
      { __typename?: 'PlanWeek' }
      & Pick<PlanWeek, 'id' | 'weekNumber' | 'startDate' | 'intention'>
      & { planWorkouts: Array<Maybe<(
        { __typename?: 'PlanWorkout' }
        & Pick<PlanWorkout, 'id' | 'dayOfWeek' | 'isKeyWorkout' | 'status' | 'targetMiles' | 'targetTimeInMinutes' | 'targetNotes' | 'actualMiles' | 'actualTimeInMinutes' | 'actualNotes'>
        & { activity: (
          { __typename?: 'Activity' }
          & Pick<Activity, 'name' | 'icon'>
        ) }
      )>> }
    )>> }
  )> }
);

export type EditPlanWorkoutModalQueryVariables = Exact<{
  planWeekID: Scalars['Int'];
  id: Scalars['Int'];
}>;


export type EditPlanWorkoutModalQuery = (
  { __typename?: 'Query' }
  & { planWorkout?: Maybe<(
    { __typename?: 'PlanWorkout' }
    & Pick<PlanWorkout, 'id' | 'dayOfWeek' | 'isKeyWorkout' | 'targetMiles' | 'targetTimeInMinutes' | 'targetNotes' | 'activityId' | 'status' | 'actualMiles' | 'actualTimeInMinutes' | 'actualElevationInFeet' | 'actualNotes' | 'actualMantras' | 'actualReflection'>
  )>, activities: Array<(
    { __typename?: 'Activity' }
    & Pick<Activity, 'id' | 'icon' | 'name'>
  )>, planWeek?: Maybe<(
    { __typename?: 'PlanWeek' }
    & Pick<PlanWeek, 'id' | 'weekNumber' | 'intention'>
    & { plan?: Maybe<(
      { __typename?: 'Plan' }
      & Pick<Plan, 'id'>
    )> }
  )> }
);

export type UpdatePlanWorkoutMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePlanWorkoutInput;
}>;


export type UpdatePlanWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { updatePlanWorkout: (
    { __typename?: 'PlanWorkout' }
    & Pick<PlanWorkout, 'id' | 'dayOfWeek' | 'activityId' | 'isKeyWorkout' | 'targetMiles' | 'targetTimeInMinutes' | 'targetNotes' | 'status' | 'actualMiles' | 'actualTimeInMinutes' | 'actualElevationInFeet' | 'actualNotes' | 'actualMantras' | 'actualReflection'>
  ) }
);

export type DeletePlanWorkoutMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePlanWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { deletePlanWorkout: (
    { __typename?: 'PlanWorkout' }
    & Pick<PlanWorkout, 'id'>
  ) }
);

export type CreateActivityMutationVariables = Exact<{
  input: CreateActivityInput;
}>;


export type CreateActivityMutation = (
  { __typename?: 'Mutation' }
  & { createActivity: (
    { __typename?: 'Activity' }
    & Pick<Activity, 'id'>
  ) }
);

export type NewPlanWorkoutModalQueryVariables = Exact<{
  planWeekID: Scalars['Int'];
}>;


export type NewPlanWorkoutModalQuery = (
  { __typename?: 'Query' }
  & { activities: Array<(
    { __typename?: 'Activity' }
    & Pick<Activity, 'id' | 'icon' | 'name'>
  )>, planWeek?: Maybe<(
    { __typename?: 'PlanWeek' }
    & Pick<PlanWeek, 'id' | 'weekNumber' | 'intention'>
    & { plan?: Maybe<(
      { __typename?: 'Plan' }
      & Pick<Plan, 'id'>
    )> }
  )> }
);

export type CreatePlanWorkoutMutationVariables = Exact<{
  input: CreatePlanWorkoutInput;
}>;


export type CreatePlanWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { createPlanWorkout: (
    { __typename?: 'PlanWorkout' }
    & Pick<PlanWorkout, 'id'>
  ) }
);
