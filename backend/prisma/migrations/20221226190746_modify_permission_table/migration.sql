/*
  Warnings:

  - You are about to drop the `profile-permissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `profile-permissions` DROP FOREIGN KEY `profile-permissions_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `profile-permissions` DROP FOREIGN KEY `profile-permissions_profileId_fkey`;

-- DropTable
DROP TABLE `profile-permissions`;

-- CreateTable
CREATE TABLE `profilePermissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `permissionId` INTEGER NOT NULL,
    `profileId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profilePermissions` ADD CONSTRAINT `profilePermissions_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profilePermissions` ADD CONSTRAINT `profilePermissions_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
