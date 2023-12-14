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
CREATE TABLE "CulturaOrganizacional" (
    "id" SERIAL NOT NULL,
    "mission" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "values" TEXT NOT NULL,

    CONSTRAINT "CulturaOrganizacional_pkey" PRIMARY KEY ("id")
);
