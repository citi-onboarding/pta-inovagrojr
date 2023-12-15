-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrossel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "strong" TEXT,
    "subtitle" TEXT,
    "content" TEXT NOT NULL,

    CONSTRAINT "Carrossel_pkey" PRIMARY KEY ("id")
);
