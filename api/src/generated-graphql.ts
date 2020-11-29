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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  getAuthUser?: Maybe<UserPayload>;
  getUser?: Maybe<UserPayload>;
  getUsers?: Maybe<UsersPayload>;
  searchUsers?: Maybe<Array<Maybe<UserPayload>>>;
  suggestPeople?: Maybe<Array<Maybe<UserPayload>>>;
  getUserPosts?: Maybe<UserPostsPayload>;
  getFollowedPosts?: Maybe<PostsPayload>;
  getPosts?: Maybe<PostsPayload>;
  getPost?: Maybe<PostPayload>;
  getMessages?: Maybe<Array<Maybe<MessagePayload>>>;
  getConversations?: Maybe<Array<Maybe<ConversationsPayload>>>;
  getUserNotifications?: Maybe<NotificationsPayload>;
};


export type QueryGetUserArgs = {
  username?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetUsersArgs = {
  userId: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySearchUsersArgs = {
  searchQuery: Scalars['String'];
};


export type QuerySuggestPeopleArgs = {
  userId: Scalars['String'];
};


export type QueryGetUserPostsArgs = {
  username: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetFollowedPostsArgs = {
  userId: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetPostsArgs = {
  authUserId: Scalars['ID'];
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetMessagesArgs = {
  authUserId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type QueryGetConversationsArgs = {
  authUserId: Scalars['ID'];
};


export type QueryGetUserNotificationsArgs = {
  userId: Scalars['ID'];
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  uploadUserPhoto?: Maybe<UserPayload>;
  createPost?: Maybe<PostPayload>;
  deletePost?: Maybe<PostPayload>;
  createMessage?: Maybe<MessagePayload>;
  updateMessageSeen?: Maybe<Scalars['Boolean']>;
  createFollow?: Maybe<Follow>;
  deleteFollow?: Maybe<Follow>;
  createLike?: Maybe<Like>;
  deleteLike?: Maybe<Like>;
  createComment?: Maybe<Comment>;
  deleteComment?: Maybe<Comment>;
  createNotification?: Maybe<Notification>;
  deleteNotification?: Maybe<Notification>;
  updateNotificationSeen?: Maybe<Scalars['Boolean']>;
};


export type MutationUploadUserPhotoArgs = {
  input: UploadUserPhotoInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationUpdateMessageSeenArgs = {
  input: UpdateMessageSeenInput;
};


export type MutationCreateFollowArgs = {
  input: CreateFollowInput;
};


export type MutationDeleteFollowArgs = {
  input: DeleteFollowInput;
};


export type MutationCreateLikeArgs = {
  input: CreateLikeInput;
};


export type MutationDeleteLikeArgs = {
  input: DeleteLikeInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};


export type MutationUpdateNotificationSeenArgs = {
  input: UpdateNotificationSeenInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']>;
  isUserOnline?: Maybe<IsUserOnlinePayload>;
  messageCreated?: Maybe<MessagePayload>;
  newConversation?: Maybe<ConversationsPayload>;
  notificationCreatedOrDeleted?: Maybe<NotificationCreatedOrDeletedPayload>;
};


export type SubscriptionIsUserOnlineArgs = {
  authUserId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type SubscriptionMessageCreatedArgs = {
  authUserId: Scalars['ID'];
  userId: Scalars['ID'];
};

export enum Role {
  User = 'User',
  Moderator = 'Moderator',
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin'
}

export type User = {
  __typename?: 'User';
  role: Role;
  id: Scalars['ID'];
  fullName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  facebookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  githubId?: Maybe<Scalars['String']>;
  twitterId?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  imagePublicId?: Maybe<Scalars['String']>;
  coverImage?: Maybe<File>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  posts?: Maybe<Array<Maybe<PostPayload>>>;
  likes?: Maybe<Array<Maybe<Like>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  followers?: Maybe<Array<Maybe<Follow>>>;
  following?: Maybe<Array<Maybe<Follow>>>;
  notifications?: Maybe<Array<Maybe<NotificationPayload>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

export type SuccessMessage = {
  __typename?: 'SuccessMessage';
  message: Scalars['String'];
};

export type UploadUserPhotoInput = {
  id: Scalars['ID'];
  image: Scalars['Upload'];
  imagePublicId?: Maybe<Scalars['String']>;
  isCover?: Maybe<Scalars['Boolean']>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  role?: Maybe<Role>;
  id?: Maybe<Scalars['ID']>;
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  githubId?: Maybe<Scalars['String']>;
  twitterId?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  posts?: Maybe<Array<Maybe<PostPayload>>>;
  likes?: Maybe<Array<Maybe<Like>>>;
  followers?: Maybe<Array<Maybe<Follow>>>;
  following?: Maybe<Array<Maybe<Follow>>>;
  notifications?: Maybe<Array<Maybe<NotificationPayload>>>;
  newNotifications?: Maybe<Array<Maybe<NotificationPayload>>>;
  newConversations?: Maybe<Array<Maybe<ConversationsPayload>>>;
  unseenMessage?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UsersPayload = {
  __typename?: 'UsersPayload';
  users?: Maybe<Array<Maybe<UserPayload>>>;
  count?: Maybe<Scalars['String']>;
};

export type IsUserOnlinePayload = {
  __typename?: 'IsUserOnlinePayload';
  userId: Scalars['ID'];
  isOnline?: Maybe<Scalars['Boolean']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  imagePublicId?: Maybe<Scalars['String']>;
  author: User;
  likes?: Maybe<Array<Maybe<Like>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
  imagePublicId?: Maybe<Scalars['String']>;
  authorId: Scalars['ID'];
};

export type DeletePostInput = {
  id: Scalars['ID'];
  imagePublicId?: Maybe<Scalars['String']>;
};

export type UserPostsPayload = {
  __typename?: 'UserPostsPayload';
  posts?: Maybe<Array<Maybe<PostPayload>>>;
  count?: Maybe<Scalars['String']>;
};

export type PostPayload = {
  __typename?: 'PostPayload';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  author?: Maybe<UserPayload>;
  likes?: Maybe<Array<Maybe<Like>>>;
  comments?: Maybe<Array<Maybe<CommentPayload>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostsPayload = {
  __typename?: 'PostsPayload';
  posts?: Maybe<Array<Maybe<PostPayload>>>;
  count?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  sender: User;
  receiver: User;
  message: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['String']>;
};

export type CreateMessageInput = {
  sender: Scalars['ID'];
  receiver: Scalars['ID'];
  message: Scalars['String'];
};

export type UpdateMessageSeenInput = {
  sender?: Maybe<Scalars['ID']>;
  receiver: Scalars['ID'];
};

export type MessagePayload = {
  __typename?: 'MessagePayload';
  id?: Maybe<Scalars['ID']>;
  receiver?: Maybe<UserPayload>;
  sender?: Maybe<UserPayload>;
  message?: Maybe<Scalars['String']>;
  seen?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  isFirstMessage?: Maybe<Scalars['Boolean']>;
};

export type ConversationsPayload = {
  __typename?: 'ConversationsPayload';
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  seen?: Maybe<Scalars['Boolean']>;
  lastMessage?: Maybe<Scalars['String']>;
  lastMessageSender?: Maybe<Scalars['Boolean']>;
  lastMessageCreatedAt?: Maybe<Scalars['String']>;
};

export type Follow = {
  __typename?: 'Follow';
  id: Scalars['ID'];
  user?: Maybe<Scalars['ID']>;
  follower?: Maybe<Scalars['ID']>;
};

export type CreateFollowInput = {
  userId: Scalars['ID'];
  followerId: Scalars['ID'];
};

export type DeleteFollowInput = {
  id: Scalars['ID'];
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['ID'];
  post?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};

export type CreateLikeInput = {
  userId: Scalars['ID'];
  postId: Scalars['ID'];
};

export type DeleteLikeInput = {
  id: Scalars['ID'];
};

export type LikePayload = {
  __typename?: 'LikePayload';
  id?: Maybe<Scalars['ID']>;
  post?: Maybe<PostPayload>;
  user?: Maybe<UserPayload>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  comment: Scalars['String'];
  author?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type CreateCommentInput = {
  comment: Scalars['String'];
  author: Scalars['ID'];
  postId: Scalars['ID'];
};

export type DeleteCommentInput = {
  id: Scalars['ID'];
};

export type CommentPayload = {
  __typename?: 'CommentPayload';
  id?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  author?: Maybe<UserPayload>;
  post?: Maybe<PostPayload>;
  createdAt?: Maybe<Scalars['String']>;
};

export enum NotificationType {
  Like = 'LIKE',
  Follow = 'FOLLOW',
  Comment = 'COMMENT'
}

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID'];
  user?: Maybe<User>;
  author?: Maybe<User>;
  post: Scalars['ID'];
  like?: Maybe<Like>;
  follow?: Maybe<Follow>;
  comment?: Maybe<Comment>;
  type?: Maybe<NotificationType>;
  seen?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type CreateNotificationInput = {
  userId: Scalars['ID'];
  authorId: Scalars['ID'];
  postId?: Maybe<Scalars['ID']>;
  notificationType: NotificationType;
  notificationTypeId?: Maybe<Scalars['ID']>;
};

export type DeleteNotificationInput = {
  id: Scalars['ID'];
};

export type UpdateNotificationSeenInput = {
  userId: Scalars['ID'];
};

export type NotificationPayload = {
  __typename?: 'NotificationPayload';
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<UserPayload>;
  author?: Maybe<UserPayload>;
  like?: Maybe<LikePayload>;
  follow?: Maybe<Follow>;
  comment?: Maybe<CommentPayload>;
  createdAt?: Maybe<Scalars['String']>;
};

export type NotificationsPayload = {
  __typename?: 'NotificationsPayload';
  count: Scalars['String'];
  notifications?: Maybe<Array<Maybe<NotificationPayload>>>;
};

export enum NotificationOperationType {
  Create = 'CREATE',
  Delete = 'DELETE'
}

export type NotificationCreatedOrDeletedPayload = {
  __typename?: 'NotificationCreatedOrDeletedPayload';
  operation?: Maybe<NotificationOperationType>;
  notification?: Maybe<NotificationPayload>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
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
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Subscription: ResolverTypeWrapper<{}>;
  Role: Role;
  User: ResolverTypeWrapper<User>;
  File: ResolverTypeWrapper<File>;
  SuccessMessage: ResolverTypeWrapper<SuccessMessage>;
  UploadUserPhotoInput: UploadUserPhotoInput;
  UserPayload: ResolverTypeWrapper<UserPayload>;
  UsersPayload: ResolverTypeWrapper<UsersPayload>;
  IsUserOnlinePayload: ResolverTypeWrapper<IsUserOnlinePayload>;
  Post: ResolverTypeWrapper<Post>;
  CreatePostInput: CreatePostInput;
  DeletePostInput: DeletePostInput;
  UserPostsPayload: ResolverTypeWrapper<UserPostsPayload>;
  PostPayload: ResolverTypeWrapper<PostPayload>;
  PostsPayload: ResolverTypeWrapper<PostsPayload>;
  Message: ResolverTypeWrapper<Message>;
  CreateMessageInput: CreateMessageInput;
  UpdateMessageSeenInput: UpdateMessageSeenInput;
  MessagePayload: ResolverTypeWrapper<MessagePayload>;
  ConversationsPayload: ResolverTypeWrapper<ConversationsPayload>;
  Follow: ResolverTypeWrapper<Follow>;
  CreateFollowInput: CreateFollowInput;
  DeleteFollowInput: DeleteFollowInput;
  Like: ResolverTypeWrapper<Like>;
  CreateLikeInput: CreateLikeInput;
  DeleteLikeInput: DeleteLikeInput;
  LikePayload: ResolverTypeWrapper<LikePayload>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateCommentInput: CreateCommentInput;
  DeleteCommentInput: DeleteCommentInput;
  CommentPayload: ResolverTypeWrapper<CommentPayload>;
  NotificationType: NotificationType;
  Notification: ResolverTypeWrapper<Notification>;
  CreateNotificationInput: CreateNotificationInput;
  DeleteNotificationInput: DeleteNotificationInput;
  UpdateNotificationSeenInput: UpdateNotificationSeenInput;
  NotificationPayload: ResolverTypeWrapper<NotificationPayload>;
  NotificationsPayload: ResolverTypeWrapper<NotificationsPayload>;
  NotificationOperationType: NotificationOperationType;
  NotificationCreatedOrDeletedPayload: ResolverTypeWrapper<NotificationCreatedOrDeletedPayload>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Subscription: {};
  User: User;
  File: File;
  SuccessMessage: SuccessMessage;
  UploadUserPhotoInput: UploadUserPhotoInput;
  UserPayload: UserPayload;
  UsersPayload: UsersPayload;
  IsUserOnlinePayload: IsUserOnlinePayload;
  Post: Post;
  CreatePostInput: CreatePostInput;
  DeletePostInput: DeletePostInput;
  UserPostsPayload: UserPostsPayload;
  PostPayload: PostPayload;
  PostsPayload: PostsPayload;
  Message: Message;
  CreateMessageInput: CreateMessageInput;
  UpdateMessageSeenInput: UpdateMessageSeenInput;
  MessagePayload: MessagePayload;
  ConversationsPayload: ConversationsPayload;
  Follow: Follow;
  CreateFollowInput: CreateFollowInput;
  DeleteFollowInput: DeleteFollowInput;
  Like: Like;
  CreateLikeInput: CreateLikeInput;
  DeleteLikeInput: DeleteLikeInput;
  LikePayload: LikePayload;
  Comment: Comment;
  CreateCommentInput: CreateCommentInput;
  DeleteCommentInput: DeleteCommentInput;
  CommentPayload: CommentPayload;
  Notification: Notification;
  CreateNotificationInput: CreateNotificationInput;
  DeleteNotificationInput: DeleteNotificationInput;
  UpdateNotificationSeenInput: UpdateNotificationSeenInput;
  NotificationPayload: NotificationPayload;
  NotificationsPayload: NotificationsPayload;
  NotificationCreatedOrDeletedPayload: NotificationCreatedOrDeletedPayload;
  Upload: Scalars['Upload'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAuthUser?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, never>>;
  getUsers?: Resolver<Maybe<ResolversTypes['UsersPayload']>, ParentType, ContextType, RequireFields<QueryGetUsersArgs, 'userId'>>;
  searchUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserPayload']>>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'searchQuery'>>;
  suggestPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserPayload']>>>, ParentType, ContextType, RequireFields<QuerySuggestPeopleArgs, 'userId'>>;
  getUserPosts?: Resolver<Maybe<ResolversTypes['UserPostsPayload']>, ParentType, ContextType, RequireFields<QueryGetUserPostsArgs, 'username'>>;
  getFollowedPosts?: Resolver<Maybe<ResolversTypes['PostsPayload']>, ParentType, ContextType, RequireFields<QueryGetFollowedPostsArgs, 'userId'>>;
  getPosts?: Resolver<Maybe<ResolversTypes['PostsPayload']>, ParentType, ContextType, RequireFields<QueryGetPostsArgs, 'authUserId'>>;
  getPost?: Resolver<Maybe<ResolversTypes['PostPayload']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessagePayload']>>>, ParentType, ContextType, RequireFields<QueryGetMessagesArgs, 'authUserId' | 'userId'>>;
  getConversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationsPayload']>>>, ParentType, ContextType, RequireFields<QueryGetConversationsArgs, 'authUserId'>>;
  getUserNotifications?: Resolver<Maybe<ResolversTypes['NotificationsPayload']>, ParentType, ContextType, RequireFields<QueryGetUserNotificationsArgs, 'userId'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploadUserPhoto?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType, RequireFields<MutationUploadUserPhotoArgs, 'input'>>;
  createPost?: Resolver<Maybe<ResolversTypes['PostPayload']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['PostPayload']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'input'>>;
  createMessage?: Resolver<Maybe<ResolversTypes['MessagePayload']>, ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'input'>>;
  updateMessageSeen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateMessageSeenArgs, 'input'>>;
  createFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<MutationCreateFollowArgs, 'input'>>;
  deleteFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<MutationDeleteFollowArgs, 'input'>>;
  createLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<MutationCreateLikeArgs, 'input'>>;
  deleteLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<MutationDeleteLikeArgs, 'input'>>;
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'input'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'input'>>;
  createNotification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationCreateNotificationArgs, 'input'>>;
  deleteNotification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationDeleteNotificationArgs, 'input'>>;
  updateNotificationSeen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateNotificationSeenArgs, 'input'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _empty?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "_empty", ParentType, ContextType>;
  isUserOnline?: SubscriptionResolver<Maybe<ResolversTypes['IsUserOnlinePayload']>, "isUserOnline", ParentType, ContextType, RequireFields<SubscriptionIsUserOnlineArgs, 'authUserId' | 'userId'>>;
  messageCreated?: SubscriptionResolver<Maybe<ResolversTypes['MessagePayload']>, "messageCreated", ParentType, ContextType, RequireFields<SubscriptionMessageCreatedArgs, 'authUserId' | 'userId'>>;
  newConversation?: SubscriptionResolver<Maybe<ResolversTypes['ConversationsPayload']>, "newConversation", ParentType, ContextType>;
  notificationCreatedOrDeleted?: SubscriptionResolver<Maybe<ResolversTypes['NotificationCreatedOrDeletedPayload']>, "notificationCreatedOrDeleted", ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  facebookId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  imagePublicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  coverImagePublicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostPayload']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Follow']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['Follow']>>>, ParentType, ContextType>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationPayload']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessMessage'] = ResolversParentTypes['SuccessMessage']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']> = {
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imagePublicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverImagePublicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostPayload']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Follow']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['Follow']>>>, ParentType, ContextType>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationPayload']>>>, ParentType, ContextType>;
  newNotifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationPayload']>>>, ParentType, ContextType>;
  newConversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationsPayload']>>>, ParentType, ContextType>;
  unseenMessage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPayload'] = ResolversParentTypes['UsersPayload']> = {
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserPayload']>>>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IsUserOnlinePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['IsUserOnlinePayload'] = ResolversParentTypes['IsUserOnlinePayload']> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  imagePublicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPostsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPostsPayload'] = ResolversParentTypes['UserPostsPayload']> = {
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostPayload']>>>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostPayload'] = ResolversParentTypes['PostPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imagePublicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentPayload']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsPayload'] = ResolversParentTypes['PostsPayload']> = {
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostPayload']>>>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessagePayload'] = ResolversParentTypes['MessagePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  receiver?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFirstMessage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationsPayload'] = ResolversParentTypes['ConversationsPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  seen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastMessageSender?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMessageCreatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Follow'] = ResolversParentTypes['Follow']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  follower?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikePayload'] = ResolversParentTypes['LikePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['PostPayload']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentPayload'] = ResolversParentTypes['CommentPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['PostPayload']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
  follow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  seen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationPayload'] = ResolversParentTypes['NotificationPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['LikePayload']>, ParentType, ContextType>;
  follow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['CommentPayload']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationsPayload'] = ResolversParentTypes['NotificationsPayload']> = {
  count?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationPayload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationCreatedOrDeletedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationCreatedOrDeletedPayload'] = ResolversParentTypes['NotificationCreatedOrDeletedPayload']> = {
  operation?: Resolver<Maybe<ResolversTypes['NotificationOperationType']>, ParentType, ContextType>;
  notification?: Resolver<Maybe<ResolversTypes['NotificationPayload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  SuccessMessage?: SuccessMessageResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
  UsersPayload?: UsersPayloadResolvers<ContextType>;
  IsUserOnlinePayload?: IsUserOnlinePayloadResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  UserPostsPayload?: UserPostsPayloadResolvers<ContextType>;
  PostPayload?: PostPayloadResolvers<ContextType>;
  PostsPayload?: PostsPayloadResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessagePayload?: MessagePayloadResolvers<ContextType>;
  ConversationsPayload?: ConversationsPayloadResolvers<ContextType>;
  Follow?: FollowResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LikePayload?: LikePayloadResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentPayload?: CommentPayloadResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  NotificationPayload?: NotificationPayloadResolvers<ContextType>;
  NotificationsPayload?: NotificationsPayloadResolvers<ContextType>;
  NotificationCreatedOrDeletedPayload?: NotificationCreatedOrDeletedPayloadResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;