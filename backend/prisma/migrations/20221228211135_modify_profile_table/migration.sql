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
CREATE TABLE `_profile_permissions` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_profile_permissions_AB_unique`(`A`, `B`),
    INDEX `_profile_permissions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_profile_permissions` ADD CONSTRAINT `_profile_permissions_A_fkey` FOREIGN KEY (`A`) REFERENCES `permissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_profile_permissions` ADD CONSTRAINT `_profile_permissions_B_fkey` FOREIGN KEY (`B`) REFERENCES `profiles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
