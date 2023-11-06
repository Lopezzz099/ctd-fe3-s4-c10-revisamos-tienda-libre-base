import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "../db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lan }:any = req.query; 

  const info = products[lan]

  // res.end(`lan: ${info[lan]}`)
  if (info) {
    res.status(200).json(info);
  } else {
    res.status(404).json({ error: "Informacion no encontrada"});
  }
  }