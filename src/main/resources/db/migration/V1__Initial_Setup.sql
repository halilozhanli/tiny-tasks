CREATE TABLE task (
    id VARCHAR(36) CONSTRAINT task_id_pkey PRIMARY KEY,
    name VARCHAR (128) NOT NULL,
    created TIMESTAMP WITH TIME ZONE NOT NULL,
    done BOOLEAN NOT NULL
);
