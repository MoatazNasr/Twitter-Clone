/*
  Warnings:

  - Added the required column `provider` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerAccountId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "expires_at" INTEGER,
ADD COLUMN     "id_token" TEXT,
ADD COLUMN     "provider" TEXT NOT NULL,
ADD COLUMN     "providerAccountId" TEXT NOT NULL,
ADD COLUMN     "refresh_token" TEXT,
ADD COLUMN     "scope" TEXT,
ADD COLUMN     "session_state" TEXT,
ADD COLUMN     "token_type" TEXT,
ADD COLUMN     "type" TEXT NOT NULL;
