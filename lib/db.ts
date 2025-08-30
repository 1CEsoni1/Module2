import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRequests = async () => {
  return prisma.repairRequest.findMany();
};

export const createRequest = async (data: any) => {
  return prisma.repairRequest.create({ data });
};

export const updateRequestStatus = async (id: string, status: string) => {
  return prisma.repairRequest.update({
    where: { id },
    data: { status },
  });
};

export const deleteRequest = async (id: string) => {
  return prisma.repairRequest.delete({
    where: { id },
  });
};
