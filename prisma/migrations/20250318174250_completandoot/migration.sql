/*
  Warnings:

  - Added the required column `planificacion` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `fin` DATETIME(3) NULL,
    ADD COLUMN `hrequeridas` VARCHAR(191) NULL,
    ADD COLUMN `inicio` DATETIME(3) NULL,
    ADD COLUMN `personal` VARCHAR(191) NULL,
    ADD COLUMN `planificacion` DATETIME(3) NOT NULL,
    ADD COLUMN `repuestos` VARCHAR(191) NULL,
    ADD COLUMN `taller` VARCHAR(191) NULL,
    ADD COLUMN `tipo` VARCHAR(191) NOT NULL,
    ADD COLUMN `trabajo` VARCHAR(191) NULL;
