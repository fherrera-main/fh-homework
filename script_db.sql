CREATE TABLE [user_type] (
  [user_type_id] int PRIMARY KEY NOT NULL,
  [description] varchar(50) NOT NULL,
  [active] bit NOT NULL
)


CREATE TABLE [user] (
  [user_id] int PRIMARY KEY NOT NULL,
  [email] varchar(100) NOT NULL,
  [password] varchar(100) NOT NULL,
  [name] varchar(50) NOT NULL,
  [ap_p] varchar(50) NOT NULL,
  [ap_m] varchar(50) NOT NULL,
  [active] bit NOT NULL,
  [user_type_id] int
)


CREATE TABLE [task_status] (
  [task_status_id] int PRIMARY KEY NOT NULL,
  [description] varchar(50) NOT NULL,
  [active] bit NOT NULL
)


CREATE TABLE [task_type] (
  [task_type_id] int PRIMARY KEY NOT NULL,
  [description] varchar(50) NOT NULL,
  [active] bit NOT NULL
)


CREATE TABLE [task] (
  [task_id] int PRIMARY KEY NOT NULL,
  [name] varchar(50) NOT NULL,
  [create_date] datetime NOT NULL,
  [description] varchar(500) NOT NULL,
  [active] bit NOT NULL,
  [task_status_id] int,
  [task_type_id] int
)


CREATE TABLE [user_task] (
  [user_task_id] int PRIMARY KEY NOT NULL,
  [assignment_date] datetime NOT NULL,
  [end_date] datetime NOT NULL,
  [active] bit NOT NULL,
  [user_id] int,
  [task_id] int
)


ALTER TABLE [user] ADD FOREIGN KEY ([user_type_id]) REFERENCES [user_type] ([user_type_id])


ALTER TABLE [task] ADD FOREIGN KEY ([task_status_id]) REFERENCES [task_status] ([task_status_id])


ALTER TABLE [task] ADD FOREIGN KEY ([task_type_id]) REFERENCES [task_type] ([task_type_id])


ALTER TABLE [user_task] ADD FOREIGN KEY ([user_id]) REFERENCES [user] ([user_id])


ALTER TABLE [user_task] ADD FOREIGN KEY ([task_id]) REFERENCES [task] ([task_id])

