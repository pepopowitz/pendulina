import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  createPlan: Plan;
  createPlanWorkout: PlanWorkout;
  deleteActivity: Activity;
  deletePlan: Plan;
  deletePlanWorkout: PlanWorkout;
  updateActivity: Activity;
  updatePlan: Plan;
  updatePlanWorkout: PlanWorkout;
};


export type MutationCreateActivityArgs = {
  input: CreateActivityInput;
};


export type MutationCreatePlanArgs = {
  input: CreatePlanInput;
};


export type MutationCreatePlanWorkoutArgs = {
  input: CreatePlanWorkoutInput;
};


export type MutationDeleteActivityArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePlanArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePlanWorkoutArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateActivityArgs = {
  id: Scalars['Int'];
  input: UpdateActivityInput;
};


export type MutationUpdatePlanArgs = {
  id: Scalars['Int'];
  input: UpdatePlanInput;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Activity: ResolverTypeWrapper<Activity>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateActivityInput: CreateActivityInput;
  CreatePlanInput: CreatePlanInput;
  CreatePlanWeekInput: CreatePlanWeekInput;
  CreatePlanWorkoutInput: CreatePlanWorkoutInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DayOfWeek: DayOfWeek;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Plan: ResolverTypeWrapper<Plan>;
  PlanWeek: ResolverTypeWrapper<PlanWeek>;
  PlanWorkout: ResolverTypeWrapper<PlanWorkout>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateActivityInput: UpdateActivityInput;
  UpdatePlanInput: UpdatePlanInput;
  UpdatePlanWeekInput: UpdatePlanWeekInput;
  UpdatePlanWorkoutInput: UpdatePlanWorkoutInput;
  WorkoutStatus: WorkoutStatus;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Activity: Activity;
  Int: Scalars['Int'];
  String: Scalars['String'];
  CreateActivityInput: CreateActivityInput;
  CreatePlanInput: CreatePlanInput;
  CreatePlanWeekInput: CreatePlanWeekInput;
  CreatePlanWorkoutInput: CreatePlanWorkoutInput;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Plan: Plan;
  PlanWeek: PlanWeek;
  PlanWorkout: PlanWorkout;
  Query: {};
  Redwood: Redwood;
  Time: Scalars['Time'];
  UpdateActivityInput: UpdateActivityInput;
  UpdatePlanInput: UpdatePlanInput;
  UpdatePlanWeekInput: UpdatePlanWeekInput;
  UpdatePlanWorkoutInput: UpdatePlanWorkoutInput;
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'input'>>;
  createPlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationCreatePlanArgs, 'input'>>;
  createPlanWorkout?: Resolver<ResolversTypes['PlanWorkout'], ParentType, ContextType, RequireFields<MutationCreatePlanWorkoutArgs, 'input'>>;
  deleteActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationDeleteActivityArgs, 'id'>>;
  deletePlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationDeletePlanArgs, 'id'>>;
  deletePlanWorkout?: Resolver<ResolversTypes['PlanWorkout'], ParentType, ContextType, RequireFields<MutationDeletePlanWorkoutArgs, 'id'>>;
  updateActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationUpdateActivityArgs, 'id' | 'input'>>;
  updatePlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationUpdatePlanArgs, 'id' | 'input'>>;
  updatePlanWorkout?: Resolver<ResolversTypes['PlanWorkout'], ParentType, ContextType, RequireFields<MutationUpdatePlanWorkoutArgs, 'id' | 'input'>>;
};

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  planWeeks?: Resolver<Array<Maybe<ResolversTypes['PlanWeek']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanWeekResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanWeek'] = ResolversParentTypes['PlanWeek']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  planWorkouts?: Resolver<Array<Maybe<ResolversTypes['PlanWorkout']>>, ParentType, ContextType>;
  weekNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  intention?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>;
  planId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanWorkoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanWorkout'] = ResolversParentTypes['PlanWorkout']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  planWeek?: Resolver<ResolversTypes['PlanWeek'], ParentType, ContextType>;
  dayOfWeek?: Resolver<ResolversTypes['DayOfWeek'], ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType>;
  isKeyWorkout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  targetMiles?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  targetTimeInMinutes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  targetNotes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['WorkoutStatus'], ParentType, ContextType>;
  actualMiles?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actualTimeInMinutes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actualElevationInFeet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actualNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actualMantras?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actualReflection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<QueryActivityArgs, 'id'>>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<QueryPlanArgs, 'id'>>;
  planWeek?: Resolver<Maybe<ResolversTypes['PlanWeek']>, ParentType, ContextType, RequireFields<QueryPlanWeekArgs, 'id'>>;
  planWeeks?: Resolver<Array<ResolversTypes['PlanWeek']>, ParentType, ContextType>;
  planWorkout?: Resolver<Maybe<ResolversTypes['PlanWorkout']>, ParentType, ContextType, RequireFields<QueryPlanWorkoutArgs, 'id'>>;
  planWorkouts?: Resolver<Array<ResolversTypes['PlanWorkout']>, ParentType, ContextType>;
  plans?: Resolver<Array<ResolversTypes['Plan']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = any> = {
  Activity?: ActivityResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Plan?: PlanResolvers<ContextType>;
  PlanWeek?: PlanWeekResolvers<ContextType>;
  PlanWorkout?: PlanWorkoutResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Time?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
