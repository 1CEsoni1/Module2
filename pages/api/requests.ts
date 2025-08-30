import { getRequests, createRequest, updateRequestStatus, deleteRequest } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const requests = await getRequests();
    return res.status(200).json(requests);
  }
  if (req.method === "POST") {
    const request = await createRequest(req.body);
    return res.status(201).json(request);
  }
  if (req.method === "PUT") {
    const { id, status } = req.body;
    const updated = await updateRequestStatus(id, status);
    return res.status(200).json(updated);
  }
  if (req.method === "DELETE") {
    const { id } = req.body;
    await deleteRequest(id);
    return res.status(204).end();
  }
  res.status(405).end();
}
