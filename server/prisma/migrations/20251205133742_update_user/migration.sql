-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "User_fullName_idx" ON "User"("fullName");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_phone_idx" ON "User"("phone");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");
