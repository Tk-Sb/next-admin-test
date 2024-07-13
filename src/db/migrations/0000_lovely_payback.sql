CREATE TABLE IF NOT EXISTS "Students" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"notes" varchar[],
	"username" varchar NOT NULL,
	"password" varchar NOT NULL
);
