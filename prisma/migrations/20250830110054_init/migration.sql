-- CreateTable
CREATE TABLE `RepairRequest` (
    `id` VARCHAR(191) NOT NULL,
    `equipmentName` VARCHAR(191) NOT NULL,
    `equipmentCode` VARCHAR(191) NOT NULL,
    `location` JSON NOT NULL,
    `reporter` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `priority` VARCHAR(191) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `reportDate` DATETIME(3) NOT NULL,
    `completedDate` DATETIME(3) NULL,
    `assignedTo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
