/*
  Warnings:

  - You are about to alter the column `content` on the `BlogPost` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10000)`.

*/
-- AlterTable
ALTER TABLE "BlogPost" ALTER COLUMN "content" SET DATA TYPE VARCHAR(10000);
